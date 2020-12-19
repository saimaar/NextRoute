import React, { PureComponent } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const mapStyles = {
    position: 'absolute',
    "margin-top": '3vh',
    "margin-left": '3vh%',
    width: '30%',
    height: "60vh",
    border: 'solid 2px gray',
    "border-radius": "20px"
};

class MapContainer extends PureComponent {


  render() {
    return (
        <div className="wrapper">
          <Map
            google={this.props.google}
             className="map"
              zoom={13}
              style={mapStyles}
              initialCenter={{ lat: 40.7229, lng: -73.99992}}>
               </Map>

           </div>

    );
  }

}

export default (GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer));
