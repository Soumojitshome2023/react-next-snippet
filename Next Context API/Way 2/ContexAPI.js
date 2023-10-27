"use client"
import React, { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

export function DataSet() {

    const [data1, setdata1] = useState('data11');
    const data2 = "data22";

    return {
        data1, setdata1, data2
    };
}

const MyContextProvider = ({ children }) => {
    const data = DataSet();
    return (
        <div>
            <MyContext.Provider value={data}>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default MyContextProvider;