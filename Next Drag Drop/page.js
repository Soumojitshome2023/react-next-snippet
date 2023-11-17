"use client"
import React, { useState } from 'react'
import DragDrop from './DragDrop'

export default function page() {
  const [ImageUpload, setImageUpload] = useState(null)  // When single true
  //const [ImageUpload, setImageUpload] = useState([]) // when single false

  return (
    <>
      <p>PDF</p>

      <DragDrop ImageUpload={ImageUpload} setImageUpload={setImageUpload} Single={true}/>
    </>
  )
}
