import React, { useEffect, useRef } from "react";
import { usePost } from "../context/PostProvider";
import { motion, useAnimation, useInView } from "framer-motion";
export default function Description() {
  const { descript } = usePost();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      ref={descript}
      className="reveal flex flex-col md:flex-row gap-[200px] mt-10 justify-center items-center h-[680px] border-2 rounded-xl m-3"
    >
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}
      >
        image
      </motion.div>

      <div>
        <p className="text-right">
          hello my name is the mahdi haddad, I am a front end developer, I
          studied at IKIU, I am happy
        </p>
      </div>
    </div>
  );
}
