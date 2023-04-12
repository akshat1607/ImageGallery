import React, { useState } from "react";

function ImageUpload({ closePopup, ImageUploader, videoUploader }) {
  const [fileTypes, setFileTypes] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    console.log(files.length);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const type = file.type;
      console.log(type);
      if (type[0] === "v") {
        console.log("video");
        videoUploader(URL.createObjectURL(files[i]), type);
      } else {
        ImageUploader(URL.createObjectURL(files[i]), type);
      }
      closePopup();
    }
  };
  return (
    <div className="ImageUpload">
      <input type="file" multiple onChange={handleFileUpload} />
    </div>
  );
}

export default ImageUpload;
