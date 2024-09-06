import React from 'react';
import './About.css'
import img from '../images/img13.jpg'
import img1 from '../images/img10.jpg'

const About = () => {
    return (
        <div className='About-Container'>
            <h1>About Us</h1>
                <div className='image1'>
                    <img src={img} alt='img' />
                    <p>Every business has an origin story worth telling, and usually one that justifies why you do business and have clients.
                        Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.
                        Whatever it is, your story matters to your prospective buyers and team members. Make it entertaining and as immersive as you can.</p>
                </div>
                <div className='image2'>
                <p>Every business has an origin story worth telling, and usually one that justifies why you do business and have clients.
                        Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.
                        Whatever it is, your story matters to your prospective buyers and team members. Make it entertaining and as immersive as you can.</p>
                    <img src={img1} alt='img' />
                </div>
        </div>
    );
};

export default About;