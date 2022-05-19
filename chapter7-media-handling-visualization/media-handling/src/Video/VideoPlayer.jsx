import React from "react";
import ReactPlayer from "react-player";

let player;

export const VideoPlayer = ({
  // return
  endVideo,
  timePlayed,
  controls,
  playing,
  videoDuration,
}) => (
  <div className="video-player">
    <ReactPlayer
      ref={(ref) => {
        player = ref;
      }}
      url="https://youtu.be/uMCSdgkdOJc"
      playing={playing}
      controls={true}
      onStart={() => {
        videoDuration(player.getDuration);
        player.seekTo(timePlayed);
      }}
      onEnded={endVideo}
    />
  </div>
);

export const MemoizedVideoPlayer = React.memo(VideoPlayer);
