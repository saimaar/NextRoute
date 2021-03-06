import React from "react";
import { Card, Image, Header } from "semantic-ui-react";

function DestinationCard(props) {
  let { name, photo } = props.destination;

  return (
    <Card className="destination-card">
      <Image
        className="destination-card-image"
        src={photo}
        alt={name}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Header className="destination-header">{name}</Header>
      </Card.Content>
    </Card>
  );
}

export default DestinationCard;
