import React, { Component } from 'react'
import { Form, Button, Modal } from 'semantic-ui-react'

class Login extends Component {
    state={
        username: "",
        password: ""
    }

    handleAllChange = (evt) => {
        let {name, value} = evt.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.loginUser(this.state)
        this.props.history.push("/")

        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        
        return (
            <div>
            <Modal.Header className="sign-up-login-form-header">Log in</Modal.Header>
            <Modal.Description>
                <Form className="sign-up-login-form" onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label className="sign-up-login-label">Username</label>
                        <Form.Input
                            icon='user'
                            iconPosition='left'
                            className="sign-up-login-input"
                            type="username"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleAllChange}
                        />
                        <label className="sign-up-login-label">Password</label>
                        <Form.Input 
                            icon='lock'
                            iconPosition='left'
                            className="sign-up-login-input"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleAllChange}
                        />
                    </Form.Field>
                    <p className="invalid-logins">{this.props.error}</p>
                    <Form.Field className="sign-up-login-submit-btn" color="black" control={Button}>Log in</Form.Field>
                    </Form>
            </Modal.Description>
            </div>
        )
    }
}

export default Login;
