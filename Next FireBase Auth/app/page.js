"use client"
import React from 'react'

import Login from './Login';
import Register from './Register';

export default function page() {
  return (
    <>
      <h1>Sign In</h1>
      <Register />
      <br /><hr />
      <h1>Log In</h1>
      <Login />
    </>
  )
}
