import React from "react";

function CarouselInput({ activeIndex, ImageCarousel }) {
  return (
    <section>
      {ImageCarousel.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="you can input your images here" />
          <h2 className="slide-text">{slide.text}</h2>
          
        </div>
      ))}
    </section>

  );
}

export default CarouselInput;
