import React, { Component } from 'react';
import DestinationCard from './DestinationCard'
import {Link} from 'react-router-dom'
import { Card } from 'semantic-ui-react'

class DestinationContainer extends Component {

handleClick = () => {
  this.props.clearSearch("")
    // props.searchItems("")
}

  render() {
  let destinationCard = this.props.destinations.map(destination =>
     <Link onClick={this.handleClick} key={destination.id} to={`/${destination.id}`}><DestinationCard key={destination.id} destination={destination} routerProps={this.props.routerProps}/></Link>)

    return (
      <Card.Group className={localStorage.token ? "login-destination-container" : "destination-container"}>
        {destinationCard}
      </Card.Group>
    );
  }

}

export default DestinationContainer;
