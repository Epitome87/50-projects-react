import React, { useState, useEffect } from "react";
import "./BlurryLoading.css";

const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const BlurryLoading = (props) => {
    const [progress, setProgress] = useState(0);

    let interval = null;

    useEffect(() => {
        interval = setInterval(blur, 50);

        // Cleanup when component unmounts
        return () => {
            clearInterval(interval);
        }
    }, []);

    
    const blur = () => {
        if (progress >= 100) {
            clearInterval(interval);
            return;
        }

        setProgress((prevProgress) => prevProgress + 1);
    }
    
    
    return (
    <div className="BlurryLoading__container">
        <div className="BlurryLoading" style={{filter: `blur(${scale(progress, 0, 100, 30, 0)}px)`}}></div>
        <p className="BlurryLoading__text" style={{opacity: `${scale(progress, 0, 100, 1, 0)}`}}>{progress}%</p>
    </div> )
}

export default BlurryLoading;