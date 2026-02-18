import React from "react";
import cl from "./screen.module.scss";
import Image from "next/image";
import screen from "../../../public/poster.webp";
import logo from "../../../public/screen_logo.svg";
import ButtonPay from "./ButtonPay";

export default function Screen() {
  return (
    <div className={cl.wrapScreen}>
      <div className={cl.bgScreen}>
        <div className={cl.photoScreen}>
          <Image src={screen} alt="Скринінг Постер" />
        </div>
        <div className={cl.posterScreen}>
          <div className={cl.logoWrap}>
            <Image src={logo} alt="Скринінг Логотип" />
          </div>

          <div className={cl.btnScreen}>
            <a
              href="https://screening.moz.gov.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Дізнатись більше
            </a>
            <a
              href="https://medportal.ua/lel/specialists?serviceAutoCmplt=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%96%D0%BD%D0%B3%20%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%E2%80%99%D1%8F%2040%2B"
              target="_blank"
              rel="noopener noreferrer"
            >
              Запис на прийом
            </a>
          </div>
          <ButtonPay />
        </div>
      </div>
    </div>
  );
}
