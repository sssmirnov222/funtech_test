import React from "react";
import style from "../Main/Main.module.scss";

import CreateNTFS from "../CreateNTFS/CreateNTFS";
import DiscoverNTFS from "../DiscoverNTFS/DiscoverNTFS";
import Slider from "../Slider/Slider";

const Main = () => {
  return (
    <>
      <main className={style.main}>
        <DiscoverNTFS />
        <Slider />
        <CreateNTFS />
      </main>
    </>
  );
};

export default Main;
