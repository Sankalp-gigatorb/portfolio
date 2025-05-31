"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function MovingGradientBg() {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 150);

        await controls.start({
          x,
          y,
          transition: {
            duration: 5,
            ease: "easeInOut",
          },
        });
      }
    };

    animate();
  }, [controls]);

  return (
    <motion.div
      className="fixed -z-1 pointer-events-none rounded-full"
      style={{
        width: "650px",
        height: "650px",
        background:
          "linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 50%, #fbc2eb 100%)",
        backgroundSize: "300% 300%",
        filter: "blur(90px)",
        opacity: 0.5,
      }}
      animate={controls}
    />
  );
}
