import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

export class MapContainer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{ lat: 29.822213, lng: -95.294935 },
            { lat: 29.822213, lng: -95.294935 }
                ]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 29.822213, lng: -95.294935}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBeaV-jMOX93W3SVqfAtMQXZece2FaGJ_g'
  })(MapContainer);