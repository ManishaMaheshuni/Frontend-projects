let videos = [];
let currentVideo = null;
let likes = 0;
let dislikes = 0;
let subscribed = false;

fetch('videos.json')
  .then(res => res.json())
  .then(data => {
    videos = data;
    renderVideoList(videos);
  });

function renderVideoList(list) {
  const container = document.getElementById("video-list");
  container.innerHTML = "";
  list.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <h3>${video.title} ${video.isLive ? '<span style="color:red">🔴 LIVE</span>' : ''}</h3>
      <button onclick="playVideo(${video.id})">▶️ Play</button>
    `;
    container.appendChild(card);
  });
}

function playVideo(id) {
  const video = videos.find(v => v.id === id);
  currentVideo = video;
  likes = 0;
  dislikes = 0;
  subscribed = false;
  const container = document.getElementById("video-player");
  container.innerHTML = `
    <video controls autoplay src="${video.videoUrl}"></video>
    <div class="info">
      <h2>${video.title}</h2>
      <p>${video.isLive ? '<b style="color:red">🔴 LIVE</b>' : ''}</p>
      <button onclick="like()">👍 Like (${likes})</button>
      <button onclick="dislike()">👎 Dislike (${dislikes})</button>
      <button onclick="subscribe()">${subscribed ? '✅ Subscribed' : 'Subscribe'}</button>
    </div>
  `;
}

function like() {
  likes++;
  playVideo(currentVideo.id);
}

function dislike() {
  dislikes++;
  playVideo(currentVideo.id);
}

function subscribe() {
  subscribed = true;
  playVideo(currentVideo.id);
}

function filterCategory(cat) {
  if (cat === "all") renderVideoList(videos);
  else renderVideoList(videos.filter(v => v.category === cat));
}

// 🔊 Voice commands
function startSpeech() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();
  recognition.onresult = function(event) {
    const speech = event.results[0][0].transcript.toLowerCase();
    console.log("Speech:", speech);

    if (speech.includes("play")) {
      const title = speech.replace("play", "").trim();
      const found = videos.find(v => v.title.toLowerCase().includes(title));
      if (found) playVideo(found.id);
    } else if (speech.includes("like")) {
      like();
    } else if (speech.includes("dislike")) {
      dislike();
    } else if (speech.includes("subscribe")) {
      subscribe();
    }
  };
}
