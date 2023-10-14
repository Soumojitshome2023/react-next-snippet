"use client"
import axios from 'axios'
import React, { useState } from 'react'
import Link from 'next/link'

export default function page() {
  const [users, setusers] = useState([])
  const getuser = async () => {

    // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // const data = res.data;
    // or

    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

    setusers(data);
    // console.log(users);
  }
  return (
    <>
      <button onClick={getuser}>Get User</button>
      <ul>

        {users.map((e) => {
          return <li>{e.username} ---- <a href={`/${e.id}`}>Explore</a></li>
        })}
      </ul>

    </>
  )
}
