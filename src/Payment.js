import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import axios from "./axios";

function Payment({ id }) {
  const history = useNavigate(); //it allows us to programmatically change the url

  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  // const ConfirmYourOrder = () => {
  //   // console.log("hiii");
  //   dispatch({
  //     type: "CONFIRM_YOUR_ORDER",
  //     id: id,
  //   });
  // };

  useEffect(() => {
    console.log(clientSecret);
  }, [clientSecret]);

  useEffect(() => {
    console.log(getBasketTotal(basket));
    axios({
      method: "post",

      url: `/payment/create?total=${getBasketTotal(basket)}`,
    })
      .then((res) => {
        console.log(res.data);
        setClientSecret(res.data.clientSecret);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [basket]);

  // console.log({ basket });
  // console.log("The secret is >> ", clientSecret);
  // console.log("👱", user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        setSucceeded(true); //transaction is good
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        console.log("hii");
        history("/orders");
      });
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* <button onClick={(e) => history("/payment")}>
          Proceed to Checkout
        </button> */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
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
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
