import React, { Component } from 'react';
import DestinationCard from './DestinationCard'
import {Link} from 'react-router-dom'
import { Card } from 'semantic-ui-react'

function DestinationContainer(props) {

let handleClick = () => {
  props.clearSearch("")

}
// console.log(props);
  let destinationCard = props.destinations !== undefined ?
    props.destinations.map(destination =>
     <Link onClick={handleClick} key={destination.id} to={`/${destination.id}`}>
       <DestinationCard key={destination.id} destination={destination} routerProps={props.routerProps}/></Link>)
         : null

    return (
      <Card.Group className={localStorage.token ? "login-destination-container" : "destination-container"}>
        {destinationCard}
      </Card.Group>
    );


}

export default DestinationContainer;
