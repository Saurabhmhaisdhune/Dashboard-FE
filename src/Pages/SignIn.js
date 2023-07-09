import React, { useEffect} from "react";
import jwt_decode from "jwt-decode";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate=useNavigate()

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    localStorage.setItem("token",userObject.name)
    navigate("/dashboard");
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "353304673918-2fpbgk2bp5jnh52eqjkb0u06vponi6on.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      fontSize: "15px",
      fontWeight: "500",
      lineHeight: "14.63px",
      color: "#787878",
      fontFamily: "Lato",
      borderRadius: "10px",
      width: "180px",
      height: "20px",
      border: "none",
    });
  }, []);

  return (
    <div className="sign-in">
      <div className="left-side">
        <h1 className="board">Board.</h1>
      </div>
      <div className="right-side">
        <div>
          <h1 className="signin-text">Sign in</h1>
          <h1 className="signin-message">Sign in to your account</h1>
          <div className="google-apple">
            <div id="signInDiv"></div>
            <div className="google-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4t37dygGh9XiafKZMZVMMND28DH52kuxbOQ&usqp=CAU"
                alt="google"
                className="Alogo"
              />
              <h1 className="logo-text">Sign in with Apple</h1>
            </div>
          </div>
          <div className="login-form">
            <div className="login-content">
              <h1 className="input-text">Email address</h1>
              <input
                type="email"
                className="inpts"
                placeholder="johndoe@gmail.com"
              ></input>
              <h1 className="input-text">Password</h1>
              <input
                type="password"
                className="inpts"
                placeholder="######"
              ></input>
              <h1 className="forget-pass">Forgot password?</h1>
              <button className="login-button">Sign In</button>
            </div>
          </div>
          <h1 className="register">
            Don't have an account?
            <span className="forget-pass"> Register here</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
