import React from "react";
import classes from "./MyFrameworkItem.module.css";

const MyFrameworkItem = ({ item }) => {
  return (
    <li className={classes.item}>
      <img src={item.image} alt="" />
      <p>{item.title}</p>
    </li>
  );
};

export default MyFrameworkItem;
