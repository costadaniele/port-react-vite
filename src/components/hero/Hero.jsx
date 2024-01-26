import "./hero.css";
import notebookAnimation from '../../animation/notebook.json';
import Lottie from "lottie-react";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex hero">
      <div id="hero"></div>
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            src="./avatar.jpeg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title">Dev Front-End, QA e artista-programadora nas horas vagas.</motion.h1>
        <p className="sub-title">Meu foco principal é conquistar uma vaga como front-end,
          minha experiência com TI vem da área de QA e nas artes visuais, mas desde 2014 venho
          pesquisando e buscando conhecimento com os códigos e design.</p>

        <div className="all-icons flex">
          <a href="https://github.com/costadaniele" target="blank"><div className="icon icon-github" /></a>
          <a href="https://www.linkedin.com/in/danieledossantoscosta/" target="blank"><div className="icon icon-linkedin" /></a>
          <a href="https://www.youtube.com/@danielecosta151" target="blank"><div className="icon icon-youtube-play" /></a>
          <a href="https://www.instagram.com/oouright/" target="blank"><div className="icon icon-instagram" /></a>
        </div>

      </div>
      <div className="right-section animation">
        <Lottie

          lottieRef={lottieRef}
          className='' onLoadedImages={() => {
            // @ts-ignore
            // https://lottiefiles.com/ 
            lottieRef.current.setSpeed(.5);
          }} animationData={notebookAnimation} />
      </div>
    </section>

  )
}

export default Hero;