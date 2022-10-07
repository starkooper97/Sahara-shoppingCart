// import logo from './logo.svg';
// import "./App.css";
import { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// import { Switch } from "react-router";

const promise = loadStripe(
  "pk_test_51LoBJlSJEqESsttL2Wx7EnAFePkbL64RSuQvO8Ey75a2xFEaqkOW534lzl9bIVDvdbQVbGaAEEtH9npf0Ib07wZj00rvkqb6lF"
);

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    //will only loads once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        //the user just logged in/ the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                {/* <h1>I AM A CHECKOUT OPTION</h1> */}
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>

                {/* <h1>Welcome to payment route</h1> */}
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
