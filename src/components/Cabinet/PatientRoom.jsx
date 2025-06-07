import React from "react";
import cl from "./patient.module.scss";
import Image from "next/image";
import doctor from "../../../public/doctor.png";
import Link from "next/link";

export default function PatientRoom() {
  return (
    <div className={cl.wrapPatient}>
      <div className={cl.patientIcon}>
        <Image src={doctor} alt="Особистий кабінет пацієнта" />
      </div>
      <Link href="/rules">Особистий кабінет пацієнта</Link>
    </div>
  );
}
