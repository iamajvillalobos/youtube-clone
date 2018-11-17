import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const thumbnailURL = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  const channelName = video.snippet.channelTitle;

  return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
      <div className="thumbnail">
        <img src={thumbnailURL} alt="thumbnail" />
      </div>
      <div className="description">
        <p className="video-title">
          <strong>{title}</strong>
        </p>
        <p className="channel-name">{channelName}</p>
      </div>
    </div>
  );
};

export default VideoItem;
