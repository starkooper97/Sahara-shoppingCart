import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, image, title, price, rating }) {
  const [, dispatch] = useStateValue();
  // console.log(basket);
  const removeFromBasket = () => {
    // console.log("hiii");
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct_image" alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
