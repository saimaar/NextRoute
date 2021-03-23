import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Form, Button, Rating } from "semantic-ui-react";

function CommentForm(props) {
  let [comment, setComment] = useState("");
  let [rating, setRating] = useState(0);

  let handleChange = (event) => {
    setComment(event.target.value);
  };

  let handleRate = (evt) => {
    let rating = parseInt(evt.target.getAttribute("aria-posinset"));
    setRating(rating);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();

    props.createComment(comment, rating);
    setRating(0);
    setComment("");
  };

  return (
    <Form onSubmit={handleSubmit} hidden={localStorage.token ? false : true}>
      <TextareaAutosize
        className="comment-form-input"
        label="Leave a review here:"
        placeholder="Write your thoughts"
        name="comment"
        value={comment}
        onChange={handleChange}
      />
      <Rating
        className="comment-form-rating"
        icon="star"
        name="rating"
        onRate={handleRate}
        maxRating={5}
        rating={rating}
      />
      <br />
      <Button className="create-review-button" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CommentForm;
