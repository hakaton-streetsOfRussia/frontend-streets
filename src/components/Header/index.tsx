"use client";
import Logo from "@/public/images/logo.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import styles from "./style.module.scss";

function AppHeader() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className={styles.header}>
      <div className={styles.ddd}>
        <div className={styles.logoWrapper} onClick={() => router.push("/")}>
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

        {!menuVisible ? (
          <div onClick={toggleMenu} className={styles.burger}>
            <span></span>
          </div>
        ) : (
          <div
            onClick={toggleMenu}
            className={`${styles.burger} ${styles.active}`}
          >
            <span></span>
          </div>
        )}
      </div>
      {menuVisible && (
        <nav className={styles.dropdownMenu}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <Link
                href="/about-us"
                className={
                  isActive("/about-us") ? styles.linkactive : styles.link
                }
              >
                О нас
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link
                href="/disciplines"
                className={
                  isActive("/disciplines") ? styles.linkactive : styles.link
                }
              >
                Дисциплины
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link
                href="/calendar"
                className={
                  isActive("/calendar") ? styles.linkactive : styles.link
                }
              >
                Календарь мероприятий
              </Link>
            </li>
            <li className={styles.list_item}>
              <p className={styles.link}>Площадки</p>
            </li>
            <li className={styles.list_item}>
              <Link
                href="/blog"
                className={isActive("/blog") ? styles.linkactive : styles.link}
              >
                Блог
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link
                href="/contacts"
                className={
                  isActive("/contacts") ? styles.linkactive : styles.link
                }
              >
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
