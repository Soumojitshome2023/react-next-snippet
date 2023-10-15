"use client"
import React from 'react'

import style1 from './Style/home.module.css'
import style2 from './Style/about.module.css'

export default function page() {
  return (
    <>
      <div className={style1.con}>page</div>
      <div className={style2.con}>page</div>
    </>
  )
}
