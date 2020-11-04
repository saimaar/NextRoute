import React, { Component } from 'react';
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'
import { Header, Container } from 'semantic-ui-react'

function CommentContainer (props){

    let commentCard = props.reviews ?
      props.reviews.map(review =>
       <CommentCard key={review.id}
         review={review}
         user={props.user}
         deleteReview={props.deleteReview}
         routerProps={props.routerProps} /> ) : null

      return (
          <Container className="comment-container">
              <Header className="review-container-header">Share your Reviews</Header>
              {commentCard}
            <CommentForm createComment={props.createComment} />
          </Container>
      );
    }


export default CommentContainer;
