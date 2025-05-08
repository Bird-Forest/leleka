import React from "react";
import cl from "./patient.module.scss";
import Image from "next/image";
import doctor from "../../../public/doctor.png";

export default function PatientRoom() {
  return (
    <div className={cl.wrapPatient}>
      <Image src={doctor} alt="Особистий кабінет пацієнта" />
      <a>Особистий кабінет пацієнта</a>
    </div>
  );
}
