import React from "react";
import style from "../SliderList/SliderList.module.scss";
import vector from "../../image/Vector.png";

const SliderList = ({ name, image, current }) => {
  return (
    <>
      <section className={style.sliderList}>
        <img src={image} alt="slide" className={style.sliderList_image} />
        <article>
          <span className={style.sliderList_name}>
            <strong>{name}</strong>
          </span>
          <div className={style.sliderList__current}>
            <div className={style.sliderList__current_price}>
              <span>Current bid</span>
              <span>
                {" "}
                <img
                  src={vector}
                  alt="vector"
                  className={style.sliderList_imageVector}
                />
                <strong>{current}</strong>
              </span>
            </div>
            <button className={style.sliderList__current_placeButton}>
              Place Bid
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default SliderList;
