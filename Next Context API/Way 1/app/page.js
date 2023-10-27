"use client"
import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

const page = () => {
  const user = useContext(MyContext)
  
  return (
    <>
    <div>Homepage</div>
    <div>{user}</div>
    </>
  )
}

export default page