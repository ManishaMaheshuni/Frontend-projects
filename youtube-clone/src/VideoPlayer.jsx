import React from "react";

function VideoPlayer({ video }) {
  if (!video) return <p>Select a video to play</p>;

  return (
    <div className="mb-6">
      <iframe
        width="100%"
        height="300"
        src={video.videoUrl}
        title={video.title}
        allowFullScreen
      ></iframe>
      <h2 className="text-xl font-semibold mt-2">{video.title}</h2>
    </div>
  );
}

export default VideoPlayer;
