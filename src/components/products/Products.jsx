import React from "react";
import "./Products.scss";
import ProductCard from "../cards/ProductCard";

const Products = ({ result }) => {
  return <div className="product-container">{result}</div>;
};

export default Products;
