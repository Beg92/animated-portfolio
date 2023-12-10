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
          <Button>Find Out More Work</Button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        
          <h2>SKILLS & TECH STACK</h2>
          <p>
    <span>HTML&CSS | React  | JavaScript</span>
    <span>JSX | Responsive Web Development</span>
    <span>SaSS | JIRA | Version Control </span>
    <span>Flexbox | Media Queries </span>
    <span> APIs | Manipulate the DOM</span>
    <span>ES6 |Managing Data Flow | WordPress</span>
    <span>Chrome DevTools | GitHub Pages</span>
    <span>Adobe Creative Suite | ResponsiveTypography</span>
  </p>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;