import React from "react";
import classes from "./Contacts.module.css";

// import image
import me from "../../../assets/content/contactme.jpg";
import vk from "../../../assets/content/vk.svg";
import github from "../../../assets/content/github.svg";
import telegram from "../../../assets/content/telegram.svg";

const MyContacts = () => {
  return (
    <section className={classes.contacts}>
      <h2 className={classes.title}>Contacts</h2>
      <div className={classes.desc}>
        <div className={classes.info}>
          <img src={me} alt="" />
          <a href="tel:+79236162348">+7-923-616-23-48</a>
          <a href="mailto:mail@htmlacademy.ru">matveyka.bryantsev@mail.ru</a>
        </div>
        <div className={classes.image}>
          <a href="https://vk.com/bryantsevvv">
            <img src={vk} alt="" />
          </a>
          <a href="https://t.me/nevsedooma">
            <img src={telegram} alt="" />
          </a>
          <a href="https://github.com/matveylove">
            <img src={github} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyContacts;
