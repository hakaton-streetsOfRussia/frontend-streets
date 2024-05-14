import React, { useState } from "react";
import styles from "./AppHeader.module.scss";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Search } from "../../images/serach.svg";
import { ReactComponent as Justify } from "../../images/justify.svg";
import { ReactComponent as Cross } from "../../images/cross.svg";

function AppHeader() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className={styles.header}>
      <div className={styles.ddd}>
        <Logo />
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
              <Search />
            </button>
          </form>
        </div>
        <button className={styles.registration}>Зарегистрироваться</button>
        <button className={styles.menu} onClick={toggleMenu}>
          {!menuVisible ? <Justify /> : <Cross />}
        </button>
      </div>
      {menuVisible && (
        <nav className={styles.dropdownMenu}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <p className={styles.link}>О нас</p>
            </li>
            <li className={styles.list_item}>
              <p className={styles.link}>Дисциплины</p>
            </li>
            <li className={styles.list_item}>
              <p className={styles.link}>Календарь мероприятий</p>
            </li>
            <li className={styles.list_item}>
              <p className={styles.link}>Блог</p>
            </li>
            <li className={styles.list_item}>
              <p className={styles.link}>Контакты</p>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default AppHeader;
