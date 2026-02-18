import React from "react";
import cl from "./screen.module.scss";
import Image from "next/image";
import logo from "../../../public/screen_logo.svg";
import Link from "next/link";

export default function Banner() {
  return (
    <div className={cl.wrapScreen}>
      <div className={cl.bgScreen}>
        <div className={cl.wrapBanner}>
          <Image src={logo} alt="Скринінг Логотип" />
          <div className={cl.bannerText}>
            <h4>
              У нас можна пройти
              <br />
              <b>скринінг здоров’я 40+</b>
            </h4>
            <Link href="/payment" className={cl.bannerLink}>
              Детальніше ...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
