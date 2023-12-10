import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
    
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/begumvernondeveloper/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Beg92">
            <img src="/GitHub.png" alt="" />
          </a>
          <a href="https://www.facebook.com/begum.gecer.52">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/vernonbeg/?next=%2F">
            <img src="/instagram.png" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;