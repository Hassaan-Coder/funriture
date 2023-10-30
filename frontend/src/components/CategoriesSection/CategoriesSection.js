import React from "react";
import { Link } from "react-router-dom";
import "./CategoriesSection.css";

export const CategoriesSection = () => {
  // Define a static list of categories with links
  const staticCategories = [
    {
      categoryName: "Bed Set",
      img: "https://i.pinimg.com/originals/83/5c/bc/835cbc1e048f65089846fd71572c7990.jpg",
      link: "/products?category=Bedroom%20sets", // Specify the link for Category 1
    },
    {
      categoryName: "Sofa",
      img: "https://res.cloudinary.com/dke6w49kc/image/upload/v1698649606/2b995fa9b642120cd5be99af1f1c7707_x2g6cj.jpg",
      link: "/products?category=Sofa%20Sets", // Specify the link for Category 2
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
