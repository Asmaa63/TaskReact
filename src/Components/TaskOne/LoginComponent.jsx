import React, { useEffect, useRef, useState } from "react";
import SignUpComponent from "./SignUpComponent";
import "./FormStyles.css"; 

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, SetLoginData] = useState(null);
  const [view, setView] = useState("login");
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    SetLoginData({
      email,
      date: new Date().toLocaleString(),
    });
  };

  return (
    <div className="form-container">
      {view === "signup" ? (
        <SignUpComponent setView={setView} />
      ) : loginData ? (
        <div className="login-page">
          <h1>Welcome: {loginData.email}</h1>
          <p>You are logged in at {loginData.date}</p>
        </div>
      ) : (
        <div className="form-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email: </label>
              <input
                type="email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={myRef}
                required
              />
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="btn primary-btn">
                Login
              </button>
              <button
                type="button"
                className="btn secondary-btn"
                onClick={() => setView("signup")}
              >
                Go to Sign-up
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginComponent;
