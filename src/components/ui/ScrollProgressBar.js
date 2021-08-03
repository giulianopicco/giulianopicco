import React from 'react'
import {
    motion,
    useViewportScroll,
    useTransform,
} from "framer-motion";

function ScrollProgressBar() {

    // Viewport scroll progress
  const { scrollYProgress } = useViewportScroll();
  const width = useTransform(scrollYProgress, (value) => value * 100 + "%");
    
    return (
        <motion.div
        className="h-1 lg:h-2 bg-gray-200 opacity-50 rounded-r"
        style={{
          width,
        }}
        transition={{ ease: "easeInOut" }}
      ></motion.div>
    )
}

export default ScrollProgressBar
