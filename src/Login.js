import React, { useState } from "react";
import "./Login.css";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login">
      <div className="logo">
        <h3>Login</h3>
      </div>
      <form>
        <div className="username">
          <div className="icon">
            <FiMail />
          </div>
          <input type="email" placeholder="Enter your email" autoComplete="off"/>
        </div>

        <div className="password">
          <div className="icon">
            <FiLock />
          </div>
          <input type={showPassword?'text':'password'} placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
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
        <div className="remember">
          <input type="checkbox" />
          <p>Remember me</p>
          <p className="forgot">Forgot password?</p>
        </div>
        <div className="submit">
          <input type="submit" value="Login Now" />
        </div>
      </form>
      <p className="no-account">
        Dont't have on account? 
        <Link style={{ textDecoration: "none" }} to="/signup">
           &nbsp;<span>Signup now</span>
        </Link>
      </p>
    </div>
  );
}
