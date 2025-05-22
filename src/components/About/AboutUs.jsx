import React from "react";
import cl from "./about.module.scss";
import Image from "next/image";
import nszuMobile from "../../../public/nszu-h.webp";
import nszuDesk from "../../../public/nszu-v.webp";

export default function AboutUs() {
  return (
    <div className={cl.wrapAbout}>
      <div className={cl.bgAbout}>
        <div className={cl.cardAbout}>
          <h3>
            Первинна Медична Допомога за Програмою НСЗУ – Ваш Шлях до Здоров'я!
          </h3>
          <div className={cl.caseAbout}>
            <div className={cl.imgAbout}>
              <Image
                src={nszuMobile}
                alt="Логотип НСЗУ"
                priority
                className={cl.imgMob}
              />
              <Image
                src={nszuDesk}
                alt="Логотип НСЗУ"
                priority
                className={cl.imgDesk}
              />
            </div>

            <article className={cl.aboutArticle}>
              <h4>
                Обирайте свого сімейного лікаря в нашому медичному закладі та
                отримуйте безкоштовну первинну медичну допомогу.
              </h4>
              <p>
                Декларація з лікарем – це ваш ключ до якісної та доступної
                первинної допомоги.
              </p>
              <p>
                Профілактичні огляди, вакцинація, лікування гострих та хронічних
                захворювань.
              </p>
              <p>
                Оформлення довідок, лікарняних, електронних рецептів та
                направлень.
              </p>
            </article>
          </div>
          <h4 className={cl.epilog}>
            Не відкладайте турботу про здоров'я! Укладіть декларацію з нашим
            лікарем і отримуйте гарантовані державою медичні послуги високої
            якості.
          </h4>
        </div>
      </div>
    </div>
  );
}
