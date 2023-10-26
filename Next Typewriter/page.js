import React from 'react'
import Typewriter from 'typewriter-effect';

export default function page() {
    return (
        <>
            <Typewriter
                options={{
                    strings: ['Hello', 'World'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </>
    )
}
