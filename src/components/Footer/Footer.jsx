import React from "react";
import style from "../Footer/Footer.module.scss";
import logoWave from "../../image/Wave.png";
import instagram from "../../image/instagram.png";
import facebook from "../../image/facebook.png";
import twitter from "../../image/twitter.png";
import ins from "../../image/in.png";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <section className={style.footer__name}>
          <article className={style.footer__logo}>
            <img src={logoWave} alt="" />
            <span>DiveSea</span>
          </article>
          <nav className={style.footer__navigation}>
            <li>
              <a href="">Private Policy</a>
            </li>
            <li>
              <a href="">Tern & Condition</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </nav>
        </section>
        <hr className="blok" />
        <section className={style.footer__info}>
          <article className={style.footer__rights}>
            <span>@ 2023 EATLY All Rights Reserved</span>
          </article>
          <ul className={style.footer__network}>
            <li>
              <img src={instagram} alt="" />
            </li>
            <li>
              <img src={ins} alt="" />
            </li>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
};

export default Footer;
