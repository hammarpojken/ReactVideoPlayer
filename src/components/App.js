import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends Component {
  state = {
    videoResults: [],
    selectedVideo: null
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
  onVideoSelect = video => {
    console.log(video);
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onInputSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videoResults}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}
