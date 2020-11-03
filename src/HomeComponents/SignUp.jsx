import React, {Component, useEffect, useState} from 'react';
import { Form, Button, Modal } from 'semantic-ui-react'

function SignUp(props) {
 let [username, setUsername] = useState("")
 let [bio, setBio] = useState("")
 let [picture, setPicture] = useState("")
 let [password, setPassword] = useState("")
 let [error, setError] = useState("")

  let  handleSubmit = (evt) => {
    evt.preventDefault()
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username,
        bio,
        picture,
        password
      })
    })
    .then(r => r.json())
    .then(newUser => {
      if(newUser.error){
       setError(newUser.error)
      }else{
        localStorage.setItem("token", newUser.token)
        props.createNewUser(newUser)
         props.history.push("/")
         setError("")
      }
    })
  }


    return (
      <div>
        <Modal.Header className="sign-up-login-form-header">Sign up</Modal.Header>
        <Modal.Description>
          <Form className="sign-up-login-form" onSubmit={handleSubmit}>
            <Form.Field>
              <label className="sign-up-login-label"><b>Username</b></label>
              <Form.Input
                icon='user'
                iconPosition='left'
                className="sign-up-login-input"
                type="username"
                placeholder="Username"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <label className="sign-up-login-label"><b>Bio</b></label>
              <Form.Input
                icon='user'
                iconPosition='left'
                className="sign-up-login-input"
                type="bio"
                placeholder="Enter bio"
                name="bio"
                value={bio}
                onChange={e => setBio(e.target.value)}
              />

              <label className="sign-up-login-label"><b>Picture</b></label>
              <Form.Input
                icon='file image'
                iconPosition='left'
                className="sign-up-login-input"
                type="picture"
                placeholder="Picture"
                name="picture"
                value={picture}
                onChange={e => setPicture(e.target.value)}
              />

              <label className="sign-up-login-label"><b>Password</b></label>
              <Form.Input
                icon='lock'
                iconPosition='left'
                className="sign-up-logininput"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Field>
            <p className="invalid-logins">{error}</p>
            <Form.Field className="sign-up-login-submit-btn" color="black" control={Button}>Sign up</Form.Field>
          </Form>
        </Modal.Description>
      </div>
    );
}

export default SignUp;
