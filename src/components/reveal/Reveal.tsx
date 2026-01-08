"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Solo se anima la primera vez que se ve
      transition={{ duration: 0.5, delay: 0.25 }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};