import React, { Component } from 'react';
import { Card, Image, Header } from 'semantic-ui-react'

class DestinationCard extends Component {

  render() {

    let { name, photo } = this.props.destination
    
    return (
      <Card className="destination-card">
        <Image className="destination-card-image" src={photo} alt={name} wrapped ui={false}/>
        <Card.Content>
          <Header className="destination-header">{name}</Header>
        </Card.Content>
      </Card>
    );
  }

}

export default DestinationCard;
