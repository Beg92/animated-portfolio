import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Button from 'react-bootstrap/Button';



const items = [
  {
    id: 1,
    title: "React Shopping App",
    img: "./shopping_app.png",
    desc: "React App helping you to pick the items that you want to buy and calculates total at the checkout",
    skills:"Reactjs, JSX, ES6,Manipulate DOM",
    tools:"VS Code, GitHub",
    demoLink:"https://beg92.github.io/shopping-react-app/"
  },
  {
    id: 2,
    title: "Zero Waste Recipes",
    img:"./zero-waste.png",
    desc: "A Responsive Website provides you with recipes based on the ingredients that you already have at home, eliminating food waste!",
    skills: "SaaS , REST APIs , DOM Manipulation ,Vanilla JavaScript ,Mobile First Design,Media Queries ,ES6 , GitHub",
    tools:"VS Code, GitHub",
    demoLink:"https://chingu-voyages.github.io/v46-tier1-team-06/"
  },
  {
    id: 3,
    title: "Guess The Word",
    img: "./guess_word.png",
    desc: "Players needs to enter one letter at a time to guess word before 8 letters. If they guesses the word they win the game otherwise it restarts with new word. Check it out and try yourself ! 😁",
    skills: "CSS, HTML,Manipulate the DOM, Vanilla JavaScript",
    tools:"'VS Code, GitHub, Gitbash",
    demoLink:"https://beg92.github.io/guess-the-word-main/"
    
  },
  {
    id: 4,
    title: "Super Sticky Notes",
    img: "./super_notes.png",
    desc: "Greenfield project created Sticky Notes App. I used JSX and CSS most for this project. You can track to-do items with this app. You can create as many as you want.",
    skills: "ES6, JSX, Managing data flow, Manipulate the DOM",
    tools: "CodeSandbox, Props, State",
    demoLink:"https://beg92.github.io/sticky-notes-app/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <span className="skills"><b>Skills:</b> {item.skills}</span>
            <span className="tools"><b>Tools:</b> {item.tools}</span>
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
            <Button>See Demo</Button></a>
          </motion.div>
         
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;