import "./HeroVideo.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import React from "react";

export const HeroVideo = () => {
  //   const Navigate = useNavigate();
  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <ReactPlayer
          // url={`${process.env.PUBLIC_URL}/assets/videos/video-3.mp4`}
          url="https://video-previews.elements.envatousercontent.com/h264-video-previews/e40702fe-c6df-4e95-89ed-28319776f6c6/38681871.mp4"
          playing
          playbackRate={1.7}
          muted
          loop
          controls={false}
          width="100%"
          height="100%"
        />
      </div>

      <div className="hero-text">
        <h1>Interior Impressions</h1>
        <h2>"Where Luxury Furniture Meets Affordable Elegance"</h2>
      </div>

      <button className="shop-now-btn">
        <Link to="/products">Shop Now</Link>
      </button>
    </div>
  );
};
