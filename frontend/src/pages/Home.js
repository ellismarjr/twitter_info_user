import React, { useState } from "react";
import "./Home.css";
import logo from "../assets/logo.svg";

import api from "../services/api";

export default function Home({ history }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username);

    const response = await api.post("/user", {
      username
    });

    console.log(response);
    history.push("/results");
  }

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="twitter_user_info" />
        <input
          placeholder="Digite um usuário do twitter.."
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
