import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  return videos.map(video => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
      />
    );
  });
};

export default VideoList;
