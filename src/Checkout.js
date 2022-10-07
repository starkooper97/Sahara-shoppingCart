import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Sept_22/Jupiter_22/Headers/GW-editorial_1150x323._CB611152745_.jpg"
          className="checkout_ad"
          alt="img"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
        {/* <h2>The subtotal will go here </h2> */}
      </div>
    </div>
  );
}

export default Checkout;
