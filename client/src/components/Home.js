import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    navigate("/chat");

    return (
      <form className="home__container" onSubmit={handleSubmit}>
        <h2 className="home__header">Sign In to Open Chat</h2>
        <label htmlFor="username">Username</label>

        <input
          type="text"
          name="username"
          value={userName}
          minLength={6}
          className="username__input"
          id="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="home__cta">SIGN IN</button>
      </form>
    );
  };
};

export default Home;
