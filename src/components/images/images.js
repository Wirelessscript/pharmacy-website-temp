import React from "react";
import './images.css'

import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import img17 from './img17.jpg'
import img18 from './img18.jpg'
import img19 from './img19.jpg'
import img20 from './img20.jpg'
import img21 from './img21.jpg'
import img22 from './img22.jpg'
import img23 from './img23.jpg'

function Productlist() {
const products = [
    {
        title: 1,
        img: img1,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 2,
        img: img2,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 3,
        img: img3,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 4,
        img: img4,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 5,
        img: img5,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 6,
        img: img6,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 7,
        img: img7,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 8,
        img: img8,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 9,
        img: img9,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 10,
        img: img10,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 11,
        img: img11,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 12,
        img: img12,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 13,
        img: img13,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 14,
        img: img14,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 15,
        img: img15,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 16,
        img: img16,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 17,
        img: img17,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 18,
        img: img18,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 19,
        img: img19,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 20,
        img: img20,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 21,
        img: img21,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 22,
        img: img22,
        description: "Item Description",
        price: "R123"
    },
    {
        title: 23,
        img: img23,
        description: "Item Description",
        price: "R123"
    },
];


    return (
        <div className="container">
            {products.map((elem, ind) => {
                return (
                    <div className="card" key={ind}>
                        <div>
                            <h2>{elem.title}</h2>
                            <img
                                className="card-img"
                                src={elem.img}
                                width="100%"
                                alt={elem.title}
                            />
                        </div>
                        <p>{elem.description}</p>
                        <h3>{elem.price}</h3>
                    </div>
                )
            })}
        </div>
    );
};

export default Productlist;