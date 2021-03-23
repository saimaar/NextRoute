import React from "react";
import {Image} from "semantic-ui-react";

function PhotoContainer(props) {
  let { name, bio, photo, trip_type } = props.destination;

  return (
    <div className="destination-show-container">
      <h2 className="destination-showpage-bio">{name}</h2>
      <Image src={photo} alt={name} />
      <p className="destination-showpage-bio">{trip_type}</p>
      <p className="destination-showpage-bio">{bio}</p>
    </div>
  );
}

export default PhotoContainer;
