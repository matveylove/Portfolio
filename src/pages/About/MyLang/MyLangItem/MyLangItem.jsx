import React from "react";
import classes from "./MyLangItem.module.css";

import IconHand from "../../../../assets/languages/goodIcon.svg";

const MyLangItem = ({ item }) => {
  return (
    <li
      className={
        item.backgroundColor === "BackgroundBlack"
          ? classes.backgroundBlack
          : classes.backgroundPur
      }
    >
      <div className={classes.langTop}>
        <img src={IconHand} alt=""></img>
        <h3 className={classes.langTitle}>{item.name}</h3>
      </div>
    </li>
  );
};

export default MyLangItem;
