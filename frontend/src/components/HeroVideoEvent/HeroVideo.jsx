import "./HeroVideo.css";
import ReactPlayer from "react-player";
// import { useNavigate } from "react-router-dom";

import React from "react";

export const HeroVideoEvent = () => {
  //   const Navigate = useNavigate();
  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <ReactPlayer
          // url={`${process.env.PUBLIC_URL}/assets/videos/video-3.mp4`}
          url="https://video-previews.elements.envatousercontent.com/h264-video-previews/b187235e-1af3-4fc4-883a-bb0469a81f45/47396120.mp4"
          playing
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className="hero-text">
        <h1>"Create Memories, Join the Celebration!"</h1>
        <h2>"Experience Unforgettable Moments with Us!"</h2>
      </div>
    </div>
  );
};
