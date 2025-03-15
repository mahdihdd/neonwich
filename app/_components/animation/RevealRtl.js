"use client"
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function RevealRtl({ children, style }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      className={style}
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
