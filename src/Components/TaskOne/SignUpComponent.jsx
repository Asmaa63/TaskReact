import React, { useEffect, useRef, useState } from "react";

function SignUpComponent({ setView }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signData, setSignData] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignData({
      name,
      email,
      date: new Date().toLocaleString(),
    });
  };

  return (
    <div className="form-container">
      {signData ? (
        <div className="welcome-page">
          <h2>Welcome, {signData.name}</h2>
          <p>
            You signed up with {signData.email} on {signData.date}
          </p>
          <button
            className="btn secondary-btn"
            onClick={() => setView("login")}
          >
            Go to Login
          </button>
        </div>
      ) : (
        <div className="form-box">
          <h2>SignUp</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name: </label>
              <input
                type="text"
                className="input-field"
                ref={myRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input
                type="email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="btn primary-btn">
                SignUp
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUpComponent;
