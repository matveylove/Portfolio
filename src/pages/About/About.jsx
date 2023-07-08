import React from "react";
import classes from "./About.module.css";

// import component
import MyLang from "./MyLang/MyLang";
import MyDesc from "./MyDesc/MyDesc";
import MyFrameworks from "./MyFrameworks/MyFrameworks";
import MyFeedback from "./MyFeedback/MyFeedback";
import MyContacts from "./MyContacts/Contacts";

const About = () => {
  return (
    <main className={classes.myMain}>
      <MyDesc />
      <MyLang />
      <MyFrameworks />
      <MyFeedback />
      <MyContacts />
    </main>
  );
};

export default About;
