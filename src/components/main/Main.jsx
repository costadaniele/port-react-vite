import { useState } from 'react';
import './main.css';
import { myProjects } from './myProjects';
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {

  // active
  const [currentActive, setcurrentActive] = useState('all');
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return zzz === buttonCategory;
    });
    setArr(newArr);
  }

  return (
    <main className='flex'>
      <section className='flex left-section'>

        {/* All  */}

        <button onClick={() => {
          setcurrentActive("all");
          setArr(myProjects);
        }} className={currentActive === "all" ? "active" : null}> Todos os projetos </button>


        {/* Html  */}

        <button onClick={() => { handleClick("css") }}

          className={currentActive === "css" ? "active" : null}>
          Html / Css
        </button>

        <button onClick={() => { handleClick("js") }} className={currentActive === "js" ? "active" : null}>JavaScript</button>
        <button onClick={() => { handleClick("react") }} className={currentActive === "react" ? "active" : null}>React</button>
        <button onClick={() => { handleClick("p5js") }} className={currentActive === "p5js" ? "active" : null}>p5.js</button>

      </section>

      <section className='flex right-section'>
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath} className='card'>

                <img width={266} src={item.imgPath} alt='' />

                <div style={{ width: "266px" }} className="box">

                  <h1 className='title'>{item.projectTitle}</h1>
                  <p className='sub-title'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam esse similique nemo dolorem ipsam rem
                  </p>

                  <div className="flex icons">

                    <div style={{ gap: "11px" }} className='flex'>
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <a className="link flex" href=''>
                      more
                      <span style={{ alignSelf: "end" }} className='icon-arrow-right'></span>

                    </a>

                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;