import React from "react";
import cl from "./screen.module.scss";

export default function ButtonPay() {
  return (
    <form
      method="POST"
      target="_blank"
      action="https://www.liqpay.ua/api/3/checkout"
      className={cl.btnScreen}
    >
      <input
        type="hidden"
        name="data"
        value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIyMDAwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCh0LrRgNC40L3RltC90LMg0LfQtNC+0YDQvtCyYNGPIDQwKyIsInB1YmxpY19rZXkiOiJpNTg5NzM4Mzc1MTQiLCJsYW5ndWFnZSI6InVrIiwicmVzdWx0X3VybCI6Imh0dHBzOi8vbGVsZWthLnZlcmNlbC5hcHAvcmVzdWx0In0="
      />
      <input
        type="hidden"
        name="signature"
        value="9wux+ytolp3CDC4B4rt/SfTciSo="
      />
      <button>Перейти до оплати</button>
    </form>
  );
}
