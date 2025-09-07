import React from "react";

function VideoList({ videos, onVideoSelect }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {videos.map((video) => (
        <div key={video.id} onClick={() => onVideoSelect(video)} className="cursor-pointer">
          <img src={video.thumbnail} alt={video.title} />
          <p className="text-sm mt-1">{video.title}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
