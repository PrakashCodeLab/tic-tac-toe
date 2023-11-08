import React, { SetStateAction } from "react";
import "./TicTacToe/TicTac.css";

interface SquaresProps {
  id: number;
  cell: string;
  cells: string[];
  setcells: React.Dispatch<React.SetStateAction<string[]>>;
  go: string;
  setGo: React.Dispatch<React.SetStateAction<string>>;
  winMsg: string | null;
}

const Squares: React.FC<SquaresProps> = ({
  id,
  cell,
  cells,
  setcells,
  go,
  setGo,
  winMsg,
}) => {
  const handleClick = (e: any) => {
    const target = e.target as HTMLDivElement;
    if (!target) {
      return; // Early return if the target element doesn't exist
    }

    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        handleChange("circle");
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        handleChange("cross");
        setGo("circle");
      }
    }
  };

  const handleChange = (className: string) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });

    setcells(nextCells);
  };

  return (
    <div className="boxes" id={id.toString()} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
};

export default Squares;
