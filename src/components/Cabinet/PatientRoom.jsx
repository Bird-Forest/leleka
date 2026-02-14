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
      {/* <Link href="/rules">Особистий кабінет пацієнта</Link> */}
      <a
        href="https://medportal.ua/lel/clinics/88"
        target="_blank"
        rel="noopener noreferrer"
      >
        Особистий кабінет пацієнта
      </a>
    </div>
  );
}
