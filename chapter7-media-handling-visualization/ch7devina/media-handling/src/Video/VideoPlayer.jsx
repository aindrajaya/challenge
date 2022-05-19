// export const VideoPlayer = {
  // return
// }

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
      url="https://www.youtube.com/watch?v=v0k4xSwUfpg"
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