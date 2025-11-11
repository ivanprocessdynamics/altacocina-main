"use client";

import { motion } from "framer-motion";
import React from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, className, direction = 'up', delay = 0 }) => {
  const variants = {
    up: {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 40 },
    },
    down: {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -40 },
    },
    left: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 40 },
    },
    right: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -40 },
    },
    fade: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      variants={variants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
};