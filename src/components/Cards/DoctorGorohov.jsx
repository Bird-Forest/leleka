import React from "react";
import cl from "./card.module.scss";
import Image from "next/image";
import man from "../../../public/man.jpg";

export default function DoctorGorohov() {
  return (
    <div className={cl.wrapCard}>
      <div className={`${cl.docCard} ${cl.bgRight}`}>
        <Image
          src={man}
          alt="Горохов Володимир Вікторович"
          className={cl.imgDoc}
        />
        <div className={cl.wrapInfo}>
          <div className={cl.infoDoc}>
            <p>лікар сімейної медицини</p>
            <h3>Горохов Володимир Вікторович</h3>
            <p>
              Досвідчений фахівець з великим досвідом лікування дітей, якому
              довіряють батьки та життєрадісним ставленням до своєї справи.
            </p>
          </div>
          <div className={cl.wrapBtn}>
            <button className={cl.btnDoc}>Записатися на прийом</button>
          </div>
        </div>
      </div>
    </div>
  );
}
