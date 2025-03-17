import React, { useState } from "react";
import style from "../Slider/Slider.module.scss";
import SliderList from "../SliderList/SliderList";
import slider1 from "../../image/Slider 1.png";
import slider2 from "../../image/Slider 2.png";
import slider3 from "../../image/Slider 3.png";
import slider4 from "../../image/Slider 4.png";
import slider5 from "../../image/Slider 5.png";

const Slider = () => {
  const [slider, setSlider] = useState([
    {
      image: slider1,
      name: "Sun-Glass",
      current: 1.75,
    },
    {
      image: slider2,
      name: "Sun-Glass",
      current: 1.75,
    },
    {
      image: slider3,
      name: "Sun-Glass",
      current: 1.75,
    },
    {
      image: slider4,
      name: "NuEvey",
      current: 1.25,
    },
    {
      image: slider5,
      name: "NuEvey",
      current: 1.25,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1 + slider.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1 - slider.length);
  };

  return (
    <>
      <div className={style.slider}>
        <div>
          <h1 className={style.slider__header}>Weekly - Top NFT</h1>
        </div>
        <section className={style.sliderMap}>
          {slider.map((slide) => {
            return (
              <section
                className={style.sliderCard}
                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
              >
                <SliderList
                  name={slide.name}
                  image={slide.image}
                  current={slide.current}
                />
              </section>
            );
          })}
        </section>
        <div className={style.sliderButton}>
          <button onClick={prevSlide}>&larr;</button>
          <button onClick={nextSlide}>&rarr;</button>
        </div>
      </div>
    </>
  );
};

export default Slider;
