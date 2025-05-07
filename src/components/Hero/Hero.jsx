import React from "react";
import cl from "./hero.module.scss";
import Image from "next/image";
import heroDoc from "../../../public/hero-doc.webp";

export default function Hero() {
  return (
    <div className={cl.hero}>
      <Image src={heroDoc} alt="Лікар оберігає пацієнтів" />
      <div className={cl.caseHero}>
        <div className={cl.caseTitle}>
          <h1>Медичний центр "Лелека"</h1>
          <h2>
            це сімейна медицина <br /> з турботою про вас і ваших близьких
          </h2>
        </div>
        <div className={cl.caseText}>
          <article className={cl.heroArticle}>
            <h4>Ми дбаємо про всю родину</h4>
            <p>
              Від немовлят до людей похилого віку — комплексний підхід до
              здоров’я кожного члена сім’ї.
            </p>
          </article>
          <article className={cl.heroArticle}>
            <h4>Досвідчені фахівці</h4>
            <p>
              Наші лікарі мають великий досвід у веденні пацієнтів та постійно
              підвищують кваліфікацію.
            </p>
          </article>
          <article className={cl.heroArticle}>
            <h4>Доступність і комфорт</h4>
            <p>
              Запис на прийом онлайн або телефоном. Комфортні умови перебування
              в медичному центрі.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
