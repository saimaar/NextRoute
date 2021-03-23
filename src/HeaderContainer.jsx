import React from "react";
import { Link } from "react-router-dom";
import { Header, Button, Image, Modal } from "semantic-ui-react";
import SignUp from "./HomeComponents/SignUp";
import Login from "./HomeComponents/Login";

function HeaderContainer(props) {
  let logOutUser = () => {
    localStorage.clear();
    props.history.push("/");
  };

  return (
    <div class="StreamsHero-image">
      <div class="StreamsHero-content">
        <div class="StreamsHero-buttonContainer">
          <Link to="/">
            <div className="logo-title-header">
              <Image
                src="https://png.pngtree.com/png-vector/20190521/ourmid/pngtree-cute-travel-icons-design-png-image_1040013.jpg"
                alt="logo"
                className="page-logo"
              />
              <Header className="page-title">Next Route</Header>
            </div>
          </Link>
          {localStorage.token ? (
            <>
              <Link to="/profile">
                <Button className="profile-btn">Profile</Button>
              </Link>
              <Button onClick={logOutUser} className="logout-btn">
                Logout
              </Button>
              <Link to="/">
                <Button
                  data-component="hero"
                  className="Button StreamsSignUp js-signup"
                >
                  Home
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Modal
                trigger={
                  <Button
                    data-component="hero"
                    className="Button StreamsLogin js-login"
                  >
                    Log in
                  </Button>
                }
              >
                <Login
                  loginUser={props.loginUser}
                  history={props.history}
                  error={props.error}
                />
              </Modal>
              <Modal
                trigger={
                  <Button
                    data-component="hero"
                    className="Button StreamsSignUp js-signup"
                  >
                    Sign up
                  </Button>
                }
              >
                <SignUp
                  history={props.history}
                  createNewUser={props.createNewUser}
                />
              </Modal>
              <Link to="/">
                <Button className="home-btn">Home</Button>
              </Link>
            </>
          )}
        </div>
        <h2 class="StreamsHero-header">Search your next route here...</h2>
        <p class="StreamsHero-blurb">Search, Book, Travel and Repeat!</p>
      </div>
    </div>
  );
}

export default HeaderContainer;
