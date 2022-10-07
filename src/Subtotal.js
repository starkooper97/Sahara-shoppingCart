import React from "react";
import "./Subtotal.css";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
function Subtotal() {
  const history = useNavigate(); //gives us the browser history
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong> {value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a subtotal_gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
