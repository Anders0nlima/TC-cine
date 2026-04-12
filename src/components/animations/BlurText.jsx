import React from 'react';
import { motion } from 'framer-motion';

/**
 * BlurText Component (React Bits Style)
 * Animates text characters with a blur effect.
 */
export const BlurText = ({ 
  text, 
  delay = 0, 
  className = "", 
  animateBy = "words", // "words" or "letters"
  direction = "top" 
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.12, 
        delayChildren: delay 
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: direction === "top" ? -20 : 20,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {elements.map((element, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ 
            marginRight: animateBy === "words" ? "0.25em" : "0",
            display: "inline-block" 
          }}
        >
          {element === " " ? "\u00A0" : element}
        </motion.span>
      ))}
    </motion.div>
  );
};
