import React, {useState, useCallback} from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const SearchMap = () => {

    const containerStyle = {
        width: '400px',
        height: '600px'
      };

      const center = {
        lat: 32.013186,
        lng: 34.748019
      };

      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      })

      const [map, setMap] = useState(null) ;
      const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap( map)
      }, [])
    
      const onUnmount = useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={7}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
      ) : <></>
}

export default SearchMap;