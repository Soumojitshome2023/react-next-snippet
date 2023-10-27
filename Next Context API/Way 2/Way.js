import React from 'react'
import Home from './Home'
import MyContextProvider from './ContexAPI'

export default function Way() {
    return (
        <MyContextProvider>
            <Home />
        </MyContextProvider>
    )
}
