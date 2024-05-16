import AppHeader from '../AppHeader/AppHeader'
import { Title } from '../Title'
import styles from './App.module.scss'

function App() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <Title videoUrl={'https://youtu.be/9rzrFQdE7JM'} />
      </main>
    </>
  )
}

export default App
