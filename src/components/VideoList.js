import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  return videos.map(video => {
    return <VideoItem video={video} key={video.id.videoId} />;
  });
};

export default VideoList;
