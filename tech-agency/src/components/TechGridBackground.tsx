'use client';

import React, { useEffect, useRef } from 'react';

export const TechGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const gridSize = 40;
    const particles: { x: number; y: number; vx: number; vy: number; life: number }[] = [];

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Grid
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.05)';
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }

      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Animate subtle "tech" particles along lines
      if (Math.random() > 0.9) {
        const isVertical = Math.random() > 0.5;
        if (isVertical) {
            const x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
            particles.push({ x, y: 0, vx: 0, vy: 2, life: 1 });
        } else {
            const y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
            particles.push({ x: 0, y, vx: 2, vy: 0, life: 1 });
        }
      }

      ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillRect(p.x - 1, p.y - 1, 3, 3);

        if (p.x > width || p.y > height) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  );
};
