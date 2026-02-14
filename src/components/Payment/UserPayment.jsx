import Image from "next/image";
import React from "react";
import pay from "../../../public/logo_black.svg";
import liqpay from "../../../public/liqpay.svg";
import Link from "next/link";
import cl from "./pay.module.scss";

export default function UserPayment() {
  return (
    <div className={cl.wrapPay}>
      <h2>ОПЛАТА ПОСЛУГИ</h2>
      <div className={cl.logoScreen}>
        <Image src={pay} alt="Скринінг Логотип" />
      </div>
      <div className={cl.paySum}>
        <p>Вартість</p>
        <p>2000,00 грн</p>
      </div>
      <div className={cl.wrapQR}>QR</div>
      <div className={cl.logoLiqPay}>
        <Image src={liqpay} alt="LiqPay Логотип" />
      </div>
      <div className={cl.wrapLink}>
        <Link href="/agree">Угода користувача</Link>
        <Link href="/">Повернутись на головну</Link>
      </div>
    </div>
  );
}
