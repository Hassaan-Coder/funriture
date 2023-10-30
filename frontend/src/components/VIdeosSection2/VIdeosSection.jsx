import React from "react";
import ReactPlayer from "react-player";
import "./VIdeosSection.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const VideosSection2 = () => {
  //   const navigate = useNavigate();

  return (
    <>
      <div className="video-container">
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <Link to="/products?category=Center%20Tables">
            <ReactPlayer
              // onClick={() => navigate("/product-details/26")}
              // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-1.mp4`}
              url="https://res.cloudinary.com/dejass0mo/video/upload/v1698415502/pexels-polina-kovaleva-5644364_1080p_tiym6d.mp4"
              playing
              playbackRate={1.2}
              muted
              loop
              controls={false}
              width="100%"
              height="388.9%"
            />
          </Link>
          <h3 className="font-extrabold">Center Tables</h3>
          <span className="notch"></span>
        </Tilt>{" "}
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <Link to="/products?category=Center%20Tables">
            <ReactPlayer
              // onClick={() => navigate("/product-details/39")}
              // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-2.mp4`}
              url="https://res.cloudinary.com/dejass0mo/video/upload/v1698393493/290048344_545012660699174_212443051652188018_n_c4dcrb.mp4"
              playing
              playbackRate={1}
              muted
              loop
              controls={false}
              width="100%"
              height="123.5%"
            />
          </Link>
          <h3 className="font-extrabold">COFFEE TABLES</h3>

          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <Link to="/products?category=Coffee%20Chairs">
            {" "}
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
              height="175.56%"
            />
          </Link>
          <h3 className="font-extrabold">COFFEE CHAIRS</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <Link to="">
            <ReactPlayer
              // onClick={() => navigate("/product-details/26")}
              // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-1.mp4`}
              url="https://res.cloudinary.com/dke6w49kc/video/upload/v1698649724/299787560_596180748529018_5177769144231509674_n_iiavur.mp4"
              playing
              playbackRate={1.4}
              muted
              loop
              controls={false}
              width="100%"
              height="123.9%"
            />
          </Link>
          {/* <h3 className="font-extrabold">Our Designs</h3> */}
          <span className="notch"></span>
        </Tilt>
      </div>
    </>
  );
};
