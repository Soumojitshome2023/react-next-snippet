"use client"
import React, { useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar'

const PageLoader = () => {
    useEffect(() => {
        setProgress(80)
    }, [])
    const [progress, setProgress] = useState(0)

    return (
        <div className="top-0 left-0 w-full h-full flex justify-center items-center">
            < LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />

        </div>


    );
};

export default PageLoader;
