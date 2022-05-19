import "./App.css";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

<<<<<<< HEAD:chapter7-media-handling-visualization/dropzone/src/App.js
function App() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
=======
function AppDropzone() {
  //declare var onDrop that called useCallback
>>>>>>> 46a076b1e56fe831685acc15838c124c5a51e07a:chapter7-media-handling-visualization/media-handling/src/AppDropzone.js

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: ["image/*", "video/*"],
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
    </div>
  );
}

export default AppDropzone;
