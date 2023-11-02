import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

import { CategoriesSection } from "../components/CategoriesSection/CategoriesSection";
import { CategoriesSection2 } from "../components/CategoriesSection2/CategoriesSection";
import { CategoriesSection3 } from "../components/CategoriesSection3/CategoriesSection";

const Categories = () => {
  return (
    <div>
      <Header activeHeading={4} />

      <CategoriesSection />
      <CategoriesSection2 />
      <CategoriesSection3 />
      <Footer />
    </div>
  );
};

export default Categories;
