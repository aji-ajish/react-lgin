import React, { useState } from "react";
import "./Signup.css";
import { FiEye, FiLock, FiUser, FiMail, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [confirmPasswordTouch, setConfirmPasswordTouch] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (confirmPasswordTouch) {
      setPasswordMatch(value === password);
      setErrorMessage(value === password ? "" : "error-border");
    }
  };
  const handleConfirmPasswordFocus = () => {
    setConfirmPasswordTouch(true);
  };

  return (
    <div className="signup">
      <div className="logo">
        <h3>Registration</h3>
      </div>
      <form>
        <div className="username">
          <div className="icon">
            <FiUser />
          </div>
          <input type="text" placeholder="Enter your name" autoComplete="off" />
        </div>
        <div className="email">
          <div className="icon">
            <FiMail />
          </div>
          <input
            type="email"
            placeholder="Enter your name"
            autoComplete="off"
          />
        </div>
        <div className="password">
          <div className="icon">
            <FiLock />
          </div>
          <input
            className={errorMessage}
            type={showPassword ? "text" : "password"}
            placeholder="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="false"
          />
        </div>
        <div className="cpassword">
          <div className="icon">
            <FiLock />
          </div>
          <input
            className={errorMessage}
            type={showPassword ? "text" : "password"}
            placeholder="Confirm a password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            onFocus={handleConfirmPasswordFocus}
            autoComplete="false"
          />
          <div className="icon" onClick={togglePasswordVisible}>
            {showPassword ? (
              <div className="eye">
                <FiEye />
              </div>
            ) : (
              <div className="eye">
                <FiEyeOff />
              </div>
            )}
          </div>
        </div>
{ confirmPasswordTouch && (passwordMatch?(""):(<p className="error-msg">Your password and confirmation password do not match.</p>))}
        <div className="accept">
          <input type="checkbox" />
          <p>I accept all terms & conditions</p>
        </div>
        <div className="submit">
          <input type="submit" className="submitbtn" value="Register Now" />
        </div>
      </form>
      <p className="already-account">
        Already have an account?{" "}
        <Link style={{ textDecoration: "none" }} to="/">
          &nbsp;<span>Login now</span>
        </Link>
      </p>
    </div>
  );
}
