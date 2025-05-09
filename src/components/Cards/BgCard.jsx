import React from "react";
import cl from "./card.module.scss";
import Image from "next/image";
import bgRightV from "../../../public/daisy-v-r.webp";

export default function BgCard({ item, children }) {
  // console.log(item);
  // const img = item.bgMobile;
  // const src = img.src;
  // console.log(img);
  return (
    <>
      <div className={cl.bgImgMobile}>
        <Image srs={bgRightV} alt="Білі ромашки на сірому фоні" />
        {children}
      </div>
      {/* <div className={cl.bgImgDesk}>
        <Image srs={item.bgDesk} alt="Білі ромашки на сірому фоні" />
        {children}
      </div> */}
    </>
  );
}
