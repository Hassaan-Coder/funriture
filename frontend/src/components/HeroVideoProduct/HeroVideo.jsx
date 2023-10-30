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
          // url="https://video-previews.elements.envatousercontent.com/h264-video-previews/4301f399-4397-465c-81ff-a243bfb08def/36550911.mp4"
          playing
          url="https://video-previews.elements.envatousercontent.com/h264-video-previews/6e2d5a34-73a4-4fe2-a713-0136994859f5/22011215.mp4"
          playbackRate={1.5}
          // url="https://video-previews.elements.envatousercontent.com/h264-video-previews/6e2d5a34-73a4-4fe2-a713-0136994859f5/22011215.mp4"
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
