import React, { Component } from 'react';
import { Image, Header } from 'semantic-ui-react'

function PhotoContainer(props){

    let {name, bio, photo, trip_type} = props.destination

    return (
        <div className="destination-show-container">
          <Header className="destination-showpage-name">{name}</Header>
          <Image className="destination-showpage-image" src={photo} alt={name} />
          <Header className="destination-showpage-type">{trip_type}</Header>
          <p className="destination-showpage-bio">{bio}</p>
        </div>

    );
}

export default PhotoContainer;
