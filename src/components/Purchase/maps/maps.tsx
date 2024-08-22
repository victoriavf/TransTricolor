import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MapComponent: React.FC = () => {
  return (
    <LoadScript
      googleMapsApiKey="TU_CLAVE_DE_API_DE_GOOGLE_MAPS" // Reemplaza con tu clave de API
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Puedes agregar marcadores u otros componentes aquí */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
