import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import Button from 'react-bootstrap/Button';


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./logo-no-background.png" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <a href="https://github.com/Beg92" target="_blank">
          <Button>Find More Work on My GitHub</Button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
      
        >
          <h2>SKILLS & TECH STACK</h2>
          <p>
    <span>HTML&CSS  </span>
    <span>React</span>
    <span> JavaScript</span>
    <span>JSX</span>
    <span>Responsive Web Development</span>
    <span>Sass </span>
    <span>JIRA </span>
    <span> Version Control </span>
    <span>Flexbox </span>
    <span>Media Queries </span>
    <span> APIs </span>
    <span>Manipulate the DOM</span>
    <span>ES6</span>
    <span>Managing Data Flow </span>
    <span>WordPress</span>
    <span>Chrome DevTools </span>
    <span> GitHub Pages</span>
    <span>ResponsiveTypography</span>
    <span>Adobe Creative Suite </span>
  </p>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;