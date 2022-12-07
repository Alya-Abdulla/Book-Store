import React from 'react'
import "./Slider.css";
import FirstBook from "../../../images/book1.png";
import SecondBook from "../../../images/book2.png";
import ThirdBook from "../../../images/book3.png";
import { useState } from 'react';




const Slider = () => {

    // to move between sliders
    const [slideIndex, setSlideIndex]= useState(1);
    const handleClick =(direction) =>
     {
        if(direction === "left")
        {
            setSlideIndex(slideIndex -1);
        }
        else
        {
            setSlideIndex(slideIndex +1);
        }
    }
  return (
    <div className="slider-container">
        {/* add onckick to move the slider */}
        {slideIndex !== 0 && <i onClick={() => handleClick("left")} className="bi bi-chevron-double-left arrow-left" ></i> }
        {  /* translateX move the component */}
        <div style={{transform:` translateX(${slideIndex* -100}vw)`}} className="slider-wrapper">
           
            <div className="slider first-slide">
                <div className="slider-img-wrapper">
                    <img src={ThirdBook} alt="" />
                </div>
                <div className="slider-info-wrapper">
                    <h1 className="slider-info-title">Book Store</h1>
                    <p className="slide-info-desc">
                    It's not reading. it's living the advanture !
                    </p>
                </div>
            </div>
            <div className="slider second-slide">
                <div className="slider-img-wrapper">
                    <img src={SecondBook} alt="" />
                </div>
                <div className="slider-info-wrapper">
                    <h1 className="slider-info-title">Book For Every One</h1>
                    <p className="slide-info-desc">
                        You can read anywhere.
                    </p>
                </div>
            </div>

            <div className="slider third-slide">
                <div className="slider-img-wrapper">
                    <img src={ThirdBook} alt="" />
                </div>
                <div className="slider-info-wrapper">
                    <h1 className="slider-info-title">Check Out The New Title</h1>
                    <p className="slider-info-desc">
                       We send you the book  you want at home
                    </p>
                </div>
            </div>

        </div>
        {slideIndex !== 2 && <i onClick={() => handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>}
        
    </div>
  )
}

export default Slider;