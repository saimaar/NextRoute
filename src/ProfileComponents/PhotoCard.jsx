import React, { Component } from 'react';
import { Segment, Image, Dropdown } from 'semantic-ui-react'

function PhotoCard (props) {

  let allReviews = () => {
    if(props.profile_info.reviews === undefined){
      return 0
    }else if(props.profile_info.reviews.length && props.profile_info.reviews.length < 1){
      return 0
    }else{
      return props.profile_info.reviews.length
    }
  }

  let allBucketlistItems = () => {
    if(props.profile_info.bucketlist === undefined){
      return 0
    }else if(props.profile_info.bucketlist.length && props.profile_info.bucketlist.length < 1){
      return 0
    }else{
      return props.profile_info.bucketlist.length
    }
  }

  let handleDelete = () => {
    props.deleteProfile(props.profile_info.id)
  }



    let { username, picture, bio } = props.profile_info

    return (
        <Segment className="photo-container">
          <div className="photo-header-container">
            <Image className="profile-picture" src={props.profile_info.picture === "" ? 'https://react.semantic-ui.com/images/avatar/small/veronika.jpg' : props.profile_info.picture } alt={username} />
            <div className="photo-contribution-container">
              <span className="photo-contribution-title">Contributions</span>
              <span className="photo-contribution-number">{allReviews()}</span>
            </div>
            <div className="photo-bucketlist-container">
              <span className="photo-bucketllist-title">Bucketlist items</span>
              <span className="photo-bucketlist-number">{allBucketlistItems()}</span>
            </div>
          </div>
          <div className="bio-delete-container">
            <span className="profile-bio">{bio}</span>
            <Dropdown icon='cog' className="profile-delete-btn">
              <Dropdown.Menu>
                <Dropdown.Item
                  text='Delete Profile'
                  value='delete'
                  onClick={handleDelete}
                  />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Segment>
    );
  }


export default PhotoCard;
