import React from "react";
import cl from "./footer.module.scss";
import Image from "next/image";
import viber from "../../../public/viber.png";
import telegram from "../../../public/telegram.png";
import PatientRoom from "../Cabinet/PatientRoom";

export default function Footer() {
  const copyrightSymbol = "\u00A9";

  return (
    <footer className={cl.bottom}>
      <div className={cl.bottomCase}>
        <div className={cl.reception}>
          <h4>Години прийому:</h4>
          <p>Пн - Пт : 08:30 - 13:30</p>
          <p>Сб - Нд : вихідні</p>
        </div>
        <div className={cl.wrapInfo}>
          <div className={cl.contacts}>
            <PatientRoom />
            <nav className={cl.wrapLinks}>
              <a
                href="tel:+380673940871"
                target="_blank"
                rel="noopener noreferrer"
                className={cl.linkTel}
              >
                +38 (067) 394 08 71
              </a>
              <a
                // href="viber://chat?number=%2B380673940871"
                href="https://invite.viber.com/?g2=AQBu%2FaznqwKUuE3SMGzwtF7%2Foee%2Fq7mBdImniEv%2BV2GZ4j5qeR%2FbgbsigTd0Mnb%2B"
                target="_blank"
                rel="noopener noreferrer"
                className={cl.linkIcon}
              >
                <Image src={viber} alt="Посилання на Вайбер" />
              </a>
              <a
                // href="https://t.me/Leleka_Kalynivka"
                href="https://t.me/leleka_mc"
                target="_blank"
                rel="noopener noreferrer"
                className={cl.linkIcon}
              >
                <Image src={telegram} alt="Посилання на Телеграм" />
              </a>
            </nav>
          </div>

          <address className={cl.wrapAddress}>
            <p>Наша адреса:</p>
            <p>вул.Костянтина Васюка 15-А</p>
            <p>м.Калинівка Вінницька обл.</p>
          </address>
        </div>

        <p>{`Медичний центр Лелека${copyrightSymbol}2025`}</p>
      </div>
    </footer>
  );
}
