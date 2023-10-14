// Data Write

"use client"
import React, { useState } from 'react'

export default function page() {
  const [data, setdata] = useState({
    data1: "",
    data2: "",
    data3: "",
    data4: "",
  })
  let name, value;
  const change = (e) => {
    name = e.target.name;
    value = e.target.value;
    setdata({ ...data, [name]: value });

  }

  const submit = async (e) => {
    e.preventDefault();
    const { data1, data2, data3, data4 } = data;

    const res = fetch("https://medical-shop-f4c7d-default-rtdb.firebaseio.com/dataRecord.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data1, data2, data3, data4 }),
      }
    );

  };
  return (
    <>
      <input type="text" name='data1' value={data.data1} onChange={change} />
      <input type="text" name='data2' value={data.data2} onChange={change} />
      <input type="text" name='data3' value={data.data3} onChange={change} />
      <input type="text" name='data4' value={data.data4} onChange={change} />
      <button onClick={submit}>Submit</button>
    </>
  )
}