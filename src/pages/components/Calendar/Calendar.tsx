import React, { FC } from "react";
import {
  format,
  sub,
  add,
  startOfMonth,
  endOfMonth,
  differenceInDays,
} from "date-fns";

import Cell from "../Cell/Cell";
import { daysOfWeek } from "./daysOfWeek";
import styles from "./Calendar.module.scss";

interface CalenderProps {
  date: Date;
  setDate: (date: Date) => void;
}

const Calendar: FC<CalenderProps> = ({ date, setDate }) => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const monthDays = differenceInDays(monthEnd, monthStart) + 1;
  // console.log(monthDays)

  const prefixDays = monthStart.getDay();
  const suffixDays = 7 - monthEnd.getDay();

  const setNextMonth = () => {
    setDate(add(date, { months: 1 }));
  };
  const setPrevMonth = () => {
    setDate(sub(date, { months: 1 }));
  };
  const setNextYear = () => {
    setDate(add(date, { years: 1 }));
  };
  const setPrevYear = () => {
    setDate(sub(date, { years: 1 }));
  };
  const setCurrentDate = () => {
    setDate(new Date());
  };

  return (
    <div>
      <button onClick={setPrevYear}>prev year</button>
      <button onClick={setPrevMonth}>prev</button>
      <h1>{format(date, "dd MMMM yyyy")}</h1>
      <button onClick={setNextMonth}>next</button>
      <button onClick={setNextYear}>next year</button>

      <button onClick={setCurrentDate}>today</button>

      <div className={styles.grid}>
        {daysOfWeek.map((day) => (
          <Cell children={day.name} key={day.id} />
        ))}

        {Array.from({ length: prefixDays - 1 }).map((day, i) => (
          <Cell key={i} />
        ))}

        {Array.from({ length: monthDays }).map((day, i) => {
          const date = i + 1;
          return <Cell key={date} children={date} />;
        })}

        {Array.from({ length: suffixDays }).map((day, i) => (
          <Cell key={i} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
