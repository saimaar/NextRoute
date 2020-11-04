import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'


function SearchForm(props){

  let handleSearch = (evt) => {
    props.updateSearchForm(evt.target.value)
  }
    return (
      <div>
          <Form className="search-form">
            <Form.Input
              className="search-input"
              icon="search"
              name="search"
              placeholder="Search your next destination..."
              value={props.searchTerm}
              onChange={handleSearch}
            />
          </Form>
      </div>
    );

}

export default SearchForm;
