import React from "react";

const Image = ({source, changeImage}) => {
    const handleClick = (event) => {
        changeImage(source);
        alert(source);
    }

    return (
        <img src={source} alt="Random" onClick={handleClick}/>
    )
}

export default Image;