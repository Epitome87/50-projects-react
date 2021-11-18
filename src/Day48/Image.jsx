import React from "react";
import "./Image.css";

const Image = ({source, changeImage}) => {
    const handleClick = (event) => {
        changeImage(source);
    }

    return (
        <div className="Image">
            <img src={source} alt="Random" onClick={handleClick}/>
        </div>
    )
}

export default Image;