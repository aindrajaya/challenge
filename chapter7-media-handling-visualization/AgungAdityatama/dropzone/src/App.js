import './App.css';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone'

function App() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({ onDrop, accept: "image/jpeg" });


  return (
    <div className="App">
      <div className="dropzone">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
