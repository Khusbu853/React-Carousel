import React, { useEffect, useState } from "react";
import CarouselInput from "./CarouselInput";
import Dots from "./Dots";
import ImageCarousel from "./ImageCarousel";
import "./Carousel.css";



const Carousel = (props) => {
  const len = ImageCarousel.length - 1;

  const [activeIndex, setactiveIndex] = useState(0)
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setactiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const next = () => {
    if (activeIndex < len) {
      setactiveIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (activeIndex > 0) {
      setactiveIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className=" carousel-container ">
      <div className="carousel-wrapper">
        
        {activeIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="carousel-content"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
          
          </div>
        </div>
        
        {activeIndex < len && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
      <CarouselInput
        activeIndex={activeIndex}
        ImageCarousel={ImageCarousel}
      />

      <Dots
        activeIndex={activeIndex}
        ImageCarousel={ImageCarousel}
        onclick={(activeIndex) => setactiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Carousel;

