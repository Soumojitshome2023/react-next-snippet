"use client"
import { useState } from 'react';
import React from 'react'

export default function page() {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');


  // ========================= Post ========================= 
  const post = async () => {
    try {
      let result = await fetch("http://localhost:3000/api", {
        method: "POST",
        body: JSON.stringify(
          {
            "name": data1,
            "email": data2,
          }),
      });
      result = await result.json();

      console.log("Done");

    } catch (error) {
      console.log("Error");
    }
  }

  // ========================= Get Whole Data =========================
  const get_whole = async () => {
    try {
      let data = await fetch("http://localhost:3000/api/")
      data = await data.json();

      console.log(data);

      console.log("Done");

    } catch (error) {
      console.log("Error");
    }
  }

  // ========================= Get By Id =========================
  const get_by_id = async () => {
    try {
      let data = await fetch("http://localhost:3000/api/" + data3);
      data = await data.json();

      console.log(data);

      console.log("Done");

    } catch (error) {
      console.log("Error");
    }
  }

  // ========================= Put By Id =========================
  const put_by_id = async () => {
    try {
      let result = await fetch("http://localhost:3000/api/" + data3, {
        method: "PUT",
        body: JSON.stringify(
          {
            "name": data1,
            "email": data2,
          }),
      });
      result = await result.json();

      console.log("Done");

    } catch (error) {
      console.log("Error");
    }
  }

  // ========================= Delete By Id =========================
  const delete_by_id = async () => {
    try {
      let result = await fetch("http://localhost:3000/api/" + data3, {
        method: "delete"
      });
      result = await result.json();

      console.log("Done");

    } catch (error) {
      console.log("Error");
    }
  }







  return (
    <div>
      <input type="text" placeholder='data1' value={data1} onChange={(e) => setData1(e.target.value)} />
      <input type="text" placeholder='data2' value={data2} onChange={(e) => setData2(e.target.value)} />
      <br />
      <button onClick={post}>Post</button>
      <button onClick={get_whole}>Get Whole Data</button>

      <br />
      <br />
      <input type="text" placeholder='data3 / Enter Id' value={data3} onChange={(e) => setData3(e.target.value)} />
      <br />
      <button onClick={get_by_id}>Get By Id</button>
      <button onClick={put_by_id}>Put By Id</button>
      <button onClick={delete_by_id}>Delete By Id</button>

    </div>

  )
}
