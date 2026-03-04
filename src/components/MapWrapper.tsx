'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center">
      <span className="text-sm text-slate-400">Karte wird geladen…</span>
    </div>
  ),
});

interface MapWrapperProps {
  lat: number;
  lng: number;
  zoom: number;
  markerText: string;
}

export default function MapWrapper({ lat, lng, zoom, markerText }: MapWrapperProps) {
  return <Map lat={lat} lng={lng} zoom={zoom} markerText={markerText} />;
}
