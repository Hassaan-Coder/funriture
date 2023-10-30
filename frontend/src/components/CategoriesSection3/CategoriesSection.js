import React from "react";
import "./CategoriesSection.css";
import { Link } from "react-router-dom";
export const CategoriesSection3 = () => {
  // Define a static list of categories
  const staticCategories = [
    {
      categoryName: "Coffee Chair",
      img: "https://res.cloudinary.com/dke6w49kc/image/upload/v1698650311/OIP_kajdyu.jpg",
      link: "/products?category=Coffee%20Chairs", // Specify the link for Category 1
    },
    {
      categoryName: "Coffee Table",
      img: "https://res.cloudinary.com/dke6w49kc/image/upload/v1698650084/OIP_c3ojks.jpg",
      link: "/products?category=Coffe%20Tables", // Specify the link for Category 2
    },

    // Add more categories as needed
  ];

  return (
    <div>
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
