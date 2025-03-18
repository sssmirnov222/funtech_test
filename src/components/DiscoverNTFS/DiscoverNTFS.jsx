import React, { useState } from "react";
import style from "../DiscoverNTFS/DiscoverNTFS.module.scss";
import imageUI from "../../image/NTFS.png";
import sun from "../../image/sun.png";
import arrow from "../../image/arrow.png";
import ornament from "../../image/Dot Ornament.png";
import { useEffect } from "react";

const DiscoverNTFS = () => {
  const [animationImages, setAnimationImages] = useState([]);
  const images = [imageUI, sun, arrow, ornament];

  useEffect(() => {
    images.forEach((image, index) => {
      setTimeout(() => {
        setAnimationImages((img) => [...img, image]);
      }, index * 2000);
    });
  }, []);

  return (
    <section className={style.createNTF}>
      <section className={style.main__createNTF}>
        <h1>Discover Antd creater NFTs</h1>
        <p>
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a <strong>$20 bonus</strong>.
        </p>
        <article>
          <button className={style.main__createNTF_explore}>Expore more</button>
          <button className={style.main__createNTF_create}>Create NFT</button>
        </article>
        <article className={style.main__createNTF_result}>
          <div>
            <span>
              <strong>430K+</strong>
            </span>
            <span>Art Works</span>
          </div>
          <div>
            <span>
              <strong>159K+</strong>
            </span>
            <span>Creators</span>
          </div>
          <div>
            <span>
              <strong>87K+</strong>
            </span>
            <span>Collections</span>
          </div>
        </article>
      </section>
      <section className={style.main__image}>
        <article>
          <div className={style.main__image_flex}>
            {animationImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`image ${index}`}
                style={{ opacity: 0, animation: "animation 1s forwards" }}
              />
            ))}
            <style>
              {`
          @keyframes animation {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
            </style>
          </div>
        </article>
      </section>
    </section>
  );
};

export default DiscoverNTFS;
