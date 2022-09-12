import React, { useEffect, useState } from "react";
import CarouselInput from "./CarouselInput";
import Dots from "./Dots";
import ImageCarousel from "./ImageCarousel";
import "./Carousel.css";


const len = ImageCarousel.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="carousel-container">
      <CarouselInput activeIndex={activeIndex} ImageCarousel={ImageCarousel} />
      <Dots
        activeIndex={activeIndex}
        ImageCarousel={ImageCarousel}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
