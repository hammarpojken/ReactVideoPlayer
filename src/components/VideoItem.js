import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
  const image = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  const desc = video.snippet.description;
  return (
    <div class="item video-item">
      <img className="ui image" src={image} />

      <div class="content">
        <div class="header">{title}</div>
        <div class="meta">
          <span>Description</span>
        </div>
        <div class="description">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
