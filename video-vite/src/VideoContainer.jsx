import React, { useState } from 'react'
import Player from './Player'
import VideoList from './VideoList'
import JSON from "./video.json"  //import json data

const VideoContainer = () => {

  let [videoTitle , setVideoTitle] = useState("Big Buck Bunny") //? storing title of 1st video
  let [videoUrl , setVideoUrl] = useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
  //? storing videoUrl of 1st video

  let [videoData, setVideoData]=useState(JSON) //? storing json data inside state

//   console.log("video data" , videoData); //array

  return (
    <>
    <section id='mainContainer'>
        <aside className='leftContainer'>
            <Player data={{videoTitle,videoUrl}}/>
        </aside>
        <aside className='rightContainer'>
            {videoData.map((val)=>{
                // console.log("current val" , val); //obj
                return <VideoList key={val.id} data={val}
                updator={{setVideoTitle,setVideoUrl}}/>
            })}
        </aside>
    </section>
    </>
  )
}

export default VideoContainer