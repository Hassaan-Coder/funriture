import "./HeroVideo.css";
import ReactPlayer from "react-player";
// import { useNavigate } from "react-router-dom";

import React from "react";

export const HeroVideoBS = () => {
  //   const Navigate = useNavigate();
  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <ReactPlayer
          // url={`${process.env.PUBLIC_URL}/assets/videos/video-3.mp4`}
          url="https://video-previews.elements.envatousercontent.com/h264-video-previews/eef695ea-3aa9-4684-9a87-d232c983d2db/33542934.mp4"
          playing
          playbackRate={1.4}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className="hero-text">
        <h1>"Furniture Excellence, Yours Today!"</h1>
        <h2>
          "Discover Unmatched Comfort and Style - Your Perfect Furniture
          Awaits!"
        </h2>
      </div>

      <button
        // onClick={() => Navigate("product-listing")}
        className="shop-now-btn"
      >
        BestSelling
      </button>
    </div>
  );
};
