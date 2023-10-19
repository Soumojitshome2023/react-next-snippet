"use client"
import { Delete_Data_By_Id, Get_Data_By_Id, Get_Whole_Data, Post_Data, Put_Data_By_Id } from '@/helper/crud_functions';
import { useState } from 'react';
import React from 'react'

export default function page() {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');


  // =============================== Post Data ===============================
  async function postData() {
    try {
      const task = (
        {
          "name": data1,
          "email": data2,
        }
      );
      const result = await Post_Data(task);
      console.log(result);
    } catch (error) {
      console.log("Error");
    }
  }
  // ==================================================================================


  // =============================== Get Whole Data ===============================
  async function getData() {
    try {
      const result = await Get_Whole_Data();
      console.log(result);
    } catch (error) {
      console.log("Error");
    }
  }
  // ==================================================================================

  // =============================== Get Data By ID ===============================
  async function getDataById() {
    try {
      const result = await Get_Data_By_Id(data3);
      console.log(result);
    } catch (error) {
      console.log("Error");
    }
  }
  // ==================================================================================


  // =============================== Put Data By ID ===============================
  async function putDataById() {
    try {
      const task = (
        {
          "name": data1,
          "email": data2,
        }
      );
      const result = await Put_Data_By_Id(task, data3);
      console.log(result);
    } catch (error) {
      console.log("Error");
    }
  }
  // ==================================================================================


  // =============================== Delete Data By ID ===============================
  async function deleteDataById() {
    try {
      const result = await Delete_Data_By_Id(data3);
      console.log(result);
    } catch (error) {
      console.log("Error");
    }
  }
  // ==================================================================================




  return (
    <div>
      <input type="text" placeholder='data1' value={data1} onChange={(e) => setData1(e.target.value)} />
      <input type="text" placeholder='data2' value={data2} onChange={(e) => setData2(e.target.value)} />
      <br />
      <button onClick={postData}>Post</button>
      <button onClick={getData}>Get Whole Data</button>

      <br />
      <br />
      <input type="text" placeholder='data3 / Enter Id' value={data3} onChange={(e) => setData3(e.target.value)} />
      <br />
      <button onClick={getDataById}>Get By Id</button>
      <button onClick={putDataById}>Put By Id</button>
      <button onClick={deleteDataById}>Delete By Id</button>

    </div>

  )
}
