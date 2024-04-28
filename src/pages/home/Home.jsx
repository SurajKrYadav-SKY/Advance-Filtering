import React, { useState } from "react";
import "./Home.scss";
import Left from "../../components/left/Left";
import Center from "../../components/center/Center";
import ProductCard from "../../components/cards/ProductCard";
import { products } from "../../store/data";

const Home = () => {
  const [selectedCat, setSelectedCat] = useState(null);
  const [query, setQuery] = useState("");

  // Input Filter

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //radio filters
  const radioInputChange = (event) => {
    setSelectedCat(event.target.value);
  };

  //buttons filter
  const handleButtonClick = (event) => {
    setSelectedCat(event.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    // filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected && selected !== "All") {
      let minPrice, maxPrice;

      switch (selected) {
        case "500":
          minPrice = 0;
          maxPrice = 500;
          break;
        case "1000":
          minPrice = 500;
          maxPrice = 1000;
          break;
        case "2000":
          minPrice = 1000;
          maxPrice = 2000;
          break;
        case "5000":
          minPrice = 2000;
          maxPrice = 5000;
          break;
        case "10000":
          minPrice = 5000;
          maxPrice = 10000;
          break;
        default:
          break;
      }

      filteredProducts = filteredProducts.filter((item) => {
        return (
          item.category === selected ||
          item.color === selected ||
          item.company === selected ||
          (item.newPrice >= minPrice && item.newPrice < maxPrice) || // Adjusted condition to include minPrice and exclude maxPrice
          item.title === selected
        );
      });
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <ProductCard
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(products, selectedCat, query);

  return (
    <div className="container">
      <Left radioInputChange={radioInputChange} />
      <Center
        handleButtonClick={handleButtonClick}
        result={result}
        query={query}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default Home;
