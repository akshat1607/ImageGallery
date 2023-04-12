import React from "react";

function BigImageView({ closePopup, image }) {
  return (
    <div class="popup">
      <img src={image.file} className="popupImage"></img>
      <button onClick={() => closePopup()}>Close</button>
    </div>
  );
}

export default BigImageView;
