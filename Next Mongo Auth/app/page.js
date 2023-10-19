"use client"
import { currentUser, logIn, logOut, signUp } from '@/helper/crud_functions';
import { useState } from 'react';
import React from 'react'

export default function page() {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');


  // =============================== Sign Up ===============================
  async function signUp_click() {
    try {
      const data = (
        {
          "name": data1,
          "email": data2,
          "password": data3
        }
      );
      const result = await signUp(data);
      console.log(result);

    } catch (error) {
      console.log("Error");
    }
  }
  // ==================================================================================


  // =============================== LogIn ===============================
  async function logIn_click() {
    try {
      const data = (
        {
          "email": data2,
          "password": data3
        }
      );
      const result = await logIn(data);
      console.log(result);
    } catch (error) {
      console.log("Error");
    }
  }
  // ==================================================================================

  // =============================== Current User ===============================
  async function currentUser_click() {
    try {
      const result = await currentUser();
      console.log(result);
    } catch (error) {
      console.log("Error");
    }
  }
  // ==================================================================================

  // =============================== Log Out ===============================
  async function logOut_click() {
    try {
      const result = await logOut();
      console.log(result);
    } catch (error) {
      console.log("Error");
    }
  }
  // ==================================================================================



  return (
    <div>
      <input type="text" placeholder='Name' value={data1} onChange={(e) => setData1(e.target.value)} />
      <input type="text" placeholder='Email' value={data2} onChange={(e) => setData2(e.target.value)} />
      <input type="text" placeholder='Password' value={data3} onChange={(e) => setData3(e.target.value)} />
      <br />
      <button onClick={signUp_click}>Sign Up</button>
      <button onClick={logIn_click}>Log In</button>
      <button onClick={currentUser_click}>Current User</button>
      <button onClick={logOut_click}>Log Out</button>

    </div>

  )
}
