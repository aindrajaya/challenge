import React, { useState } from "react";
import { MemoizedVideoPlayer } from "../Video/VideoPlayer";
import VideoOverlay from "../Video/VideoOverlay";
import styles from "../Video/styles/Home.module.css";

const Video = () => {
    //Berisi state
    const [startTime, setStartTime] = useState(1633538276355);
    const [controls, setControls] = useState(true);
    const [ended, setEnded] = useState(false);
    const [duration, setDuration] = useState(null);
    const [playing, setPlaying] = useState(true);

    let date = new Date();
    let currentTime = date.getTime();
    let timePlayed = (currentTime - startTime) % 1000;

    // endVideo
    const endVideo = () => {
        if (controls === false && ended === true) {
            if (playing === false) {
                return;
            } else {
                setPlaying(false);
            }
        } else {
            setControls(false);
            setEnded(true);
            setPlaying(false);
        }
    };

    // restartLive
    const restartLive = () => {
        let newDate = new Date();
        let newStartTime = newDate.getTime();
        setStartTime(newStartTime);
        setEnded(false);
        setPlaying(true);
        setControls(true);
    };

    // videoDuration
    const videoDuration = (num) => {
        setDuration(num);
    };

    if (timePlayed > duration) {
        endVideo();
    }

    // return
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className="live-event-container">
                    {/* Our VideoPlayer component */}

                    <MemoizedVideoPlayer
                        ended={ended}
                        timePlayed={timePlayed}
                        controls={controls}
                        endVideo={endVideo}
                        playing={playing}
                        videoDuration={videoDuration}
                    />
                    {ended ? <VideoOverlay /> : null}
                </div>

                {/* Our Restart button */}

                <button className="reset-button" onClick={restartLive}>
                    Restart Live Simulation
                </button>
            </main>
        </div>
    );
}

export default Video;