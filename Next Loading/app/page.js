"use client"
import React from 'react'


async function TakeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}


export default async function page() {
  await TakeTime();
  return (
    <>
      < div > page</div >
    </>
  )
}
