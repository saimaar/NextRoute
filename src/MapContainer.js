import React, { PureComponent } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
class MapContainer extends PureComponent {

  render() {
    return (
      <div></div>
    );
  }

}

export default (GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer));
