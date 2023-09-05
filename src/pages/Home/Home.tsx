import React, { FC } from "react";
import Calendar from "../components/Calendar/Calendar";

type Props = {};

const Home: FC<Props> = () => {
  return (
    <div>
      <Calendar />
    </div>
  );
};

export default Home;
