import React from "react";
import styles from "./App.module.scss";
import AppHeader from "../AppHeader/AppHeader";

function App() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}></main>
    </>
  );
}

export default App;
