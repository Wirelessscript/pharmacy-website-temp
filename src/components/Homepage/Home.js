import React from 'react';
import "./Home.css"
import ImageSlider from '../ImageSlider/ImageSlider';
import img14 from '../images/img14.jpg'

const Home = () => {
    return (
        <div className='Home'>
            <h1>Welcome to our Website</h1>
            <img src={img14} alt='img'/>
            <div className='slideshow'>
                <ImageSlider />
            </div>
        </div>
    )
}
export default Home;