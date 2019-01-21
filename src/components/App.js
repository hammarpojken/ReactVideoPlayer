import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

export default class App extends Component {
  state = {
    videoResults: []
  };
  onInputSubmit = async input => {
    const response = await youtube.get("/search", {
      params: {
        q: input
      }
    });
    this.setState({
      videoResults: response.data.items
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onInputSubmit} />
      </div>
    );
  }
}
