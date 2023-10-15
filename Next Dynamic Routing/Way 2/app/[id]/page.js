"use client"
import React from 'react'

const page = ({ params }) => {
  const { id } = params;


  return (
    <div>Welcome to {id}</div>
  )
}

export default page;