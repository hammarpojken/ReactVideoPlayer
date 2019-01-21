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
      videoResults: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelect = video => {
    console.log(video);
    this.setState({
      selectedVideo: video
    });
  };

  componentDidMount() {
    this.onInputSubmit("candy");
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videoResults}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
