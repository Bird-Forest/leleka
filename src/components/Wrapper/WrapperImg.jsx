import React from "react";
import cl from "./wrap.module.scss";
import Image from "next/image";
import desk from "../../../public/main-desk.webp";
import mobile from "../../../public/main-mobile.webp";

export default function WrapperImg({ children }) {
  return (
    <main className={cl.container}>
      <div className={cl.mobile}>
        <Image
          src={mobile}
          alt="Фонове зображення - сімейне фото"
          className={cl.mobile}
          priority
        />
      </div>
      <div className={cl.desk}>
        <Image src={desk} alt="Фонове зображення - сімейне фото" priority />
      </div>

      <>{children}</>
    </main>
  );
}
