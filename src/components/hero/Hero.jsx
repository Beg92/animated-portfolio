import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>BEGUM GECER VERNON</motion.h2>
          <motion.h1 variants={textVariants}>
            React Web Developer and UI Designer
          </motion.h1>
          <motion.h3>
            An experienced Front-end Developer  with a unique background as a
            former basketball player with 14 years of expertise. Proficient in crafting
            mobile-friendly web projectsthrough the synergy of UI design,
            ReactJS, with a sharp eye for identifying opportunities to elevate
            front-end design and enhance the
            user experience in any platform.
          </motion.h3>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        React JavaScript SaSS HTML CSS 
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;