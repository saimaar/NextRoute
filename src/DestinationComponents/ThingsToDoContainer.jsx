import React from "react";
import { Card, Image, Segment } from "semantic-ui-react";

function ThingsToDoContainer(props) {
  let { name, bio, photo, destination } = props.thingstodo;

  return (
      <Card>
        <Image className="things-to-do-image" src={photo} alt={destination} />
        <Card.Header className="things-to-do-header">{name}</Card.Header>
        <Card.Description className="things-to-do-bio">{bio}</Card.Description>
      </Card>
  );
}

export default ThingsToDoContainer;
