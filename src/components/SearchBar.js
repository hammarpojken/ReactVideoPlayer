import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    userInput: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.userInput);
  };
  onInputChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Video!</label>

            <input
              value={this.state.userInput}
              type="text"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
