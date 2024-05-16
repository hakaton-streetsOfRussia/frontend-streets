import AppHeader from "../AppHeader/AppHeader";
import Footer from "../Footer";
import { Title } from "../Title";
import style from "./App.module.scss";

function App() {
  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <Title videoUrl={"https://youtu.be/9rzrFQdE7JM"} />
      </main>
      <Footer />
    </>
  );
}

export default App;
