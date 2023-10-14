"use client"
import axios from 'axios'
import React, { useState } from 'react'

export default function page() {
  const [imgs, setimgs] = useState([]);

  const getImg = async () => {
    try {
      const res = await axios.get("https://picsum.photos/v2/list");
      const data = res.data;
      setimgs(data);
      // console.log(imgs);

    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <button onClick={getImg}>Get</button>
      {
        imgs.map((elem, i) => {
          return (
              <img width={300} height={300} key={i} src={elem.download_url
              } alt=""/>
          )
        })
      }
    </>
  )
}
