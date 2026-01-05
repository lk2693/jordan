'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';

// Leaflet CSS muss client-side geladen werden
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface MapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  markerText?: string;
}

// Custom Marker Icon
const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);
        border: 3px solid white;
      ">
        <svg style="transform: rotate(45deg); width: 20px; height: 20px; color: white;" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48]
  });
};

export default function Map({ 
  lat = 52.2350, 
  lng = 10.5650, 
  zoom = 16,
  markerText = "JORDAN GmbH"
}: MapProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [customIcon, setCustomIcon] = useState<L.DivIcon | null>(null);

  useEffect(() => {
    setIsMounted(true);
    setCustomIcon(createCustomIcon());
  }, []);

  if (!isMounted || !customIcon) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-500 font-medium">Karte wird geladen...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner relative">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <style>{`
        .leaflet-popup-content-wrapper {
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          padding: 0;
          overflow: hidden;
        }
        .leaflet-popup-content {
          margin: 0;
          min-width: 200px;
        }
        .leaflet-popup-tip {
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        .leaflet-container {
          font-family: inherit;
        }
      `}</style>
      <MapContainer
        center={[lat, lng]}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        {/* Moderner, heller Kartenstil von CartoDB */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{markerText}</p>
                  <p className="text-xs text-orange-500 font-medium">Heizung • Sanitär • Klima</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Rischbleek 6, 38126 Braunschweig</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0531-23 44 90 90</span>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/dir//Rischbleek+6,+38126+Braunschweig"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-xl text-sm font-semibold transition-colors"
              >
                Route starten
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* Overlay Gradient für Tiefe */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-black/5"></div>
    </div>
  );
}
