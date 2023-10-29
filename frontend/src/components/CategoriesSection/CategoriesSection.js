import React from "react";
import { Link } from "react-router-dom";
import "./CategoriesSection.css";

export const CategoriesSection = () => {
  // Define a static list of categories with links
  const staticCategories = [
    {
      categoryName: "Bed Set",
      img: "https://iwood.pk/wp-content/uploads/2019/05/iwkejnfm.jpg",
      link: "/category-1", // Specify the link for Category 1
    },
    {
      categoryName: "Sofa",
      img: "https://iwood.pk/wp-content/uploads/2019/05/iwkejnfm.jpg",
      link: "/category-2", // Specify the link for Category 2
    },

    // Add more categories as needed
  ];

  return (
    <div>
      <h1 className="categories-heading">Shop By Categories</h1>
      <h2 className="categories-heading2">Press Categories to explore page</h2>
      <div className="categories-container">
        {staticCategories.map((category, index) => (
          <Link to={category.link} className="category-card" key={index}>
            <h3>{category.categoryName}'s</h3>
            <div className="img-cont">
              <img src={category.img} alt={category.categoryName} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
