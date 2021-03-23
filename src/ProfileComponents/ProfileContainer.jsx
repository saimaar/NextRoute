import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";
import BucketlistContainer from "./BucketlistContainer";
import { Image } from "semantic-ui-react";

function ProfileContainer(props) {
  let [user, setUser] = useState({});
  let [bucketlist, setBucketlist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      headers: {
        Authorization: `bearer ${localStorage.token}`,
      },
    })
      .then((r) => r.json())
      .then((user) => {
        setUser(user);
        setBucketlist(user.bucketlist);
      });
  }, []);

  let deleteBucketItem = (deletedId) => {
    fetch(`http://localhost:3000/add_joiners/${deletedId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedItem) => {
        console.log(deletedItem);
        let newBucketListArr = bucketlist.filter(
          (bucketlistItem) => bucketlistItem.id !== deletedItem.id
        );
        setBucketlist(newBucketListArr);
      });
  };

  let deleteProfile = (userId) => {
    fetch(`https://traveladvisor-api.herokuapp.com/${userId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedUser) => {
        setUser({});
        localStorage.clear();
        props.routerProps.history.push("/");
      });
  };

  return (
    <div>
      <Image
        className="profile-cover-photo"
        src="https://www.katikiesmykonos.com/wp-content/uploads/2019/09/drz_katikies-mykonos_q1a0346.jpg"
        alt="picture placeholder"
      />
      <PhotoCard profile_info={user} deleteProfile={deleteProfile} />
      <BucketlistContainer
        bucketlist={bucketlist}
        deleteBucketItem={deleteBucketItem}
      />
    </div>
  );
}

export default ProfileContainer;
