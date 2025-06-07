import React from "react";
import cl from "./header.module.scss";
import Image from "next/image";
import logo from "../../../public/logo.webp";

export default function Header() {
  return (
    <header className={cl.top}>
      <div className={cl.topCase}>
        <div className={cl.topImg}>
          <Image src={logo} alt="Логотип медичного центру" />
        </div>

        <p>МЦ "Лелека"</p>
        <div className={cl.topTablet}>
          <span>|</span>
          <p>м.Калинівка</p>
          <span>|</span>
          <a href="tel:+380673940871" target="_blank" rel="noopener noreferrer">
            +38 (067) 394 08 71
          </a>
        </div>
      </div>
    </header>
  );
}
