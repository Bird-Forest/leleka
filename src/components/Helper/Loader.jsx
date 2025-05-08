import React from "react";
import cl from "./loader.module.scss";

export default function Loader() {
  return (
    <div className={cl.overlay}>
      <span className={cl.loader}></span>
    </div>
  );
}
