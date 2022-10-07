import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  // console.log("this is the basket >>> ", basket);

  const addToBasket = () => {
    // console.log("hii");
    //dispatch the item to the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="img" />
      <div className="product_info">
        <p>{title}</p>
        <p className="product_prize">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
