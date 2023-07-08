import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

// import components
import Layout from "../layout/Layout";
import { Loading } from "../Loading/Loading";
// import pages
import About from "../../pages/About/About";
import Quiz from "../../pages/Quiz/Quiz";
import Portfolio from "../../pages/Portfolio/Portfolio";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Blog from "../../pages/Blog/Blog";

function App() {
  const [state, setState] = useState(false);
  setTimeout(() => {
    setState(() => {
      return true;
    });
  }, 3000);

  const { scrollYProgress } = useScroll();
  return (
    <div className="App">
      {state ? (
        <div>
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<About />}></Route>
              <Route path="quiz" element={<Quiz />}></Route>
              <Route path="portfolio" element={<Portfolio />}></Route>
              <Route path="blog" element={<Blog />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Route>
          </Routes>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
