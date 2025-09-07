import React from 'react'

const VideoList = (props) => {

    console.log("videoList",props); //return obj in that data is a key
    let {title , videoUrl , views , thumbnailUrl} = props.data
    let {setVideoTitle , setVideoUrl} = props.updator

    let changeVideoPlayer = ()=>{
      setVideoUrl(videoUrl) //? changing url in player
      setVideoTitle(title) //? changing title in player
    }

  return (
    <>
    <div className='imgContainer'>
        <img src={thumbnailUrl} alt={title}
        height="200px"
        width='350px'
        onClick={changeVideoPlayer}/>
        <h3>{title}</h3>
        <h4>VIEWS : {views}</h4>
    </div>
    </>
  )
}

export default VideoList