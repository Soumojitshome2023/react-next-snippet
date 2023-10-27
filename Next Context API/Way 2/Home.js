"use client"
import React, { useContext } from 'react'
import { MyContext } from "./ContexAPI";

export default function Home() {
    const user = useContext(MyContext);
    const { data1, setdata1, data2 } = user;

    return (
        <div>{data1}</div>
    )
}
