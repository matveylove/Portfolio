import React from "react";
import classes from "./Game.module.css";

const Game = () => {
  return (
    <>
      <div className={classes.progress}>
        <div></div>
      </div>
      <h2 className={classes.question}>Что такое useState?</h2>
      <ul className={classes.list}>
        <li className={classes.item}>Это функция для хранения данных</li>
        <li className={classes.item}>Это глобальный стейт</li>
        <li className={classes.item}>Это когда ты никому не нужен</li>
      </ul>
    </>
  );
};

export default Game;
