import React, { useState } from "react";
import classes from "./Quiz.module.css";

// import components
import Result from "./Result/Result";
import Game from "./Game/Game";

const questions = [
  {
    title: "В React все является ____",
    res: ["Модулем", "компонентом", "пакетом", "классом"],
    correctly: 1,
  },
  {
    title: "От чего отказались в последних версиях React?",
    res: [
      "componentWillMount",
      "JavaScript",
      "componentDidMount",
      "от приглашений на Facebook",
    ],
    correctly: 0,
  },
  {
    title: "Что такое Babel?",
    res: [
      "транспайлер",
      "компилятор",
      "интерпретатор",
      "компилятор и транспайлер",
    ],
    correctly: 0,
  },
  {
    title: "Что такое виртуальная DOM?",
    res: [
      "точная HTML-копия реальной DOM",
      "встроенный компонент браузера",
      "объект JavaScript, содержащий элементы и данные",
      "строка JSON, содержащая элементы и данные, возвращаемые из метода react.render",
    ],
    correctly: 2,
  },
  {
    title:
      "Какое их следующих утверждений не относится к рендерингу виртуальной DOM?",
    res: [
      "Реализация виртуальной DOM всегда оказывается быстрее, чем манипуляции с DOM.",
      "Если что-то меняется, выполняется повторный рендер всего пользовательского интерфейса в виртуальной DOM.",
      "Перерисовка DOM — самая медленная часть рендера.",
      "После повторного рендера в реальную DOM вносятся только необходимые изменения.",
    ],
    correctly: 0,
  },
  {
    title:
      "Какое из перечисленных ниже слов не является зарезервированным словом в JavaScript?",
    res: ["default", "throw", "finally", "undefined"],
    correctly: 3,
  },
];

const Quiz = () => {
  const [step, setStep] = useState(0);

  return (
    <div className={classes.main}>
      <Game />
      {/* <Result /> */}
    </div>
  );
};

export default Quiz;
