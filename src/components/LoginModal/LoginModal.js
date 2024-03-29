import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./LoginModal.css";
import supabase from "../../supabase";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";
const LoginModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginType, setLogintype] = useState(true);

  const dispatch = useDispatch();

  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
      console.log(data,error);
  }
    const login = async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      dispatch(setUser(data.user))
    };
  
  return isOpen ? (
    <div className="overlay">
      <div className="LoginModel">
        <div className="left">
          <div className="left-container">
            <p className="Login-title">Login</p>
            <p className="Login-des">
              Get access to your Orders, Wishlist and recommendations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="email"
            className="Login-input"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="Login-input"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcon">
            By continuing, you agree to Flipcart's{""}
            <span style={{ color: "blue" }}>Terms of use</span> and
            <span style={{ color: "blue" }}> Privacy Policy</span>
          </p>
          {loginType ? (
            <button className="Login-btn" onClick={login}>
              Login
            </button>
          ) : (
            <button className="Login-btn" onClick={signup}>
              Signup
            </button>
          )}
          {loginType ? (
            <p className="Login-signup" onClick={() => setLogintype(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="Login-signup" onClick={() => setLogintype(true)}>
              New to Flipkart? Login an account
            </p>
          )}
        </div>
        <div className="close" onClick={() => setIsOpen(false)}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoginModal;
