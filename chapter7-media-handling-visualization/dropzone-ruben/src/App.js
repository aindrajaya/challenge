import './App.css';
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Video from "./Video";
import BlogPhoto from './Image';
import MovieList from './Report/MovieList';
import Chart from './Chart/index';

function App() {
  //declare var onDrop that called useCallback
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
  }, [])

  //declare variable that call useDropzone, should be accept image
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: [
      'image/JPG',
      'image/jpeg', 
      'image/png', 
      'video/mp4'
    ]
  });

  return (
    <div className="App">
      {/* <div className="dropzone">
        <div  {...getRootProps()}>
          Add input
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div> */}
      {/* <Video /> */}
      {/* <BlogPhoto/> */}
      <MovieList/>
      <Chart/>
    </div>
  );
}

export default App;
