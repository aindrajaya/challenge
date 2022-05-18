import "./App.css";
//call useCallback
import React, { useCallback } from "react";
//call useDropzone
import { useDropzone } from "react-dropzone";

function App() {
  //declare var onDrop that called useCallback
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  //declare var {getRootProps, getInputProps, isDragActive} that called useDropzone
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: "text/csv" });

  //declare variable that call useDropzone, should be accept image

  return (
    <div className="App">
      <div
        {...getRootProps({
          className: `dropzone
      ${isDragAccept && "dropzoneAccept"}
      ${isDragReject && "dropzoneReject"}`,
        })}
      >
        {/* Add input */}
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
}

export default App;
