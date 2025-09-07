//! left container
import React, {useRef, useState } from 'react'

const Player = (props) => {

  console.log("player",props); //obj
  let {videoTitle,videoUrl} = props.data

  let videoRef = useRef() //? create reference-variable
  console.log("reference variable" , videoRef);

  let [play,setPlay] = useState(true) //! play the video
  let [muteVideo , setMuteVideo] = useState(true) //! mute and unmute

  let handleControl = ()=>{
    videoRef.current.autoplay=true //?to play the video automatically
    if(play){
      videoRef.current.play()
    }else{
      videoRef.current.pause()
    }
    setPlay(!play) //? toggle play state variable
  }

  let handleMute = ()=>{
    videoRef.current.muted = muteVideo
    setMuteVideo(!muteVideo) //? toggle muteVideo state
  }

  // ? videoRef.current.muted==true --> video is muted(unable to hear the sound)
  // ? videoRef.current.muted==false --> video is unmuted(able to hear the sound)

  return (
    <>
    <div className='player'>
      <h1>VIDEO PLAYER</h1>
      <video src={videoUrl}
      height='450px'
      width='500px'
      ref={videoRef}
      onClick={handleControl}></video>
      <h1>{videoTitle}</h1>
      <span onClick={handleMute}
      style={{cursor:"pointer"}}>control audio</span>
    </div>
    </>
  )
}

export default Player

//! video tag --> play() pause()