/**
 * LokalLeads GraphQL API Client
 * API Endpoint: https://api.lokalleads.de/graphql-admin
 */

const API_ENDPOINT = 'https://api.lokalleads.de/graphql-admin';

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

interface FlowTransaction {
  id: string;
  trxToken: string;
  status?: string;
}

interface CalculatorIntegration {
  id: string;
  flowId: string;
  identName: string;
  locale: string;
  isCalculationEnabled: boolean;
  flowConfig: FlowConfig | null;
  branding: Branding | null;
}

interface FlowConfig {
  id: string;
  name: string;
  groups: FlowGroup[];
  translations: Record<string, string>;
}

interface FlowGroup {
  id: string;
  name: string;
  elements: FlowElement[];
}

interface FlowElement {
  id: string;
  type: string;
  name: string;
}

interface Branding {
  primaryColor?: string;
  secondaryColor?: string;
  logo?: string;
}

interface FlowInput {
  key: string;
  value: string | number | boolean;
}

interface CalculationResult {
  price?: number;
  details?: Record<string, unknown>;
  offers?: OfferItem[];
}

interface OfferItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

/**
 * Execute a GraphQL query against the LokalLeads API
 */
async function executeQuery<T>(
  query: string, 
  variables?: Record<string, unknown>
): Promise<GraphQLResponse<T>> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('LokalLeads API Error:', error);
    throw error;
  }
}

/**
 * Get calculator integration configuration
 */
export async function getCalculatorIntegration(
  identName: string,
  cookieToken?: string
): Promise<CalculatorIntegration | null> {
  const query = `
    query GetCalculatorIntegration($identName: String!, $cookieToken: String) {
      calculatorIntegration(identName: $identName, cookieToken: $cookieToken) {
        id
        flowId
        identName
        locale
        isCalculationEnabled
        flowConfig {
          id
          name
          groups {
            id
            name
          }
          translations
        }
        branding {
          primaryColor
          secondaryColor
          logo
        }
      }
    }
  `;

  const result = await executeQuery<{ calculatorIntegration: CalculatorIntegration }>(
    query, 
    { identName, cookieToken }
  );

  if (result.errors) {
    console.error('GraphQL Errors:', result.errors);
    return null;
  }

  return result.data?.calculatorIntegration || null;
}

/**
 * Create a new flow transaction (lead)
 */
export async function createFlowTransaction(
  identName: string,
  type: 'INTEGRATION' | 'CT_INTEGRATION' | 'MEASUREMENT' | 'CONSULTING' | 'TEST' = 'INTEGRATION'
): Promise<FlowTransaction | null> {
  const query = `
    mutation CreateFlowTransaction($input: CreateFlowTransaction!) {
      flowTransactionCreate(input: $input) {
        id
        trxToken
      }
    }
  `;

  const result = await executeQuery<{ flowTransactionCreate: FlowTransaction }>(
    query,
    { input: { identName, type } }
  );

  if (result.errors) {
    console.error('GraphQL Errors:', result.errors);
    return null;
  }

  return result.data?.flowTransactionCreate || null;
}

/**
 * Update a flow transaction with user inputs
 */
export async function updateFlowTransaction(
  trxToken: string,
  inputs: FlowInput[]
): Promise<boolean> {
  const query = `
    mutation UpdateFlowTransaction($input: UpdateFlowTransaction!) {
      flowTransactionUpdate(input: $input) {
        id
        trxToken
      }
    }
  `;

  const result = await executeQuery<{ flowTransactionUpdate: FlowTransaction }>(
    query,
    { input: { trxToken, inputs } }
  );

  if (result.errors) {
    console.error('GraphQL Errors:', result.errors);
    return false;
  }

  return !!result.data?.flowTransactionUpdate;
}

/**
 * Execute calculation with session token and inputs
 */
export async function executeCalculation(
  sessionToken: string,
  inputs: FlowInput[],
  debug: boolean = false
): Promise<CalculationResult | null> {
  const query = `
    query ExecuteCalculation($sessionToken: String!, $inputs: [FlowInput], $debug: Boolean) {
      calculation(sessionToken: $sessionToken, inputs: $inputs, debug: $debug)
    }
  `;

  const result = await executeQuery<{ calculation: CalculationResult }>(
    query,
    { sessionToken, inputs, debug }
  );

  if (result.errors) {
    console.error('GraphQL Errors:', result.errors);
    return null;
  }

  return result.data?.calculation || null;
}

/**
 * LokalLeads-Identifier des Kunden (von LokalLeads vergeben).
 * Solange er fehlt, fallen die Formulare auf den E-Mail-Versand zurück.
 */
export const LOKALLEADS_IDENT = process.env.NEXT_PUBLIC_LOKALLEADS_IDENT ?? '';

export type ContactLead = {
  name: string;
  phone?: string;
  email?: string;
  topic: string;
  message?: string;
};

export type SubmitResult = 'sent' | 'not-configured' | 'error';

/**
 * Lead über den LokalLeads-Flow anlegen:
 * flowTransactionCreate (INTEGRATION) → flowTransactionUpdate mit den Feldwerten.
 * Feldnamen (name/phone/email/topic/message) müssen mit der Flow-Konfiguration
 * bei LokalLeads übereinstimmen — nach Erhalt des identName einmal verifizieren.
 */
export async function submitContactLead(lead: ContactLead): Promise<SubmitResult> {
  if (!LOKALLEADS_IDENT) return 'not-configured';

  const transaction = await createFlowTransaction(LOKALLEADS_IDENT);
  if (!transaction?.trxToken) return 'error';

  const query = `
    mutation UpdateFlowTransaction($input: UpdateFlowTransaction!) {
      flowTransactionUpdate(input: $input) {
        id
        trxToken
      }
    }
  `;

  const inputs = [
    { name: 'name', values: lead.name },
    { name: 'phone', values: lead.phone ?? '' },
    { name: 'email', values: lead.email ?? '' },
    { name: 'topic', values: lead.topic },
    { name: 'message', values: lead.message ?? '' },
  ];

  const result = await executeQuery<{ flowTransactionUpdate: FlowTransaction }>(
    query,
    { input: { sessionToken: transaction.trxToken, inputs, notifications: true } }
  );

  if (result.errors) {
    console.error('GraphQL Errors:', result.errors);
    return 'error';
  }

  return result.data?.flowTransactionUpdate ? 'sent' : 'error';
}

// Export types for use in components
export type {
  CalculatorIntegration,
  FlowConfig,
  FlowGroup,
  FlowElement,
  FlowInput,
  FlowTransaction,
  CalculationResult,
  OfferItem,
  Branding,
};
