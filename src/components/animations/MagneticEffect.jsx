import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MagneticEffect Wrapper
 * Makes any child element follow the cursor slightly when hovered.
 * @param {Object} props
 * @param {number} props.strength - How much the element follows the mouse (default 0.5)
 */
export const MagneticEffect = ({ children, strength = 0.2 }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate center of the element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Distance from mouse to center
    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.1 }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
};
