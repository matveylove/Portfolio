import React from "react";
import classes from "./Result.module.css";
// import image
import fireworks from "../../../assets/content/fireworks.svg";
const Result = () => {
  return (
    <div className={classes.fireworks}>
      <img src={fireworks} alt="" />
      <h2>Вы отгадали 3 ответа из 10</h2>
      <button className={classes.btn}>Попробовать снова</button>
    </div>
  );
};

export default Result;
