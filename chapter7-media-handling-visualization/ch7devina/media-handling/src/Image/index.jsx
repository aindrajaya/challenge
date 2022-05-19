import React, {useEffect, useState} from "react";
import ModalImage from "react-modal-image";
import axios from "axios";

import "./styles.css"

const BlogPhoto = () => {
  const [image, setImage] = useState("");
  const nama = "beach"
  // const clientId = "CHOQJeazu6no-4HguiJsVrcZOemdLrM7fATusMTXlnM";
  const clientId = "a37V50DPoV6VY4GJsiqWzVUHC-E2zcIJArJO88sVlpI";
  const [photos, setPhotos] = useState([])

  const getData = () => {
    try {
     axios.get(`https://api.unsplash.com/search/photos?page=1&query=food&client_id=${clientId}`)
     .then((res) => {
       setPhotos(res.data.results)
     })
    } catch (error) {
      console.log(error);
    }
  }

  console.log(photos);
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="result">
      {photos.map((image) => (
        <div className="AppImg">
          <p className="username"> Photo by {image.user.name}</p>
          <p className="like">👍 {image.likes}</p>
            <div className="AppImage">
              <ModalImage
                small={image.urls.small}
                large={image.urls.regular}
              />
            </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPhoto;