import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { FaSignInAlt, FaKey, FaEnvelope } from "react-icons/fa";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <img src="/logo.png" height="500px" width="500px" alt="image" />
          <h3 className="loginText">Collaborate</h3> 
          <h4 className="loginSubtitle">by FlipSetter</h4>
          <span className="loginDesc">
          Connect and share your content scholastically or professionally!
          </span>
          <span class="doorText">"The door is always open!"</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            Email:
            <input
              placeholder="Email Address..."
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            Password:
            <input
              placeholder="Password..."
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />

            <button className="loginButton" type="submit" disabled={isFetching}>
              <FaSignInAlt />
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>

        <div className="loginLinks">
          <a class="loginLink" href="https://flipsetter.com/password/reset" style={{ textDecoration: "none" }}><FaKey />Forgot Password?</a>
          <a class="loginLink" href="https://flipsetter.com/email/verify" style={{ textDecoration: "none" }}><FaEnvelope />Verify Me</a>
        </div>

          </form>
        </div>
      </div>
    </div>
  );
}
