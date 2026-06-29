'use client';

import React from 'react';

export const TechGridBackground = () => {
  return (
    <>
      <div className="tech-grid-overlay" />
      <style jsx global>{`
        /* Premium Sharp Technology Grid Container */
        .tech-grid-overlay {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;

          /* High-visibility multi-color grid lines rendering utilizing the core matching accents */
          background-image:
            linear-gradient(to right, rgba(6, 182, 212, 0.5) 1px, transparent 1px),     /* Cyan */
            linear-gradient(to bottom, rgba(236, 72, 153, 0.5) 1px, transparent 1px),   /* Deep Pink */
            linear-gradient(to right, rgba(245, 158, 11, 0.4) 2px, transparent 2px),    /* Vivid Amber */
            linear-gradient(to bottom, rgba(168, 85, 247, 0.4) 2px, transparent 2px),  /* Purple */
            linear-gradient(to right, rgba(16, 185, 129, 0.3) 1px, transparent 1px),   /* Emerald Green */
            linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px),   /* Royal Blue */
            linear-gradient(to right, rgba(244, 63, 94, 0.25) 2px, transparent 2px),    /* Coral Red */
            linear-gradient(to bottom, rgba(99, 102, 241, 0.25) 2px, transparent 2px);  /* Electric Indigo */

          /* Multi-density geometric frequency patterns */
          background-size: 30px 30px, 30px 30px, 120px 120px, 120px 120px, 60px 60px, 60px 60px, 180px 180px, 180px 180px;
          background-repeat: repeat;

          /* Linear Mask Travel Animation Integration */
          animation: gridSweep 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Precise linear sweeping mask travel vector mechanics (Bottom-Left to Top-Right) */
        @keyframes gridSweep {
          0% {
            -webkit-mask-image: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0) 30%);
            mask-image: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0) 30%);
          }
          50% {
            -webkit-mask-image: linear-gradient(45deg, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 80%);
            mask-image: linear-gradient(45deg, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 80%);
          }
          100% {
            -webkit-mask-image: linear-gradient(45deg, rgba(0,0,0,0) 70%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,1) 100%);
            mask-image: linear-gradient(45deg, rgba(0,0,0,0) 70%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,1) 100%);
          }
        }
      `}</style>
    </>
  );
};
