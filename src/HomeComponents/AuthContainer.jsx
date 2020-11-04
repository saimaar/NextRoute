import React, { Component } from 'react';
import { Icon, Label } from 'semantic-ui-react'


function AuthContainer (props) {
// console.log(props.user);
    return (
      <div>
        {localStorage.token ?
          <div  className="welcome-container">
            <Label image size="big">
              <img src={props.user.picture === "" ? "https://react.semantic-ui.com/images/avatar/small/veronika.jpg" : props.user.picture }/>
              Welcome {props.user.username}!
            </Label> </div> : null }
      </div>
    );

}



export default AuthContainer;
