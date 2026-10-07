// components/MapWithMarker.tsx
"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = { width: "100%", height: "100%" };
const center = { lat: 13.771368980407715, lng: 100.52741241455078 };

export function MapWithMarker() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading map…</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={center} />
    </GoogleMap>
  );
}
