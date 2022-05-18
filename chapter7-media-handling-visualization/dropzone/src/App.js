import './App.css';
//call useCallback
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
//call useDropzone

function App() {
  //declare var onDrop that called useCallback
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);
  //declare variable that call useDropzone, should be accept image
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: 'image/png',
  });

  return (
    <div className="App">
      <div className="dropzone">
        {/* Add input */}
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
    </div>
  );
}

export default App;
