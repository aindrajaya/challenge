import React from "react";
import ReactPlayer from "react-player";
let player;

const VideoPlayer = ({
  endVideo,
  timePlayed,
  controls,
  playing,
  videoDuration,
}) => {
  return (
    <div className="video-player">
      <ReactPlayer
        ref={(ref) => {
          player = ref;
        }}
        // url="https://res.cloudinary.com/amarachi-2812/video/upload/v1630370229/videoplayback_1_pr2hzi.mp4"
        url="https://youtu.be/Hkgxs0IPHtM"
        // playing={playing}
        playing={true}
        // controls={controls}
        controls={true}
        onStart={() => {
          videoDuration(player.getDuration);
          player.seekTo(timePlayed);
        }}
        onEnded={endVideo}
      />
    </div>
  );
};

export const MemoizedVideoPlayer = React.memo(VideoPlayer);
