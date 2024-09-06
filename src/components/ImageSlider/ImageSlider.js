import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import img20 from "../images/img20.jpg"
import img14 from "../images/img14.jpg"
import img17 from "../images/img17.jpg"

const slideImages = [
    {
        src: img20,
        caption: "First Slide",
    },
    {
        src: img14,
        caption: "Second Slide",
    },
    {
        src: img17,
        caption: "Third Slide",
    },
];

const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50rem",
    backgroundSize: "cover"
}

const spanStyle = {
    textalign: "center",
    fontsize: "20px",
    background: "#efefef",
    color: "#00000"
}

 function ImageSlider() {
  return (
    <div className='slide-container'>
        <Slide>
            {slideImages.map((image, index) => (
                <div key={index}>
                    <div style={{...divStyle, backgroundImage:`url(${image.src})`}}>
                        <span style={spanStyle} duration={0.5} >{image.caption}</span>
                    </div>
                </div>
            ))}
        </Slide>
    </div>
  )
}

export default ImageSlider
