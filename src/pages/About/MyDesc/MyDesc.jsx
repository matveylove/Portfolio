import React from "react";
import classes from "./MyDesc.module.css";

// import image
import me from "../../../assets/content/me.jpg";

const MyDesc = () => {
  return (
    <section>
      <div className={classes.container}>
        <h2 className={classes.note}>
          <span className={classes.const}>Теория</span> — это когда все
          известно, но ничего не работает.{" "}
          <span className={classes.const}>Практика</span> — это когда все
          работает, но никто не знает почему. Мы же объединяем теорию и
          практику: ничего не работает... и никто не знает почему!
        </h2>

        <div className={classes.matvey}>
          <img src={me} alt="photo" className={classes.photo} />
          <p className={classes.hi}>Hi...</p>
          <span className={classes.const}>const</span> Matvey = &#123;
          <br />
          <div className={classes.description}>
            <span>name: 'Matvey',</span> <br />
            <span> age: 21,</span> <br />
            <span>description: 'Frontend developer',</span> <br />
            <span>workExperience: '3 years',</span> <br />
            <span>hobby: [parachute sport, playing the guitar, training],</span>
          </div>
          &#125;;
        </div>
      </div>
    </section>
  );
};

export default MyDesc;
