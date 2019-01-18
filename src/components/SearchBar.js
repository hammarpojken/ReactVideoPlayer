import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    userInput: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
  };
  onInputChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div>
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
