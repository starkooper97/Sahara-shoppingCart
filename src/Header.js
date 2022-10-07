import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://saharaprint.net/wp-content/uploads/2021/05/Sahara-logo-600x600-1.png"
          alt="logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello user</span>
            <span className="header_optionLineSecond">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineSecond">Prime</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineSecond">Orders</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineSecond header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
