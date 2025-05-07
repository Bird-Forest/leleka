import React from "react";
import cl from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={cl.bottom}>
      <div className={cl.bottomCase}>
        <p>МЦ "Лелека"</p>
        <p>Вінницька обл. м.Калинівка</p>
        <p> вул. Костянтина Васюка 15-А</p>

        <a href="tel:+380673940871" target="_blank" rel="noopener noreferrer">
          +38 (067) 394 08 71
        </a>
        <a></a>
      </div>
    </footer>
  );
}
