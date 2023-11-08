"use client";

import "./TicTac.css";
import TrophyIcon from "@/public/Assets/trophy.png";
import { useState, useEffect } from "react";
import Image from "next/image";
import Squares from "../Cells";

const TicTacToe = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setgo] = useState("circle");
  const [winningMsg, setwinningMsg] = useState<string | null>(null);

  const message = `its now ${go}'s go `;

  const checkScore = () => {
    const winngCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winngCombination.forEach((arry) => {
      let circleWins = arry.every((cell) => cells[cell] === "circle");
      if (circleWins) {
        setwinningMsg("circle wins");
        return;
      }
    });

    winngCombination.forEach((arry) => {
      let crossWins = arry.every((cell) => cells[cell] === "cross");
      if (crossWins) {
        setwinningMsg("cross wins");
        return;
      }
    });
  };

  useEffect(() => {
    checkScore();
    if (winningMsg) {
      setTimeout(() => {
        setCells(["", "", "", "", "", "", "", "", ""]);
        setgo("circle");
        setwinningMsg(null);
      }, 2000);
    }
  });

  return (
    <div className="container">
      <h1 className="text-5xl mt-10  title mb-5 font-bold text-yellow-600 uppercase tracking-wider">
        Tic Tac Toe{" "}
      </h1>
      <div className="board">
        {cells.map((cell, index) => (
          <Squares
            key={index}
            go={go}
            setGo={setgo}
            id={index}
            cell={cell}
            cells={cells}
            setcells={setCells}
            winMsg={winningMsg}
          />
        ))}
      </div>
      <p className="mt-10 text-white capitalize font-semibold text-lg ">
        {winningMsg || message}
      </p>
      {winningMsg ? (
        <div className="mt-5 flex justify-center flex-col items-center">
          <Image
            src={TrophyIcon}
            width={50}
            className="w-[50px] h-[50px] object-contain aspect-auto"
            height={50}
            alt="tropy image"
          />

          <h1 className="text-3xl mt-5 font-bold text-yellow-600/80 uppercase tracking-wider">
            you won !
          </h1>
        </div>
      ) : null}
    </div>
  );
};

export default TicTacToe;
