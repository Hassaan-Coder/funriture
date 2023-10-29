import React from "react";
import "./CategoriesSection.css";

export const CategoriesSection3 = () => {
  // Define a static list of categories
  const staticCategories = [
    {
      categoryName: "Category 1",
      img: "https://iwood.pk/wp-content/uploads/2019/05/iwkejnfm.jpg",
    },
    {
      categoryName: "Category 2",
      img: "https://iwood.pk/wp-content/uploads/2019/05/iwkejnfm.jpg",
    },

    // Add more categories as needed
  ];

  return (
    <div>
      <div className="categories-container">
        {staticCategories.map((category, index) => (
          <div className="category-card" key={index}>
            <h3>{category.categoryName}'s</h3>
            <div className="img-cont">
              <img src={category.img} alt={category.categoryName} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
