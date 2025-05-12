import React from "react";
import cl from "./card.module.scss";
import Image from "next/image";

export default function DoctorCard({ item }) {
  return (
    <div className={cl.wrapCard}>
      <div className={item.id % 2 === 0 ? cl.bgImgRight : cl.bgImgLeft}>
        <div className={item.id % 2 === 0 ? cl.sideLeft : cl.sideRight}>
          <div className={cl.wrapImgDoc}>
            <Image src={item.photo} alt={item.name} />
          </div>
          <div className={cl.wrapInfoDoc}>
            <div className={cl.infoDoc}>
              <p>{item.specialist}</p>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className={cl.wrapBtn}>
              <a
                href="https://medportal.ua/#/?misCode=LEL"
                target="_blank"
                rel="noopener noreferrer"
                className={cl.btnDoc}
              >
                Записатися на прийом
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
