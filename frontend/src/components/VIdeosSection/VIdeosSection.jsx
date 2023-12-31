import React from "react";
import ReactPlayer from "react-player";
import "./VIdeosSection.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export const VideosSection = () => {
  //   const navigate = useNavigate();

  return (
    <>
      <div className="video-container">
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <Link to="/products?category=Bedroom%20sets">
            <ReactPlayer
              // onClick={() => navigate("/product-details/76")}
              // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-4.mp4`}
              url="https://res.cloudinary.com/dgj9qdvdv/video/upload/v1697784924/e6fcac4e-b603-4088-8fba-b79084f7e05f_jmeqqf.mp4"
              playing
              playbackRate={1.3}
              muted
              loop
              controls={false}
              width="100%"
              height="174.8%"
            />
          </Link>
          <h3 className="font-extrabold ">BEDROOM SETS</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <Link to="/products?category=Dining%20Tables">
            <ReactPlayer
              // onClick={() => navigate("/product-details/39")}
              // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-2.mp4`}
              url="https://res.cloudinary.com/dgj9qdvdv/video/upload/v1697781841/Casta_Luxury___luxury__luxuryfurniture__project__design__interiordesign__masko__exclusive__decor__decoration__livingroom__diningroom__castaluxury_video0_gmvdem.mp4"
              playing
              playbackRate={1.3}
              muted
              loop
              controls={false}
              width="100%"
              height="123.8%"
            />
          </Link>

          <h3 className="font-extrabold ">DINING TABLES</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <Link to="/products?category=Sofa%20Sets">
            <ReactPlayer
              // onClick={() => navigate("/product-details/76")}
              // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-4.mp4`}
              url="https://res.cloudinary.com/dke6w49kc/video/upload/v1698928009/202311021725_drj1hq.mp4"
              playing
              playbackRate={1.3}
              muted
              loop
              controls={false}
              width="100%"
              height="123.8%"
            />
          </Link>
          <h3 className="font-extrabold ">SOFA SETS</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <Link to="/products?category=Consoles">
            <ReactPlayer
              // onClick={() => navigate("/product-details/76")}
              // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-4.mp4`}
              url="https://res.cloudinary.com/dke6w49kc/video/upload/v1698649287/Untitled_Project_V1_nkv0lg.mp4"
              playing
              playbackRate={1.3}
              muted
              loop
              controls={false}
              width="100%"
              height="220%"
            />
          </Link>
          <h3 className="font-extrabold ">CONSOLES</h3>
          <span className="notch"></span>
        </Tilt>
      </div>
    </>
  );
};
