import style from "./style.module.scss";

export const Addresses = () => {
  return (
    <div className={style.content}>
      <h2 className={style.title}>Контакты</h2>
      <div className={style.info}>
        <div className={style.contacts}>
          <div className={style.paper1}>
            <p className={style.contacts_title}>Телефон</p>
            <p className={style.text}>+79037896545</p>
            <p className={style.contacts_title}>Почта</p>
            <p className={style.text}>info@steetrussia.ru</p>
          </div>
          <div className={style.paper2}>
            <p className={style.contacts_title}>Фактический адрес</p>
            <p className={style.text}>г.Москва Нижегородская улица д 56</p>
          </div>
          <div className={style.paper3}>
            <p className={style.contacts_title}>Юридический адрес</p>
            <p className={style.text}>
              г.Москва <br /> Варшавское шоссе 56
            </p>
          </div>
        </div>
        <div className={style.map}></div>
      </div>
    </div>
  );
};