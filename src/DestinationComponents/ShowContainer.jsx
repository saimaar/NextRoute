import React, { Component, useEffect, useState } from 'react';
import CommentContainer from './CommentContainer'
import PhotoContainer from './PhotoContainer'
import ThingsToDoContainer from './ThingsToDoContainer'
import NotFound from '../NotFound'
import { Card, Header } from 'semantic-ui-react'
import { Divider, Form, Label } from 'semantic-ui-react'

function ShowContainer(props) {

 let [clicked, setClicked] = useState(false)
 let [destination, setDestination] = useState({})
 let [addJoiner, setAddJoiner] = useState([])
 let [reviews, setReviews] = useState([])

 useEffect(()=>{
   let destination_id = parseInt(props.routerProps.match.params.id)
   fetch(`http://localhost:3000/destinations/${destination_id}`)
   .then(r => r.json())
   .then(destination => {
     setDestination(destination)
   })

 },[])


let createComment = (newComment) => {

    fetch('https://traveladvisor-api.herokuapp.com/reviews', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "Authorization": `bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        destination_id: destination.id,
        comment: newComment.comment,
        rating: newComment.rating
      })
    })
    .then(r => r.json())
    .then((newReview) => {
      let reviewArr = [...reviews, newReview]
      setReviews(reviewArr)
    })
  }

  let deleteReview = (review_id) => {
    fetch(`https://traveladvisor-api.herokuapp.com/reviews/${review_id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(deletedReview => {
      let newReviewArr = reviews.filter(review => review.id !== deletedReview.review.id)
      setReviews(newReviewArr)
    })
  }



  let addToBucketList = (notifyAdd) => {
    console.log(localStorage.token);
      fetch(`http://localhost:3000/add_joiners`, {
        method: "POST",

        headers: {
          "content-type": "application/json",
          "Authorization": `bearer ${localStorage.token}`
        },

        body: JSON.stringify({
          destination_id: destination.id
        })
      })
      .then(r => r.json())
      .then(add_joiner => {
        console.log(add_joiner);
        //   let newAddJoiner = [...destination.add_joiners, add_joiner]
        //
        //
        setAddJoiner(add_joiner)
        setClicked((prevState) => !prevState)
      })
  }

console.log(addJoiner);
console.log(destination);

    let { things_to_dos } = destination
    let thingsToDo = !things_to_dos ? null : things_to_dos.map(thingstodo => <ThingsToDoContainer key={thingstodo.id} thingstodo={thingstodo}/>)
    let notifyAdd =  clicked ? <Label pointing ="right" className="notifyAdd" size ="teal" basic color='black' >
          Added to your bucketlist!
        </Label> : null

    return (
      <div>
        {props.destinationsId.includes(parseInt(props.routerProps.match.params.id)) ?
          <div>
            <div className="buckNotify">
          {notifyAdd}
          <div onClick={addToBucketList} className="add-to-bucketlist" hidden={localStorage.token ? false : true}>+ Add to bucketlist </div>
            </div>
        <PhotoContainer destination={destination} clicked={clicked}/>
            <Header className="things-to-do-container-header">Things to Do</Header>
            <Card.Group className="things-to-do-container">{thingsToDo}</Card.Group>
            <CommentContainer routerProps={props.routerProps} deleteReview={deleteReview} createComment={createComment} destination={destination} user={props.user} />
          </div>
          :
          <div><NotFound/></div>
        }

      </div>
    );

}

export default ShowContainer;
