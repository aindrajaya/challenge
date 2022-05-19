import React, {useEffect, useState} from "react";
import ModalImage from "react-modal-image";
import axios from "axios";

import "./styles.css"

const BlogPhoto = () => {
  const [image, setImage] = useState("");
  const nama = "beach"
  const clientId = "zskRQ_4BaqfObXvTQ7xU4PyQ9tiJr_at2_Fntcsasso";
  const [photos, setPhotos] = useState([])

  const getData = () => {
    try {
     axios.get(`https://api.unsplash.com/search/photos?page=1&query=beach&client_id=${clientId}`)
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