import React from "react";
import style from "../Modal/Modal.module.scss";
import logo from "../../image/Logo.png";
import instagram from "../../image/instagram.png";
import facebook from "../../image/facebook.png";
import twitter from "../../image/twitter.png";
import ins from "../../image/in.png";
import ext from "../../image/exit.png";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <section className={style.modal}>
      <section className={style.modal__container}>
        <article className={style.modal__header}>
          <div>
            <img className={style.header__logo} src={logo} alt="" />
            <span>
              <strong>DiveSea</strong>
            </span>
          </div>

          <img
            src={ext}
            alt=""
            onClick={onClose}
            className={style.modal__header_exit}
          />
        </article>
        <hr />

        <nav className={style.modal__navigation}>
          <ul>
            <li>
              <a>Dicrover</a>
            </li>
            <li>
              <a>Creators</a>
            </li>
            <li>
              <a>Sell</a>
            </li>
            <li>
              <a>Stats</a>
            </li>
          </ul>
        </nav>

        <article className={style.modal__network}>
          <img src={instagram} alt="" />
          <img src={ins} alt="" />
          <img src={twitter} alt="" className={style.modal__networkTwitter} />
          <img src={facebook} alt="" />
        </article>
      </section>

      <button className={style.modal__connect}>Connect Wallet</button>
    </section>
  );
};

export default Modal;
