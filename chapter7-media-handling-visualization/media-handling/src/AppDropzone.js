import './App.css';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';


function App() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: ['image/jpeg', 'image/png', 'video/mp4'],
  });

  return (
    <div className="App">
      <div
        {...getRootProps({
          className: `dropzone
          ${isDragAccept && 'dropzoneAccept'}
          ${isDragReject && 'dropzoneReject'}`,
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <button>Import</button>
    </div>
  );
}

export default App;
