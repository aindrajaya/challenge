import React, {useState, useEffect} from 'react';
// import { MemoizedVideoPlayer } from "./Video/VideoPlayer";
// import VideoOverlay from "./Video/VideoOverlay";
// import styles from "./Video/styles/Home.module.css";
// import BlogPhoto from './Image';
// import MovieList from './Report/MovieList';
import { Chart } from "./Components/componentchart";

// import AppDropzone from "./AppDropzone";
// import ReactPlayer from 'react-player';
// import "./styles.css"
// import Video from "./Video";

const App = () => {
  // const [startTime, setStartTime] = useState(1633538276355);
  // const [controls, setControls] = useState(true);
  // const [ended, setEnded] = useState(false);
  // const [duration, setDuration] = useState(null);
  // const [playing, setPlaying] = useState(true);

  // const restartLive = () => {
  //   let newDate = new Date();
  //   let newStartTime = newDate.getTime();
  //   setStartTime(newStartTime);
  //   setEnded(false);
  //   setPlaying(true);
  //   setControls(true);
  // }
  // let date = new Date();
  // let currentTime = date.getTime();
  // let timePlayed = (currentTime - startTime) % 1000;

  // const endVideo = () => {
  //   if (controls === false && ended === true) {
  //     if (playing === false) {
  //       return;
  //     } else {
  //       setPlaying(false);
  //     }
  //   } else {
  //     setControls(false);
  //     setEnded(true);
  //     setPlaying(false);
  //   }
  // };
  // const videoDuration = (num) => {
  //   setDuration(num);
  // };

  // if (timePlayed > duration) {
  //   endVideo();
  // }
  const [chartData, setChartData] = useState({})
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
      const data = await res.json()
      
      console.log(data)
      setChartData({
        labels: data.data.map((crypto) => crypto.name),
        datasets: [
          {
            label: "Price in USD",
            data: data.data.map((crypto) => crypto.priceUsd),
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ]
          }
        ]
      });
    };
    fetchPrices()
  }, []);

  

  return(
    <div className="App">
      {/* <AppDropzone /> */}
      {/* <MovieList/> */}
      {/* <Video /> */}
      {/* <main className={styles.main}>
        <div className="live-event-container">
          
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
        <button className="reset-button" onClick={restartLive}>
          Restart Live Simulation
        </button>
      </main> */}
      {/* <BlogPhoto/> */}
      Hello
      <Chart chartData={chartData} />
    </div>    
  )
}

export default App;