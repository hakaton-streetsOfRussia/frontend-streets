import React from "react";
import style from "./style.module.scss";
import { ReactComponent as Barcode } from "@/images/barcode.svg";

export const News = () => {
  return (
    <>
      <div className={style.wrapperTitle}>
        <h2 className={style.title}>НОВОСТИ</h2>
      </div>
      <div className={style.container}>
        <div className={style.news}>
          <div className={style.content}>
            <img className={style.photo} src="#" alt="" />
            <p className={style.description}>
              На &laquo;Играх будущего&raquo; стартовали
              фиджитал-скейтбордингсты
            </p>
            <p className={style.date}>29 мая 2024года</p>
            <p className={style.place}>Казань Ак-Барс Арена</p>
          </div>
          <Barcode />
          <button type="button" className={style.button}>
            Смотреть
          </button>
        </div>
        <div className={style.news2}>
          <div className={style.photo2} />
          <div className={style.info}>
            <p className={style.text}>Калининград</p>
            <p className={style.text}>1 июня</p>
            <p className={style.text}>18:00</p>
          </div>
          <p className={style.title}>Парк Юность</p>
        </div>
        <div className={style.news}>
          <div className={style.content}>
            <img className={style.photo} src="#" alt="" />
            <p className={style.description}>
              На &laquo;Играх будущего&raquo; стартовали
              фиджитал-скейтбордингсты
            </p>
            <p className={style.date}>29 мая 2024года</p>
            <p className={style.place}>Казань Ак-Барс Арена</p>
          </div>
          <Barcode />
          <button type="button" className={style.button}>
            Смотреть
          </button>
        </div>
        <div className={style.news}>
          <div className={style.content}>
            <img className={style.photo} src="#" alt="" />
            <p className={style.description}>
              На &laquo;Играх будущего&raquo; стартовали
              фиджитал-скейтбордингсты
            </p>
            <p className={style.date}>29 мая 2024года</p>
            <p className={style.place}>Казань Ак-Барс Арена</p>
          </div>
          <Barcode />
          <button type="button" className={style.button}>
            Смотреть
          </button>
        </div>
        <div className={style.news}>
          <div className={style.content}>
            <img className={style.photo} src="#" alt="" />
            <p className={style.description}>
              На &laquo;Играх будущего&raquo; стартовали
              фиджитал-скейтбордингсты
            </p>
            <p className={style.date}>29 мая 2024года</p>
            <p className={style.place}>Казань Ак-Барс Арена</p>
          </div>
          <Barcode />
          <button type="button" className={style.button}>
            Смотреть
          </button>
        </div>
      </div>
    </>
  );
};
