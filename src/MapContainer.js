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

  displayMarkers = () => {

        let {destination, getGeocode} = this.props
        let lat = getGeocode !== undefined ? Number(getGeocode[0]) : null
        let lon = getGeocode !== undefined ? Number(getGeocode[1]) : null
        // console.log(lat);
        return <Marker key={destination.id} id={destination.id} position={{
            lat: lat,
            lng: lon
        }}
        onClick={() => console.log(`${destination.name}`)} />
    }

  render() {
    let {destination, getGeocode} = this.props
    let lat = getGeocode !== undefined ? Number(getGeocode[0]) : null
    let lon = getGeocode !== undefined ? Number(getGeocode[1]) : null
    let center = { lat: lat, lng: lon}

    return (
        <div className="wrapper">
          <Map
            google={this.props.google}
             className="map"
             zoom={6}
              style={mapStyles}
              center={center}>
              {this.displayMarkers()}
               </Map>

           </div>

    );
  }

}

export default (GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer));
