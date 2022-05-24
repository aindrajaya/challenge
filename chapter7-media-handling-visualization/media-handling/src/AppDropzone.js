import './App.css';
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
//call useCallback
//call useDropzone

function AppDropzone() {
  //declare var onDrop that called useCallback
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  }, [])
  //declare variable that call useDropzone, should be accept image
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: ['image/*', 'video/*']})
  
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

export default AppDropzone;
