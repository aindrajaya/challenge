import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
  return(
      <div className="video-player">
          <ReactPlayer 
          url= 'https://res.cloudinary.com/amarachi-2812/video/upload/v1630370229/videoplayback_1_pr2hzi.mp4'
          playing = {true} 
          controls = {true}
          />
      </div>
  )
}

export const MemoizedVideoPlayer = React.memo(VideoPlayer);