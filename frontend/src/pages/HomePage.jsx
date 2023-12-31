import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Footer from "../components/Layout/Footer";
import { HeroVideo } from "../components/HeroVideo/HeroVideo";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { VideosSection } from "../components/VIdeosSection/VIdeosSection";
import { HeroSection2 } from "../components/HeroSection2/HeroSection2";
import { VideosSection2 } from "../components/VIdeosSection2/VIdeosSection";
import WhatsAppButton from "../components/Whatsapp";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <HeroVideo />
      <HeroSection />
      <VideosSection />
      <VideosSection2 />
      {/* <Categories /> */}
      <HeroSection2 />

      <BestDeals />

      {/* <Events /> */}
      {/* <FeaturedProduct /> */}

      <Footer />
    </div>
  );
};

export default HomePage;
