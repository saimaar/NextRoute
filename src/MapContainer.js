import React, { PureComponent } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  position: "absolute",
  "marginLeft": "3vh%",
  width: "100%",
  height: "60vh",
  border: "solid 2px gray",
  "borderRadius": "20px",
};
const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};
class MapContainer extends PureComponent {
  displayMarkers = () => {
    let { destination, getGeocode } = this.props;
    let lat = getGeocode !== undefined ? Number(getGeocode[0]) : null;
    let lon = getGeocode !== undefined ? Number(getGeocode[1]) : null;
    // console.log(lat);
    return (
      <Marker
        key={destination.id}
        id={destination.id}
        position={{
          lat: lat,
          lng: lon,
        }}
        onClick={() => console.log(`${destination.name}`)}
      />
    );
  };

  render() {
    let { getGeocode } = this.props;
    let lat = getGeocode !== undefined ? Number(getGeocode[0]) : null;
    let lon = getGeocode !== undefined ? Number(getGeocode[1]) : null;
    let center = { lat: lat, lng: lon };

    return (
      <Map
        google={this.props.google}
        className="map"
        containerStyle={containerStyle}
        zoom={8}
        style={mapStyles}
        center={center}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
