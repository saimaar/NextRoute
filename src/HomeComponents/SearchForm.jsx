import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
class SearchForm extends Component {
  
  handleSearch = (evt) => {
    this.props.updateSearchForm(evt.target.value)
  }

  render() {

    return (
      <div>
        
          <Form className="search-form">
            <Form.Input
              className="search-input"
              icon="search"
              name="search"
              placeholder="Search your next destination..."
              value={this.props.search}
              onChange={this.handleSearch}
            />

          </Form>
      </div>
    );
  }

}

export default SearchForm;
