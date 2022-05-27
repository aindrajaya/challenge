import React from 'react'
import ReactPlayer from 'react-player'

let player;

const VideoPlayer = ({
  endVideo,
  timePlayed,
  controls,
  playing,
  videoDuration
}) => {
  // return
  return(
    <div className="video-player">
      <ReactPlayer
        ref={(ref) => {
          player = ref;
        }} 
        url= 'https://www.youtube.com/embed/KGczofguB0c'
        title="YouTube video player" frameborder="0" allow="accelerometer"
        // url= 'https://res.cloudinary.com/amarachi-2812/video/upload/v1630370229/videoplayback_1_pr2hzi.mp4'
        playing = {true} 
        controls = {true}
        onStart={() => {
          videoDuration(player.getDuration);
          player.seekTo(timePlayed);
        }}
        onEnded={endVideo}
      />
    </div>
  )
}

export const MemoizedVideoPlayer = React.memo(VideoPlayer);