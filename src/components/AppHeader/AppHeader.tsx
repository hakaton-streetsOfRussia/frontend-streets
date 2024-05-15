import { useState } from 'react'
import { ReactComponent as Cross } from '../../images/cross.svg'
import { ReactComponent as Justify } from '../../images/justify.svg'
import { ReactComponent as Logo } from '../../images/logo.svg'
import { ReactComponent as Search } from '../../images/serach.svg'
import styles from './AppHeader.module.scss'

function AppHeader() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <header className={styles.header}>
      <div className={styles.ddd}>
        {/* would be link - to the main page */}
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.search_bar}>
          <form className={styles.form}>
            <input className={styles.search} type="text" name="query" placeholder="Выберите свой регион" required />
            <button type="submit" className={styles.button}>
              <Search />
            </button>
          </form>
        </div>
        <button className={styles.registration}>Зарегистрироваться</button>
        {/* todo need to fix colors and for easy icons maybe should use React Icons (because of now Justify icon cant handle color) */}
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
  )
}

export default AppHeader
