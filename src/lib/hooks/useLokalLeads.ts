'use client';

import { useState, useCallback } from 'react';
import {
  getCalculatorIntegration,
  createFlowTransaction,
  updateFlowTransaction,
  executeCalculation,
  createAppointment,
  type CalculatorIntegration,
  type FlowTransaction,
  type FlowInput,
  type CalculationResult,
} from '@/lib/lokalleads-api';

interface UseLokalLeadsOptions {
  identName?: string;
  onError?: (error: Error) => void;
}

interface UseLokalLeadsReturn {
  // State
  isLoading: boolean;
  error: string | null;
  integration: CalculatorIntegration | null;
  transaction: FlowTransaction | null;
  calculationResult: CalculationResult | null;
  
  // Actions
  initializeCalculator: (identName: string) => Promise<boolean>;
  startTransaction: () => Promise<boolean>;
  updateInputs: (inputs: FlowInput[]) => Promise<boolean>;
  calculate: (inputs: FlowInput[]) => Promise<CalculationResult | null>;
  requestCallback: (data: CallbackRequest) => Promise<boolean>;
  reset: () => void;
}

interface CallbackRequest {
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  preferredDate?: string;
  preferredTime?: string;
  reason?: string;
}

export function useLokalLeads(options: UseLokalLeadsOptions = {}): UseLokalLeadsReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [integration, setIntegration] = useState<CalculatorIntegration | null>(null);
  const [transaction, setTransaction] = useState<FlowTransaction | null>(null);
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);

  const handleError = useCallback((err: unknown) => {
    const message = err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten';
    setError(message);
    options.onError?.(new Error(message));
  }, [options]);

  const initializeCalculator = useCallback(async (identName: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getCalculatorIntegration(identName);
      if (result) {
        setIntegration(result);
        return true;
      } else {
        setError('Rechner-Konfiguration konnte nicht geladen werden');
        return false;
      }
    } catch (err) {
      handleError(err);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [handleError]);

  const startTransaction = useCallback(async (): Promise<boolean> => {
    if (!integration?.identName) {
      setError('Bitte zuerst den Rechner initialisieren');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await createFlowTransaction(integration.identName);
      if (result) {
        setTransaction(result);
        return true;
      } else {
        setError('Transaktion konnte nicht erstellt werden');
        return false;
      }
    } catch (err) {
      handleError(err);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [integration, handleError]);

  const updateInputs = useCallback(async (inputs: FlowInput[]): Promise<boolean> => {
    if (!transaction?.trxToken) {
      setError('Keine aktive Transaktion');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      const success = await updateFlowTransaction(transaction.trxToken, inputs);
      return success;
    } catch (err) {
      handleError(err);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [transaction, handleError]);

  const calculate = useCallback(async (inputs: FlowInput[]): Promise<CalculationResult | null> => {
    if (!transaction?.trxToken) {
      // Create transaction if not exists
      if (integration?.identName) {
        const newTransaction = await createFlowTransaction(integration.identName);
        if (newTransaction) {
          setTransaction(newTransaction);
        } else {
          setError('Transaktion konnte nicht erstellt werden');
          return null;
        }
      } else {
        setError('Bitte zuerst den Rechner initialisieren');
        return null;
      }
    }

    setIsLoading(true);
    setError(null);

    try {
      const sessionToken = transaction?.trxToken || '';
      const result = await executeCalculation(sessionToken, inputs);
      if (result) {
        setCalculationResult(result);
        return result;
      } else {
        setError('Berechnung fehlgeschlagen');
        return null;
      }
    } catch (err) {
      handleError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [transaction, integration, handleError]);

  const requestCallback = useCallback(async (data: CallbackRequest): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await createAppointment({
        channel: 'PHONE',
        reason: data.reason || 'Rückrufanfrage vom Wartungsrechner',
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
      });

      if (result) {
        return true;
      } else {
        setError('Terminanfrage konnte nicht gesendet werden');
        return false;
      }
    } catch (err) {
      handleError(err);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [handleError]);

  const reset = useCallback(() => {
    setError(null);
    setTransaction(null);
    setCalculationResult(null);
  }, []);

  return {
    isLoading,
    error,
    integration,
    transaction,
    calculationResult,
    initializeCalculator,
    startTransaction,
    updateInputs,
    calculate,
    requestCallback,
    reset,
  };
}

export type { CallbackRequest, UseLokalLeadsReturn };
