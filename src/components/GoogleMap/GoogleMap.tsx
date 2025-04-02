
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: '468px',
  width: '577px',
};

const center = {
  lat: 51.505,
  lng: -0.09,
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;