import React from "react";
import cl from "./header.module.scss";
import Image from "next/image";
import logo from "../../../public/family.png";

export default function Header() {
  return (
    <header className={cl.top}>
      <div className={cl.topCase}>
        <Image
          src={logo}
          alt="Логотип медичного центру"
          className={cl.topImg}
        />
        <p>МЦ "Лелека"</p>
        <div className={cl.topTablet}>
          <span>|</span>
          <p>м.Калинівка</p>
          <>|</>
          <a href="tel:+380673940871" target="_blank" rel="noopener noreferrer">
            +38 (067) 394 08 71
          </a>
        </div>
      </div>
    </header>
  );
}
