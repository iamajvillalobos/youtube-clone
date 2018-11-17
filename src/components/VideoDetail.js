import React from "react";
import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div />;
  }

  const title = video.snippet.title;
  const description = video.snippet.description;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail">
      <div className="video-player">
        <iframe
          className="video"
          title={video.id.videoId}
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <hr />
      <div className="video-details">
        <div className="video-title">
          <p>{title}</p>
        </div>
        <div className="video-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
