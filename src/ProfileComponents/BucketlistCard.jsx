import React, { Component } from 'react';
import { Card, Image, Header, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function BucketlistCard(props){

  let  handleDelete = () => {
      // console.log(this.props);
      //this is add joiners id
        props.deleteBucketItem(props.bucketlistItem.id)
    }



        let {name, photo} = props.bucketlistItem.destination
        return (
          <div>
            <Link  key={props.bucketlistItem.destination.id} to={`/${props.bucketlistItem.destination.id}`}>
                <Card className="bucketlist-card">
                <Image className="bucketlist-image" src={photo} alt="bucketlist destination"/>
                <Card.Content className="buckelist-content">
                    <Header className="bucketlist-header">{name}</Header>
                </Card.Content>
            </Card>
            </Link>
            <Button size="big" fluid icon="trash" onClick={handleDelete}/>
          </div>
        );
    }


export default BucketlistCard;
