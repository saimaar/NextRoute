import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Header, Button, Image, Modal } from 'semantic-ui-react'
import SignUp from './HomeComponents/SignUp'
import Login from './HomeComponents/Login'

function HeaderContainer(){

  let logOutUser = () => {

  }


    return (
      <div className="page-header">
        <Link to="/">
          <div className="logo-title-header">
            <Image src="https://static.tacdn.com/favicon.ico?v2" alt="logo" className="page-logo"/>
            <Header className="page-title">TravelAdvisor</Header>
          </div>
        </Link>
        <Header className="header-buttons">
          {localStorage.token ?
            <>
              <Link to="/profile" >
                <Button className="profile-btn">Profile</Button>
              </Link>
              <Button className="logout-btn">Logout</Button>
              <Link to="/" >
              <Button className="home-btn">Home</Button>
              </Link>
            </> :
            <>
            <Modal trigger={<Button className="sign-up-btn">Log in</Button>}>
              <Login />
            </Modal>
            <Modal trigger={<Button className="sign-up-btn">Sign up</Button>}>
            <SignUp />
          </Modal>
          <Link to="/" >
          <Button className="home-btn">Home</Button>
          </Link>
          </>
          }
        </Header>
      </div>
    );

}

export default HeaderContainer;
