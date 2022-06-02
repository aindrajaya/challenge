import './App.css';
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function AppDropzone() {
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
    accept: ['image/png', 'image/jpeg', 'video/mp4'],
  });

  return (
    <div className="App">
      {/* <div className="dropzone"> */}
        {/* Add input */}
        <div {...getRootProps({
          className:`dropzone
          ${isDragAccept && 'dropzoneAccept'}
          ${isDragReject && 'dropzoneReject'}`
        })}>
        <input {...getInputProps()} />
        {isDragActive? (
          <p>Drop the files here ...</p>
        ):(
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
        </div>
      </div>
    // </div>
  );
}

export default AppDropzone;
