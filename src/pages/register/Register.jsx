import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { FaUserCheck } from "react-icons/fa";

export default function Register() {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <img src="/logo.png" height="500px" width="500px" alt="pic" />
          <h3 className="registerLogo">Collaborate</h3>
            <h4 className="registerText">by FlipSetter</h4>
          <span className="registerDesc">
            Connect and share your content scholastically or professionally!
          </span>
          <span class="doorText">"The door is always open!"</span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClick}>
            First Name
                <input
                  minlength="2"
                  type="text"
                  placeholder="First Name..."
                  required ref={firstname}
                  className="registerInput"
                />
            Last Name
                <input
                  minlength="2"
                  type="text"
                  placeholder="Last Name..."
                  required ref={lastname}
                  className="registerInput"
                />
            Email Address
             <input
                  minLength="3"
                  placeholder="Email..."
                  required ref={email}
                  className="registerInput"
                  type="email" 
            />
            Password
            <input
              placeholder="Password..."
              required
              ref={password}
              className="registerInput"
              type="password"
              minLength="6"
            />
            Confirm Password
            <input
              placeholder="Confirm Password..."
              required
              ref={passwordAgain}
              className="registerInput"
              type="password"
            />

            <small id="passwordHelpBlock" class="form-text text-muted">
                *Password must be at least 8 characters long, contain one upper case letter, one lower case letter and one number.
            </small>

            <button className="registerButton" type="submit">
              Sign Up <FaUserCheck />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
