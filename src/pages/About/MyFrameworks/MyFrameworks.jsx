import React from "react";
import classes from "./MyFrameworks.module.css";

// import component
import MyFrameworkItem from "./MyFrameworkItem/MyFrameworkItem";

// import icons
import ibootstarap from "../../../assets/content/ibootstrap.svg";
import igit from "../../../assets/content/igit.svg";
import imysql from "../../../assets/content/imysql.svg";
import ireact from "../../../assets/content/ireact.svg";
import iredux from "../../../assets/content/iredux.svg";
import itailwind from "../../../assets/content/itailwind.svg";
import its from "../../../assets/content/its.svg";
import isass from "../../../assets/content/isass.svg";
import ilaravel from "../../../assets/content/ilaravel.svg";

const MyFrameworks = () => {
  const frameworks = [
    {
      title: "SCSS/SASS",
      image: isass,
    },
    {
      title: "React",
      image: ireact,
    },
    {
      title: "Redux",
      image: iredux,
    },
    {
      title: "TypeScript",
      image: its,
    },
    {
      title: "Git",
      image: igit,
    },
    {
      title: "MySQL",
      image: imysql,
    },
    {
      title: "Laravel",
      image: ilaravel,
    },
    {
      title: "Tailwind",
      image: itailwind,
    },
    {
      title: "Bootstrap",
      image: ibootstarap,
    },
  ];

  return (
    <section className={classes.myFrameworks}>
      <div className={classes.container}>
        <h2 className={classes.title}>Frameworks&libraries&System</h2>
        <ul className={classes.list}>
          {frameworks.map((item, index) => {
            return <MyFrameworkItem key={index} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default MyFrameworks;
