import React from "react";
import { doctors } from "./doctors";
import DoctorCard from "./DoctorCard";
import cl from "./card.module.scss";

export default function ListDooctorCards() {
  return (
    <ul className={cl.wrapList}>
      {doctors.map((item) => (
        <DoctorCard key={item.id} item={item} />
      ))}
    </ul>
  );
}
