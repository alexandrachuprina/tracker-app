import React, { FC } from "react";
import { format, sub, add } from "date-fns";

import Cell from "../Cell/Cell";
import { daysOfWeek } from "./daysOfWeek";

interface CalenderProps {
  date: Date;
  setDate: (date: Date) => void;
}

const Calendar: FC<CalenderProps> = ({ date, setDate }) => {
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

      {daysOfWeek.map((day) => (
        <Cell children={day.name} key={day.id} />
      ))}
    </div>
  );
};

export default Calendar;
