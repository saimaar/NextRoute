import React, { Component } from 'react';
import { Container, Rating } from 'semantic-ui-react'

function CommentCard(props){

  let handleDelete = () => {
    let review_id = props.review.id
    props.deleteReview(review_id)
  }

  let showDeleteButton = () => {
      if(localStorage.token && props.review.user_id === props.user.id){
          return <span className="review-delete-button" onClick={handleDelete}>&times;</span>
      }
  }


    console.log(props.review);
    let {comment, rating, username} = props.review

    return (
      <Container className="review-container">
          {showDeleteButton()}
          <p className="review-username">{username}</p>
          <div className="comment-rating-card">
            <Rating className="rating-stars-card" defaultRating={rating} icon="star" maxRating={5} disabled />
            <p className="review-comment-card">{comment}</p>
          </div>
      </Container>
    )
  }



export default CommentCard;
