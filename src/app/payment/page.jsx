import Screen from "@/components/Screening/Screen";
import React from "react";
import cl from "../page.module.scss";

export default function PageOfScreening() {
  return (
    <section className={cl.center}>
      <Screen />
    </section>
  );
}
