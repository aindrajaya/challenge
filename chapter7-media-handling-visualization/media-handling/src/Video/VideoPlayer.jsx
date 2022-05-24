import React from "react";
import ReactPlayer from "react-player";

let player;

export const VideoPlayer = ({
  endVideo,
  timePlayed,
  controls,
  playing,
  videoDuration
}) => (
  <div className="video-player">
    <ReactPlayer
      ref={(ref) => {
        player = ref;
      }}
      url="https://youtu.be/_xV-srwRR5o"
      playing={true}
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