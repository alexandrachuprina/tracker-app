import React, { FC, ReactNode } from "react";
import styles from "./Cell.module.scss";

interface CellProps {
  children?: ReactNode;
}

const Cell: FC<CellProps> = ({ children }) => {
  return <div className={styles.cell}>{children}</div>;
};

export default Cell;
