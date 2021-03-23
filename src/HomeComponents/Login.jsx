import React, { useState } from "react";
import { Form, Button, Modal } from "semantic-ui-react";

function Login(props) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = (evt) => {
    evt.preventDefault();
    props.loginUser(username, password);
    props.history.push("/");
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <Modal.Header className="sign-up-login-form-header">Log in</Modal.Header>
      <Modal.Description>
        <Form className="sign-up-login-form" onSubmit={handleSubmit}>
          <Form.Field>
            <label className="sign-up-login-label">Username</label>
            <Form.Input
              icon="user"
              iconPosition="left"
              className="sign-up-login-input"
              type="username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label className="sign-up-login-label">Password</label>
            <Form.Input
              icon="lock"
              iconPosition="left"
              className="sign-up-login-input"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Field>
          <p className="invalid-logins">{props.error}</p>
          <Form.Field
            className="sign-up-login-submit-btn"
            color="black"
            control={Button}
          >
            Log in
          </Form.Field>
        </Form>
      </Modal.Description>
    </div>
  );
}

export default Login;
