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
          <h2>SKILLS</h2>
          <p>
            HTML CSS<br/>
            REACT<br/>
            JAVASCRIPT <br/>
            JSX<br/>
            RESPONSIVE WEB DEVELOPMENT<br/>
            SaSS
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SKILLS</h2>
          <p>
          JIRA<br/>
          VERSION CONTROL<br/>
          FLEXBOX<br/>
           MEDIA QUERIES<br/>
          RESPONSIVE TYPOGRAPHY<br/>
          </p>
    
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SKILLS</h2>
          <p>
            APIS<br/>
            MANIPULATE THE DOM<br/>
            ES6<br/>
            MANAGING DATA FLOW<br/>
            WORDPRESS<br/>
          </p>
         
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>TECK STACK</h2>
          <p>
            CHROME DEVTOOLS<br/>
            GITHUB PAGES<br/>
            ADOBE CREATIVE SUITE
          </p>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;