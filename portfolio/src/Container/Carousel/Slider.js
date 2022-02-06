import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import Projects from "../../Assets/Data/ProjList";
import "./Slider.css";

const len = Projects.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
        <div className="slide-content">
            <SliderContent activeIndex={activeIndex} sliderImage={Projects} />
            <Arrows
                prevSlide={() =>
                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />
            <Dots activeIndex={activeIndex} sliderImage={Projects} onclick={(activeIndex) => setActiveIndex(activeIndex)} />
        </div>
    </div>
  );
}

export default Slider;