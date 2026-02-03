"use client";

import { useEffect } from "react";

export default function BlossomingFlowers() {
  useEffect(() => {
    // Remove "not-loaded" class after page loads for animation
    const timer = setTimeout(() => {
      document.body.classList.remove("not-loaded");
    }, 1000);

    // Add the class on mount
    document.body.classList.add("not-loaded");

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("not-loaded");
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        *,
        *::after,
        *::before {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :root {
          --dark-color: #ffffff;
        }

        body {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          min-height: 100vh;
          background-color: var(--dark-color);
          overflow: hidden;
          perspective: 1000px;
        }

        .night {
          position: fixed;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          filter: blur(0.1vmin);
          background: 
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('/flowers-bg.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .flowers {
          position: relative;
          transform: scale(0.4);  /* Same size as left/right groups */
        }

        /* Flower group positioning - using fixed positioning for proper screen placement */
        .flowers--center {
          /* Center group - stays at default center position */
        }

        .flowers--left {
          position: fixed !important;
          left: 12% !important;  /* Left side of screen */
          bottom: 0 !important;
          transform: scale(0.9);
          z-index: 5;
        }

        .flowers--left-inner {
          position: fixed !important;
          left: 30% !important;  /* Between left and center */
          bottom: 0 !important;
          transform: scale(0.5);
          z-index: 4;
        }

        .flowers--right-inner {
          position: fixed !important;
          right: 30% !important;  /* Between center and right */
          left: auto !important;
          bottom: 0 !important;
          transform: scale(0.5);
          z-index: 4;
        }

        .flowers--right {
          position: fixed !important;
          right: 15% !important;  /* Right side of screen */
          left: auto !important;
          bottom: 0 !important;
          transform: scale(0.9);
          z-index: 5;
        }

        /* TIP: To change flower SIZE, modify the scale() value:
           - scale(0.5) = 50% size (smaller)
           - scale(0.7) = 70% size
           - scale(0.9) = 90% size (current center)
           - scale(1.0) = 100% size (full)
           - scale(1.2) = 120% size (bigger)
        */

        .flower {
          position: absolute;
          bottom: 10vmin;
          transform-origin: bottom center;
          z-index: 10;
          --fl-speed: 0.8s;
        }

        .flower--1 {
          animation: moving-flower-1 4s linear infinite;
        }

        .flower--1 .flower__line {
          height: 70vmin;
          animation-delay: 0.3s;
        }

        .flower--2 {
          left: 50%;
          transform: rotate(20deg);
          animation: moving-flower-2 4s linear infinite;
        }

        .flower--2 .flower__line {
          height: 60vmin;
          animation-delay: 0.6s;
        }

        .flower--3 {
          left: 50%;
          transform: rotate(-15deg);
          animation: moving-flower-3 4s linear infinite;
        }

        .flower--3 .flower__line {
          animation-delay: 0.9s;
        }

        .flower__leafs {
          position: relative;
          animation: blooming-flower 2s backwards;
        }

        .flower__leafs--1 { animation-delay: 1.1s; }
        .flower__leafs--2 { animation-delay: 1.4s; }
        .flower__leafs--3 { animation-delay: 1.7s; }

        .flower__leafs::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          transform: translate(-50%, -100%);
          width: 8vmin;
          height: 8vmin;
          background-color: #ff6b9d;
          filter: blur(10vmin);
        }

        .flower__leaf {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 8vmin;
          height: 11vmin;
          border-radius: 51% 49% 47% 53%/44% 45% 55% 69%;
          background-color: #ffb3c6;
          background-image: linear-gradient(to top, #ff6b9d, #ff8fab);
          transform-origin: bottom center;
          opacity: 0.9;
          box-shadow: inset 0 0 2vmin rgba(255, 255, 255, 0.5);
        }

        .flower__leaf--1 { transform: translate(-10%, 1%) rotateY(40deg) rotateX(-50deg); }
        .flower__leaf--2 { transform: translate(-50%, -4%) rotateX(40deg); }
        .flower__leaf--3 { transform: translate(-90%, 0%) rotateY(45deg) rotateX(50deg); }
        .flower__leaf--4 {
          width: 8vmin;
          height: 8vmin;
          transform-origin: bottom left;
          border-radius: 4vmin 10vmin 4vmin 4vmin;
          transform: translate(0%, 18%) rotateX(70deg) rotate(-43deg);
          background-image: linear-gradient(to top, #ff6b9d, #ffc2d1);
          z-index: 1;
          opacity: 0.8;
        }

        .flower__white-circle {
          position: absolute;
          left: -3.5vmin;
          top: -3vmin;
          width: 9vmin;
          height: 4vmin;
          border-radius: 50%;
          background-color: #ffeb3b;
        }

        .flower__line {
          height: 55vmin;
          width: 1.5vmin;
          background-image: linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent, rgba(255, 255, 255, 0.2)), 
                            linear-gradient(to top, transparent 10%, #4caf50, #66bb6a);
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
          animation: grow-flower-tree 4s backwards;
        }

        .flower__line__leaf {
          --w: 7vmin;
          --h: calc(var(--w) + 2vmin);
          position: absolute;
          top: 20%;
          left: 90%;
          width: var(--w);
          height: var(--h);
          border-top-right-radius: var(--h);
          border-bottom-left-radius: var(--h);
          background-image: linear-gradient(to top, rgba(76, 175, 80, 0.4), #66bb6a);
        }

        .flower__line__leaf--1 { transform: rotate(70deg) rotateY(30deg); }
        .flower__line__leaf--2 { top: 45%; transform: rotate(70deg) rotateY(30deg); }
        .flower__line__leaf--3, .flower__line__leaf--4 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 12%;
          transform: rotate(-70deg) rotateY(30deg);
        }
        .flower__line__leaf--4 { top: 40%; }

        .flower__light {
          position: absolute;
          bottom: 0vmin;
          width: 1vmin;
          height: 1vmin;
          background-color: #ffeb3b;
          border-radius: 50%;
          filter: blur(0.2vmin);
          animation: light-ans 4s linear infinite backwards;
        }

        .flower__light:nth-child(odd) { background-color: #ff8fab; }
        .flower__light--1 { left: -2vmin; animation-delay: 1s; }
        .flower__light--2 { left: 3vmin; animation-delay: 0.5s; }
        .flower__light--3 { left: -6vmin; animation-delay: 0.3s; }
        .flower__light--4 { left: 6vmin; animation-delay: 0.9s; }
        .flower__light--5 { left: -1vmin; animation-delay: 1.5s; }
        .flower__light--6 { left: -4vmin; animation-delay: 3s; }
        .flower__light--7 { left: 3vmin; animation-delay: 2s; }
        .flower__light--8 { left: -6vmin; animation-delay: 3.5s; }

        .grow-ans { animation: grow-ans 2s var(--d) backwards; }

        @keyframes blooming-flower {
          0% { transform: scale(0); }
        }

        @keyframes grow-flower-tree {
          0% { height: 0; }
        }

        @keyframes light-ans {
          0% { opacity: 0; transform: translateY(0vmin); }
          25% { opacity: 1; transform: translateY(-5vmin) translateX(2vmin); }
          50% { opacity: 1; transform: translateY(-15vmin) translateX(-2vmin); }
          75% { opacity: 1; transform: translateY(-20vmin) translateX(2vmin); }
          100% { opacity: 0; transform: translateY(-30vmin); }
        }

        @keyframes moving-flower-1 {
          0%, 100% { transform: rotate(2deg); }
          50% { transform: rotate(-2deg); }
        }

        @keyframes moving-flower-2 {
          0%, 100% { transform: rotate(18deg); }
          50% { transform: rotate(22deg); }
        }

        @keyframes moving-flower-3 {
          0%, 100% { transform: rotate(-18deg); }
          50% { transform: rotate(-12deg); }
        }

        @keyframes grow-ans {
          0% { transform: scale(0); opacity: 0; }
        }

        @keyframes blooming-leaf-right {
          0% { transform-origin: left; transform: rotate(70deg) rotateY(30deg) scale(0); }
        }

        @keyframes blooming-leaf-left {
          0% { transform-origin: right; transform: rotate(-70deg) rotateY(30deg) scale(0); }
        }

        .not-loaded * {
          animation-play-state: paused !important;
        }

        h1.title {
          color: #ffc2d1;
          text-shadow: 0 0 10px rgba(255, 107, 157, 0.5);
          font-family: 'Georgia', serif;
          font-size: 2.5rem;
          text-align: center;
          margin-top: 3%;
          z-index: 100;
          position: relative;
        }

        /* Flower 4 - Lavender Purple (Left) */
        .flower--4 {
          left: -30%;
          transform: rotate(-10deg);
          animation: moving-flower-4 4s linear infinite;
        }

        .flower--4 .flower__line {
          height: 65vmin;
          animation-delay: 0.4s;
        }

        .flower--4 .flower__leafs::after {
          background-color: #b388ff;
        }

        .flower--4 .flower__leaf {
          background-color: #e1bee7;
          background-image: linear-gradient(to top, #9c27b0, #ce93d8);
        }

        .flower--4 .flower__leaf--4 {
          background-image: linear-gradient(to top, #9c27b0, #e1bee7);
        }

        .flower--4 .flower__light:nth-child(odd) {
          background-color: #ce93d8;
        }

        .flower__leafs--4 { animation-delay: 1.3s; }

        @keyframes moving-flower-4 {
          0%, 100% { transform: rotate(-12deg); }
          50% { transform: rotate(-8deg); }
        }

        /* Flower 5 - Coral Orange (Right) */
        .flower--5 {
          left: 80%;
          transform: rotate(15deg);
          animation: moving-flower-5 4s linear infinite;
        }

        .flower--5 .flower__line {
          height: 58vmin;
          animation-delay: 0.5s;
        }

        .flower--5 .flower__leafs::after {
          background-color: #ff8a65;
        }

        .flower--5 .flower__leaf {
          background-color: #ffccbc;
          background-image: linear-gradient(to top, #ff5722, #ff8a65);
        }

        .flower--5 .flower__leaf--4 {
          background-image: linear-gradient(to top, #ff5722, #ffccbc);
        }

        .flower--5 .flower__light:nth-child(odd) {
          background-color: #ff8a65;
        }

        .flower__leafs--5 { animation-delay: 1.5s; }

        @keyframes moving-flower-5 {
          0%, 100% { transform: rotate(13deg); }
          50% { transform: rotate(17deg); }
        }

        /* Grass Styles */
        .grass-container {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 15vmin;
          z-index: 5;
          overflow: hidden;
        }

        .grass {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .grass-blade {
          position: absolute;
          bottom: 0;
          width: 0.8vmin;
          background: linear-gradient(to top, #2d5016, #4caf50, #66bb6a);
          border-radius: 50% 50% 0 0;
          transform-origin: bottom center;
          animation: sway 3s ease-in-out infinite;
        }

        .grass-blade::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: -0.3vmin;
          width: 0.6vmin;
          height: 70%;
          background: linear-gradient(to top, #1b5e20, #388e3c);
          border-radius: 50% 50% 0 0;
          transform: rotate(-15deg);
          transform-origin: bottom center;
        }

        .grass-blade::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: -0.3vmin;
          width: 0.6vmin;
          height: 60%;
          background: linear-gradient(to top, #1b5e20, #43a047);
          border-radius: 50% 50% 0 0;
          transform: rotate(15deg);
          transform-origin: bottom center;
        }

        @keyframes sway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        .grass-blade:nth-child(odd) {
          animation-delay: -0.5s;
        }

        .grass-blade:nth-child(3n) {
          animation-duration: 2.5s;
        }

        .grass-blade:nth-child(4n) {
          animation-delay: -1s;
        }
      `}</style>

      <div className="night">
      </div>

      <div className="flowers">
        {/* Flower 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {/* Flower 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {/* Flower 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {/* Flower 4 - Lavender Purple (Left) */}
        <div className="flower flower--4">
          <div className="flower__leafs flower__leafs--4">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {/* Flower 5 - Coral Orange (Right) */}
        <div className="flower flower--5">
          <div className="flower__leafs flower__leafs--5">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
      </div>

      {/* LEFT Flower Group - Complete 5-flower copy positioned far left */}
      <div className="flowers flowers--left">
        {/* Flower 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
        {/* Flower 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
        {/* Flower 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
        {/* Flower 4 - Lavender Purple */}
        <div className="flower flower--4">
          <div className="flower__leafs flower__leafs--4">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
        {/* Flower 5 - Coral Orange */}
        <div className="flower flower--5">
          <div className="flower__leafs flower__leafs--5">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
      </div>

      {/* LEFT INNER Flower Group - Between left and center */}
      <div className="flowers flowers--left-inner">
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
          </div>
        </div>
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
          </div>
        </div>
        <div className="flower flower--4">
          <div className="flower__leafs flower__leafs--4">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
          </div>
        </div>
      </div>

      {/* RIGHT INNER Flower Group - Between center and right */}
      <div className="flowers flowers--right-inner">
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
          </div>
        </div>
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
          </div>
        </div>
        <div className="flower flower--5">
          <div className="flower__leafs flower__leafs--5">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
          </div>
        </div>
      </div>

      {/* RIGHT Flower Group - Complete 5-flower copy positioned far right */}
      <div className="flowers flowers--right">
        {/* Flower 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
        {/* Flower 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
        {/* Flower 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
        {/* Flower 4 - Lavender Purple */}
        <div className="flower flower--4">
          <div className="flower__leafs flower__leafs--4">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
        {/* Flower 5 - Coral Orange */}
        <div className="flower flower--5">
          <div className="flower__leafs flower__leafs--5">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
      </div>

      {/* Grass */}
      <div className="grass-container">
        <div className="grass">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="grass-blade"
              style={{
                left: `${(i * 3.5) + 1}%`,
                height: `${8 + (i % 7) + 3}vmin`,
                animationDelay: `${-(i * 0.1)}s`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
