'use client';

import { useLoadScript, GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { useMemo, useState } from 'react';

interface MapProps {
  address: string;
  clinicName: string;
  center: {
    lat: number;
    lng: number;
  };
}

export default function GoogleMapsComponent({ address, clinicName, center }: MapProps) {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCX0FSwT9Mb7vrv_5jzLy3aOfSEdta38s8',
  });

  const options = useMemo(() => ({
    mapId: "vethome-map",
    disableDefaultUI: true,
    clickableIcons: false,
  }), []);

  const markerIcon = {
    url: '/logo-vethome.png',
    scaledSize: isLoaded ? new google.maps.Size(40, 40) : undefined,
  };

  if (!isLoaded) {
    return (
      <div className="h-[300px] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Loading map...</p>
      </div>
    );
  }

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="h-[300px] rounded-lg"
      options={options}
    >
      <MarkerF
        position={center}
        title={clinicName}
        icon={markerIcon}
        onClick={() => setIsInfoWindowOpen(true)}
      />
      {isInfoWindowOpen && (
        <InfoWindowF
          position={center}
          onCloseClick={() => setIsInfoWindowOpen(false)}
        >
          <div className="p-2">
            <h3 className="font-semibold text-base mb-1">{clinicName}</h3>
            <p className="text-sm text-gray-600">{address}</p>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
} 