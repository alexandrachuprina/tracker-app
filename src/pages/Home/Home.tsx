import React, { FC, useState } from "react";
import Calendar from "../components/Calendar/Calendar";

type Props = {};

const Home: FC<Props> = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div>
      <Calendar date={currentDate} setDate={setCurrentDate} />
    </div>
  );
};

export default Home;
