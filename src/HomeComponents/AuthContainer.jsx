import React from "react";
import { Label } from "semantic-ui-react";

function AuthContainer(props) {
  // console.log(props.user);
  return (
    <div>
      {localStorage.token ? (
        <div className="welcome-container">
          <Label image size="big">
            <img
              alt="user"
              src={
                props.user.picture === ""
                  ? "https://react.semantic-ui.com/images/avatar/small/veronika.jpg"
                  : props.user.picture
              }
            />
            Welcome {props.user.username}!
          </Label>{" "}
        </div>
      ) : null}
    </div>
  );
}

export default AuthContainer;
