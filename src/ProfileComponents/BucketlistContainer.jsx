import React, { Component } from 'react';
import BucketlistCard from './BucketlistCard'
// import DestinationCard from '../HomeComponents/DestinationCard'
import {Link} from 'react-router-dom'
import { Container, Header, Card } from 'semantic-ui-react'

function BucketlistContainer(props) {



    let bucketlistDestination = !props.bucketlist ? null :
     props.bucketlist.map(bucketlistItem =>
          <BucketlistCard  key={bucketlistItem.id}
          bucketlistItem={bucketlistItem}
          routerProps={props.routerProps}
          deleteBucketItem={props.deleteBucketItem}/>)

    return (
      <Container className="bucketlist-container">
          <Header className="bucketlist-container-header">Bucketlist</Header>
        <Card.Group className="bucketlist-group-card">
          {bucketlistDestination}
        </Card.Group>
      </Container>
    );
  }



export default BucketlistContainer;
