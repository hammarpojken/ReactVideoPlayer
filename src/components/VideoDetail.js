import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>No video selected</div>;
  }
  const videoUrl = "https://www.youtube.com/embed/" + video.id.videoId;
  return (
    <div>
      <div className="ui embed">
        <iframe title="videoplayer" src={videoUrl} />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
