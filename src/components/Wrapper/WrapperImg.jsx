import React from "react";
import cl from "./wrap.module.scss";
import Image from "next/image";
import main from "../../../public/main-deck.webp";

export default function WrapperImg({ children }) {
  return (
    <main className={cl.container}>
      <Image src={main} alt="bg" />
      <>{children}</>
    </main>
  );
}
