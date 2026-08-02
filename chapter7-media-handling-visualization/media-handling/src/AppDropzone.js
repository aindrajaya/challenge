import "./App.css";
//call useCallback
import React, { useCallback } from "react";
//call useDropzone
import { useDropzone } from "react-dropzone";

function AppDropzone() {
  //declare var onDrop that called useCallback
  const onDrop = useCallback((acceptFiles) => {
    console.log(acceptFiles);
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
    // accept: 'text/csv',
    accept: [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "video/mp4",
      "video/mpeg",
    ],
  });

  return (
    <div className="App">
      <div
        {...getRootProps({
          className: `dropzone
      ${isDragAccept && "dropzoneAccept"}
      ${isDragReject && "dropzoneReject"}`,
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {/* <button onClick={accept}>Import</button> */}
    </div>
  );
}

export default AppDropzone;
