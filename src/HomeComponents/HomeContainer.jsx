import React, { Component } from 'react';
import AuthContainer from './AuthContainer'
import DestinationContainer from './DestinationContainer'
import SearchForm from './SearchForm'
import { Image } from 'semantic-ui-react'

function HomeContainer(props) {

    return (
      <div>
        <Image className="home-page-picture" src="https://www.katikiesmykonos.com/wp-content/uploads/2019/09/drz_katikies-mykonos_q1a0346.jpg" alt="home page picture of a beach"/>
        <SearchForm
          searchTerm={props.searchTerm}
          updateSearchForm={props.updateSearchForm}
        />
          <AuthContainer  />
        <div className="auth-destination-container">
          <DestinationContainer clearSearch={props.clearSearch}  destinations={props.destinations} />
        </div>
      </div>
    );


}

export default HomeContainer;
