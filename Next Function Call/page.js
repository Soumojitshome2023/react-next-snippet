"use client"
import React from 'react'

export default function page() {
  let abc = 117;
  const change = () => {
    console.log(abc);
    abc = 101;
    console.log(abc);
  };
  return (
    <>
      <div>page</div>
      <button onClick={()=>{change()}}>Change</button> // Run on click
      <button onClick={change()}>Change</button> // run default no need to click
      <button onClick={change}>Change</button> // run on click
    </>
  );
};
