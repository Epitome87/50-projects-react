import React, { useState } from "react";
import Image from "./Image";
import "./ImageFeed.css";

const randomImage = () => {
    const randomSize = Math.floor(Math.random() * 200) + 400;
    return `https://source.unsplash.com/random/${randomSize}${randomSize}`;
}

const ImageFeed = (props) => {
    const starterImages = [];

    for (let i = 0; i < props.imageCount; i++) {
        starterImages.push(randomImage());
    }

    const [images, setImages] = useState([...starterImages]);

    const handleClick = (event) => {
        setImages([...images, randomImage()]);
    }

    const changeImage = (imageToChange) => {
        const newImages = images.map(image => {
            if (image === imageToChange) {
                return randomImage();
            } else {
                return image;
            }
        });


        setImages(newImages);
    }

    const renderedImages = images.map(image => {
        return <Image source={image} changeImage={changeImage} />
    })
    return <div className="ImageFeed">
        <h2 className="ImageFeed__title">Image Feed</h2>
        <button onClick={handleClick}>Add New Image!</button>
        <div className="ImageFeed__images"> {renderedImages}</div>
    </div>
}

export default ImageFeed;