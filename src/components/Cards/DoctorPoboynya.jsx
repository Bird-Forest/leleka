import React from "react";
import cl from "./card.module.scss";
import Image from "next/image";
import women from "../../../public/women.jpg";

export default function DoctorPoboynya() {
  return (
    <div className={cl.wrapCard}>
      <div className={`${cl.docCardLeft} ${cl.bgLeft}`}>
        <div className={cl.wrapImgDoc}>
          <Image src={women} alt="Побойня Олена Анатоліївна" />
        </div>
        <div className={cl.wrapInfo}>
          <div className={cl.infoDoc}>
            <p>лікар сімейної медицини</p>
            <h3>Побойня Олена Анатоліївна</h3>
            <p>
              Сімейний лікар, яку цінують пацієнти за її виняткову уважність,
              ґрунтовні знання та досвід у лікуванні хронічних захворювань.
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
//  Уважний лікар сімейної медицини, яка має ґрунтовні знання та досвід
//           у лікуванні хронічних захворювань, знаходячи особливий підхід до
//           всіх пацієнтів.

//  Сімейний лікар із 10-річним досвідом, спеціалізується на лікуванні
//             хронічних захворювань та профілактиці.
