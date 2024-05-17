import AppHeader from "../AppHeader/AppHeader";
import { Title } from "../Title";
import { Map } from "../Map";
import { News } from "../News";
import Footer from "../Footer";
import style from "./App.module.scss";

function App() {
  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <Title videoUrl={"https://youtu.be/9rzrFQdE7JM"} />
        <Map />
        <News />
      </main>
      <Footer />
    </>
  );
}

export default App;
