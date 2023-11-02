import "./HeroVideo.css";
import ReactPlayer from "react-player";
// import { useNavigate } from "react-router-dom";

import React from "react";

export const HeroVideoProduct = () => {
  //   const Navigate = useNavigate();
  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <ReactPlayer
          playing
          url="https://video-previews.elements.envatousercontent.com/h264-video-previews/42748a63-3df1-41c5-a8ce-3f11f553ed19/40672124.mp4"
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className="hero-text">
        <h1>"Elevate Your Space with Our Creations!"</h1>
        <h2>"Furniture that Transforms Your Home's Ambiance."</h2>
      </div>
    </div>
  );
};
