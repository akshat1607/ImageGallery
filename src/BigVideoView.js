import React from "react";

function BigVideoView({closePopup, video}) {
  return (
    <div class="popup">
      <video className="popupVideo" controls>
        <source src={video.file} type={video.type}></source>
        Your browser does not support the video tag.
      </video>
      <button onClick={() => closePopup()}>Close</button>
    </div>
  );
}

export default BigVideoView;
