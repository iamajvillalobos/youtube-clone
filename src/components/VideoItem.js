import React from "react";
import "./VideoItem.css";
import { Consumer } from "./AppContext";

const VideoItem = ({ video }) => {
  const thumbnailURL = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  const channelName = video.snippet.channelTitle;

  return (
    <Consumer>
      {context => (
        <div
          className="video-item"
          onClick={() => context.onVideoSelect(video)}
        >
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
      )}
    </Consumer>
  );
};

export default VideoItem;
