import React from "react";
import classes from "./MyHeader.module.css";
import { Link } from "react-router-dom";

const MyHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.container}>
          <div className={classes.top}>
            <h1 className={classes.title}>BRYANTSEV</h1>
          </div>
          <div className={classes.bottom}>
            <nav className={classes.menu}>
              <Link to="/" className={classes.link}>
                matvey.<span>AboutMe();</span>
              </Link>
              <Link to="/blog" className={classes.link}>
                matvey.<span>Blog();</span>
              </Link>
              <Link to="/quiz" className={classes.link}>
                matvey.<span>Quiz();</span>
              </Link>
              <Link to="/portfolio" className={classes.link}>
                matvey.<span>Portfolio();</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default MyHeader;
