import React, { useState } from "react";
import ProductCard from "./ProductCard"; // Import your existing ProductCard component

const ProductCardContainer = ({ data, isEvent }) => {
  const [productId, setProductId] = useState(""); // Initialize productId state with an empty string or an initial value

  // Function to set the new productId and trigger a refresh
  const changeProductId = (newProductId) => {
    setProductId(newProductId);
  };

  return (
    <div>
      {/* Pass the productId and the changeProductId function to the ProductCard component */}
      <ProductCard
        data={data}
        isEvent={isEvent}
        productId={productId}
        changeProductId={changeProductId}
      />
    </div>
  );
};

export default ProductCardContainer;
