import React, { useEffect, useState } from "react";
import CommentContainer from "./CommentContainer";
import PhotoContainer from "./PhotoContainer";
import ThingsToDoContainer from "./ThingsToDoContainer";
import NotFound from "../NotFound";
import { Card, Header } from "semantic-ui-react";
import { Divider, Label, Grid, Segment, Container } from "semantic-ui-react";

import MapContainer from "../MapContainer";

function ShowContainer(props) {
  let [clicked, setClicked] = useState(false);
  let [destination, setDestination] = useState({});
  let [addJoiner, setAddJoiner] = useState([]);
  let [reviews, setReviews] = useState([]);

  useEffect(() => {
    let destination_id = parseInt(props.routerProps.match.params.id);
    fetch(`http://localhost:3000/destinations/${destination_id}`)
      .then((r) => r.json())
      .then((destination) => {
        setDestination(destination);
        setReviews(destination.reviews);
      }, []);
  }, [props.routerProps.match.params.id]);

  let createComment = (comment, rating) => {
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        Authorization: `bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        destination_id: destination.id,
        comment: comment,
        rating: rating,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => {
        let reviewArr = [...reviews, newReview];
        console.log("arr", reviewArr);
        setReviews(reviewArr);
      });
  };
  // console.log("revies",reviews);

  let deleteReview = (review_id) => {
    fetch(`http://localhost:3000/reviews/${review_id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedReview) => {
        let newReviewArr = reviews.filter(
          (review) => review.id !== deletedReview.review.id
        );
        setReviews(newReviewArr);
      });
  };

  let addToBucketList = (notifyAdd) => {
    // console.log(localStorage.token);
    fetch(`http://localhost:3000/add_joiners`, {
      method: "POST",

      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${localStorage.token}`,
      },

      body: JSON.stringify({
        destination_id: destination.id,
      }),
    })
      .then((r) => r.json())
      .then((add_joiner) => {
        // console.log(add_joiner);
        setAddJoiner(add_joiner);
        setClicked((prevState) => !prevState);
      });
  };

  let { things_to_dos } = destination;

  let thingsToDo = !things_to_dos ? null : things_to_dos.map((thingstodo) => (
        <ThingsToDoContainer key={thingstodo.id} thingstodo={thingstodo} />
      ));
      
  let notifyAdd = clicked ? (
    <Label
      pointing="right"
      className="notifyAdd"
      size="teal"
      basic
      color="black"
    >
      Added to your bucketlist!
    </Label>
  ) : null;

  return (
    <Container>
      {parseInt(props.routerProps.match.params.id) ? (
        <Container>
          <div className="buckNotify">
            {notifyAdd}
            <div
              onClick={addToBucketList}
              className="add-to-bucketlist"
              hidden={localStorage.token ? false : true}
            >
              + Add to bucketlist{" "}
            </div>
          </div>

          <Segment>
            <Grid columns={2} relaxed="very">
              <Grid.Column>
                <MapContainer
                  getGeocode={destination.get_geocode}
                  destination={destination}
                />
              </Grid.Column>
              <Grid.Column>
                <PhotoContainer destination={destination} clicked={clicked} />
              </Grid.Column>
            </Grid>
            <Divider vertical></Divider>
          </Segment>

          <Header className="things-to-do-container-header">
            Things to Do
          </Header>
          <Card.Group itemsPerRow={4}>
            {thingsToDo}
          </Card.Group>
          <CommentContainer
            routerProps={props.routerProps}
            deleteReview={deleteReview}
            createComment={createComment}
            reviews={reviews}
            user={props.user}
          />
        </Container>
      ) : (
        <Container>
          <NotFound />
        </Container>
      )}
    </Container>
  );
}

export default ShowContainer;
