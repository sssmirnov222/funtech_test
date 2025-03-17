import React from "react";
import style from "../Header/Header.module.scss";
import logo from "../../image/Logo.png";

const Header = () => {
  return (
    <header className={style.header}>
      <section>
        <img className={style.header__logo} src={logo} alt="" />
        <nav className={style.header__navigation}>
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
      </section>

      <button className={style.header__connect}>Connect Wallet</button>
    </header>
  );
};

export default Header;
