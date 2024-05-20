"use client";
import Logo from "@/public/images/logo.svg";
import Link from "next/link";
import { useState } from "react";
import styles from "./style.module.scss";
import { HiBars3 } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { TfiSearch } from "react-icons/tfi";

function AppHeader() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className={styles.header}>
      <div className={styles.ddd}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.search_bar}>
          <form className={styles.form}>
            <input
              className={styles.search}
              type="text"
              name="query"
              placeholder="Выберите свой регион"
              required
            />
            <button type="submit" className={styles.button}>
              <TfiSearch
                style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
              />
            </button>
          </form>
        </div>
        <button className={styles.registration}>Зарегистрироваться</button>
        <button className={styles.menu} onClick={toggleMenu}>
          {!menuVisible ? (
            <HiBars3
              style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
            />
          ) : (
            <TfiClose
              style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
            />
          )}
        </button>
      </div>
      {menuVisible && (
        <nav className={styles.dropdownMenu}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <Link href="/" className={styles.link}>
                О нас
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link href="/disciplines" className={styles.link}>
                Дисциплины
              </Link>
            </li>
            <li className={styles.list_item}>
              <p className={styles.link}>Календарь мероприятий</p>
            </li>
            <li className={styles.list_item}>
              <p className={styles.link}>Площадки</p>
            </li>
            <li className={styles.list_item}>
              <p className={styles.link}>Блог</p>
            </li>
            <li className={styles.list_item}>
              <Link href="/contacts" className={styles.link}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default AppHeader;
