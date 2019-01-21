import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const image = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  const desc = video.snippet.description;
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img className="ui image" src={image} />

      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
