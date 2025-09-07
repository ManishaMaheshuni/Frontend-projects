import React, { useState } from "react";
import videos from "./data";
import "./App.css";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [search, setSearch] = useState("");
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [filter, setFilter] = useState("all"); // new

  // 🗣 Voice search function
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech Recognition not supported in this browser. Use Google Chrome.");
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearch(transcript);
    };
    recognition.start();
  };

  // 💬 Comment submit
  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  // 🧠 Filter + Search logic
  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" ? true : filter === "live" ? video.isLive : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Filters</h2>
        <ul>
          <li onClick={() => setFilter("all")}>All Videos</li>
          <li onClick={() => setFilter("live")}>Live Now</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>YouTube Clone 🎬</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={startListening}>🎤</button>
        </div>

        {/* Player */}
        <div className="video-player">
          <video key={selectedVideo.id} controls width="100%" height="400">
            <source src={selectedVideo.videoUrl} type="video/mp4" />
          </video>
          <div className="video-details">
            <h2>{selectedVideo.title}</h2>
            <p>{selectedVideo.description}</p>
            <p>
              <strong>{selectedVideo.author}</strong> | {selectedVideo.views} views
              {selectedVideo.isLive && <span className="live-badge">LIVE</span>}
            </p>
            <button className="subscribe-btn">Subscribe</button>
          </div>

          {/* Comments */}
          <div className="comments">
            <h3>Comments</h3>
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={handleCommentSubmit}>Post</button>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>🗨️ {comment}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Video List */}
        <div className="video-grid">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => {
                setSelectedVideo(video);
                setComments([]); // Reset comments per video
              }}
            >
              <img src={video.thumbnailUrl} alt={video.title} />
              <div className="info">
                <p className="title">{video.title}</p>
                <p className="author">{video.author}</p>
                <p className="duration">{video.duration}</p>
                {video.isLive && <span className="live-badge">LIVE</span>}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
