"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { data } from 'autoprefixer'

const page = ({ params }) => {
    // console.log(params);
    const { id } = params;

    const [users, setusers] = useState([])
    const getuser = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);

        setusers(data);
        // console.log(users);
    }

    useEffect(() => {
        getuser()
    }, [])


    return (
        <div>{JSON.stringify(users)}</div>
    )
}

export default page