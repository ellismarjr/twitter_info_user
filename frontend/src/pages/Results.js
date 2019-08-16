import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './Results.css'

import api from '../services/api'

import logo from '../assets/logo.svg'

export default function Results() {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/listUsers')
      setUsers(response.data)
    }
    loadUsers()
  }, [])

    return (
      <div className="user-list">
      <Link to="/">
        <img src={logo} alt="twitter_user_info"/>
      </Link>
      { users.map(user => (
        <article key={user._id}>
          <header>{user.name}</header>
          <p>Username: {user.username}</p>
          <p>Followers: {user.followers_count}</p>
          <p>Friends: {user.friends_count}</p>
      </article>
      )) }

    </div>
    )
  }

  
