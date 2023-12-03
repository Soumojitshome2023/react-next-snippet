"use client"
import React from 'react';

export default function page() {

  const fetchlink = "http://localhost:3000";
  // ========================= Post ========================= 
  const post = async () => {
    try {
      let result = await fetch(fetchlink + "/api/", {
        method: "POST",
        body: JSON.stringify(
          {
            "name": "Raj",
            "email": "Raj@",
          }),
      });
      result = await result.json();
      console.log(result);
      if (result.success != false) {
        console.log("Done");
      }

    } catch (error) {
      console.log("Error");
    }
  }

  return (
    <div>
      <button onClick={post}>Send Mail</button>
    </div>
  )
}
