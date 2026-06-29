'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  once = true,
  ...props
}: ScrollRevealProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};
