import React from "react";
import "./CategoriesSection.css";
import { Link } from "react-router-dom";

export const CategoriesSection2 = () => {
  // Define a static list of categories
  const staticCategories = [
    {
      categoryName: "Dining Table",
      img: "https://res.cloudinary.com/dke6w49kc/image/upload/v1698649744/311839117_436925375171648_4325178640892282592_n_lj8eza.jpg",
      link: "/products?category=Dining%20Tables", // Specify the link for Category 1
    },
    {
      categoryName: "Console",
      img: "https://res.cloudinary.com/dke6w49kc/image/upload/v1698650172/OIP_cgizhq.jpg",
      link: "/products?category=Consoles", // Specify the link for Category 2
    },
    {
      categoryName: "Center Table",
      img: "https://res.cloudinary.com/dke6w49kc/image/upload/v1698650207/R_fkarvd.jpg",
      link: "/products?category=Center%20Tables", // Specify the link for Category 3
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
