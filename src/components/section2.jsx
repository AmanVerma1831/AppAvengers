import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../assets/section2-imgs/icon1.png"
import img2 from "../assets/section2-imgs/icon2.png"
import img3 from "../assets/section2-imgs/icon3.png"
import img4 from "../assets/section2-imgs/icon4.png"
import img5 from "../assets/section2-imgs/icon5.png"
import img6 from "../assets/section2-imgs/icon6.png"
import img7 from "../assets/section2-imgs/icon7.png"
import img8 from "../assets/section2-imgs/icon8.png"

function Section2() {

    const sectionImages = [
        { img: img1 }, { img: img2 }, { img: img3 },
        { img: img4 }, { img: img5 }, { img: img6 },
        { img: img7 }, { img: img8 }
    ];

    return (
        <div className='my-8 border-2 border-t-black border-b-black'>
            <Carousel>
                {sectionImages.map((img, index) => (
                    <div key={index}>
                        <img src={img.img} alt='section-2-carousel' />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Section2
