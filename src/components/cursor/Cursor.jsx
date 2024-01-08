import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  useEffect(() => {
    const mouseMove = (e) => {
      // Handle any mousemove logic if needed
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Always return null to disable the cursor
  return null;
};

export default Cursor;