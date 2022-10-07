import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const history = useNavigate(); //it allows us to programmatically change the url

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully create new user with email
        // and password
        console.log(auth);
        if (auth) {
          history("/"); //to redirect
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://saharaprint.net/wp-content/uploads/2021/05/Sahara-logo-600x600-1.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Passsword</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign in
          </button>
        </form>

        <p>hello users , welcome to sahara</p>
        <button onClick={register} className="login_registerButton">
          Create your sahara account
        </button>
      </div>
    </div>
  );
}

export default Login;
