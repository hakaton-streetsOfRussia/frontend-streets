"use client";
import { useState } from "react";
import { Calendar } from "./_components/Calendar";
import style from "./style.module.scss";

export default function Calendarevents() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <main className={style.main}>
      <h2 className={style.title}>Календарь мероприятий</h2>
      <div className={style.content}>
        <div className={style.choice}>
          <div className={style.calendarWrapper}>
            <Calendar onDateSelect={handleDateSelect} />
          </div>
          <div className={style.dropdownmenu}>
            <div className={style.menu}></div>
            <div className={style.menu}></div>
            <div className={style.menu}></div>
          </div>
        </div>
        <div className={style.events}></div>
      </div>
    </main>
  );
}
