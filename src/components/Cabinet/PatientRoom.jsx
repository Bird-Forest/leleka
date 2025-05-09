import React from "react";
import cl from "./patient.module.scss";
import Image from "next/image";
import doctor from "../../../public/doctor.png";

export default function PatientRoom() {
  return (
    <div className={cl.wrapPatient}>
      <div className={cl.patientIcon}>
        <Image src={doctor} alt="Особистий кабінет пацієнта" />
      </div>
      <a>Особистий кабінет пацієнта</a>
    </div>
  );
}
