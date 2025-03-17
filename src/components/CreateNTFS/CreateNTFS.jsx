import React from "react";
import style from "../CreateNTFS/CreateNTFS.module.scss";
import NTFS from "../../image/NTFS.png";

const CreateNTFS = () => {
  return (
    <>
      <section className={style.main__discoverNTF}>
        <article className={style.main__discoverNTF_info}>
          <h2>Create and Self NTFS</h2>
          <span>World’s Largest NFT Place</span>
          <div>
            <button className={style.main__discoverNTF_explore}>
              Explore more
            </button>
            <button className={style.main__discoverNTF_sell}>
              Sell Artwork
            </button>
          </div>
        </article>
        <article className={style.main__discoverNTF_image}>
          <img src={NTFS} alt="" />
        </article>
      </section>
    </>
  );
};

export default CreateNTFS;
