import React from "react";
import './SliderContent.css';
import { FaGithubSquare } from 'react-icons/fa';


function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
            <div className="slides">
                <img className="slider_image" src={slide.img} alt=""/>
                <div className="slider_title">{slide.name}</div>
                <div className="slider_desc">{slide.desc}</div>
                <div className="slider-tech">{slide.tls_lib}</div>
                <div className="slider_git">
                  <a href={slide.link} ><FaGithubSquare /></a>
                </div>
            </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;