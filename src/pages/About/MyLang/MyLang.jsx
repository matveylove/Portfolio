import React from "react";
import classes from "./MyLang.module.css";

import MyLangItem from "./MyLangItem/MyLangItem";

const MyLang = () => {
  const lang = [
    {
      name: "HTML",
      backgroundColor: "BackgroundBlack",
    },
    {
      name: "CSS",
      backgroundColor: "BackgroundPur",
    },
    {
      name: "JavaScript",
      backgroundColor: "BackgroundBlack",
    },
    {
      name: "PHP",
      backgroundColor: "BackgroundPur",
    },
    {
      name: "SQL",
      backgroundColor: "BackgroundBlack",
    },
  ];

  return (
    <section className={classes.lang}>
      <div className={classes.container}>
        <h2 className={classes.mainTitle}>Languages</h2>
        <ul className={classes.langList}>
          {lang.map((item, index) => {
            return <MyLangItem key={index} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default MyLang;
