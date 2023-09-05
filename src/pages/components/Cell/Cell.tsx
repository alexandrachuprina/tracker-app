import React, { FC, ReactNode } from "react";

interface CellProps {
  children: ReactNode;
}

const Cell: FC<CellProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Cell;
