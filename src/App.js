import "./App.css";

import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ImageUpload from "./Components/ImageUpload";
import BigImageView from "./Components/BigImageView";
import BigVideoView from "./BigVideoView";
function App() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const videoUploader = (fileURL, type) => {
    videos.push({ file: fileURL, t: type });
    setVideos([...videos]);
  };

  const ImageUploader = (fileURL, type) => {
    images.push({ file: fileURL, type: type });
    setImages([...images]);
  };
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <div className="videosClass">
        {videos.map((video) => {
          return (
            <Popup
              trigger={
                <video className="video" controls>
                  <source src={video.file} type={video.type}></source>
                  Your browser does not support the video tag.
                </video>
              }
              modal
            >
              {(close) => (
                <BigVideoView closePopup={close} video={video}></BigVideoView>
              )}
            </Popup>
          );
        })}
      </div>
      <div className="imageClass">
        {images.map((image) => {
          return (
            <Popup
              trigger={<img src={image.file} className="image"></img>}
              modal
            >
              {(close) => <BigImageView closePopup={close} image={image} />}
            </Popup>
          );
        })}
      </div>
      <Popup
        trigger={
          <div className="upload">
            <button>Upload</button>
          </div>
        }
        modal
      >
        {(close) => (
          <ImageUpload
            closePopup={close}
            ImageUploader={ImageUploader}
            videoUploader={videoUploader}
          />
        )}
      </Popup>
    </div>
  );
}

export default App;
