import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../assets/section1-imgs/79_inr.jpg"
import img2 from "../assets/section1-imgs/80_inr.jpg"
import img3 from "../assets/section1-imgs/80_inr2.jpg"
import img4 from "../assets/section1-imgs/81_inr.jpg"
import img5 from "../assets/section1-imgs/82_inr.jpg"
import img6 from "../assets/section1-imgs/83_inr.jpg"
import img7 from "../assets/section1-imgs/84_inr.jpg"
import img8 from "../assets/section1-imgs/85_inr.jpg"

function Section1() {

  const sectionImages = [
    { img: img1 }, { img: img2 }, { img: img3 },
    { img: img4 }, { img: img5 }, { img: img6 },
    { img: img7 }, { img: img8 }
  ];

  return (
    <div>
      <div className='my-1'>
        <img src='https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6' alt='addvertisement' />
      </div>
      <Carousel>
        {sectionImages.map((img, index) => (
          <div key={index}>
            <img src={img.img} alt='section-1-carousel' />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Section1
