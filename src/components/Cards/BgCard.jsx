import React from "react";
import cl from "./card.module.scss";
import Image from "next/image";
import bgRightV from "../../../public/daisy-v-r.webp";

export default function BgCard({ children }) {
  return (
    <>
      <div className={cl.bgImgMobile}>
        <Image srs={bgRightV} alt="Білі ромашки на сірому фоні" />
        {children}
      </div>
    </>
  );
}
