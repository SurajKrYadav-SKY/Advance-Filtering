import React from "react";
import "./ProductCard.scss";
import { FaStar } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";

const ProductCard = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div className="card">
      <div className="product-image">
        <img src={img} alt={title} />
      </div>

      <div className="details">
        <div className="title">{title}</div>
        <div className="review">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <span className="total-review">{reviews}</span>
        </div>
        <div className="amount">
          <del>{prevPrice}</del>-₹{newPrice}
        </div>
        <div className="icons">
          <IoMdCart />
          <FaRegHeart />
        </div>
      </div>
    </div>

    // <div className="card">
    //   <div className="product-image">
    //     <img
    //       src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
    //       alt="nike"
    //     />
    //   </div>

    //   <div className="details">
    //     <div className="title">Nike Air Monarch IV</div>
    //     <div className="review">
    //       <FaStar className="star" />
    //       <FaStar className="star" />
    //       <FaStar className="star" />
    //       <FaStar className="star" />
    //       <span className="total-review">123</span>
    //     </div>
    //     <div className="amount">
    //       <del>4999</del>-₹3999
    //     </div>
    //     <div className="icons">
    //       <IoMdCart />
    //       <FaRegHeart />
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductCard;
