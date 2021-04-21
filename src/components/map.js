

import React, { useState } from "react";
// import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMapReact from 'google-map-react';
// import pic from '../images/google-map-marker-png-1.jpg';
import { Icon } from '@iconify/react'
import mapMarker from '@iconify-icons/mdi/map-marker';



const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={mapMarker} className="pin-icon"/>
    {/* <p className="pin-text">{text}</p> */}
  </div>
)

 
const Map = ({stopLatLng, setStopLatLng}) => {

    const [center, setCenter] = useState({
        lat: stopLatLng.lat,
        lng: stopLatLng.lng
    });

    // const renderMarkers = (map, maps) => {
    //   let marker = new maps.Marker({
    //   position: { lat: center.lat, lng: center.lng },
    //   map,
    //   title: 'Hello World!'
    //   });
    //   // setMapMarker(marker);
    //   console.log(marker);
    //   return marker;
    //  };

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={center}
          defaultZoom={11}
          // onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
          onDrag={(map) => dragEnd(map)}
          // onZoom={(map) => dragEnd(map)}
          // onChange={({map}) => dragEnd(map)}
        >
          <LocationPin
          lat={center.lat}
          lng={center.lng}
          text={"center"}
        />
        </GoogleMapReact>
      </div>
    );

    function dragEnd(map){
      // console.log(map.center.lat())

      setCenter({lat: map.center.lat(), lng: map.center.lng()})
      setStopLatLng({lat: map.center.lat(), lng: map.center.lng()})
    }
}

export default Map;