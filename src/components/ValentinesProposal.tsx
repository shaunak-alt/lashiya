import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";
import Image from "next/image";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

// 36 images
const images = [
  "/valentine-bg-photos/1.avif",
  "/valentine-bg-photos/2.avif",
  "/valentine-bg-photos/3.avif",
  "/valentine-bg-photos/4.avif",
  "/valentine-bg-photos/5.avif",
  "/valentine-bg-photos/6.avif",
  "/valentine-bg-photos/7.avif",
  "/valentine-bg-photos/8.avif",
  "/valentine-bg-photos/9.avif",
  "/valentine-bg-photos/10.avif",
  "/valentine-bg-photos/11.avif",
  "/valentine-bg-photos/12.avif",
  "/valentine-bg-photos/13.avif",
  "/valentine-bg-photos/14.avif",
  "/valentine-bg-photos/15.avif",
  "/valentine-bg-photos/16.avif",
  "/valentine-bg-photos/17.avif",
  "/valentine-bg-photos/18.avif",
  "/valentine-bg-photos/19.avif",
  "/valentine-bg-photos/20.avif",
  "/valentine-bg-photos/21.avif",
  "/valentine-bg-photos/22.avif",
  "/valentine-bg-photos/23.avif",
  "/valentine-bg-photos/24.avif",
  "/valentine-bg-photos/25.avif",
  "/valentine-bg-photos/26.avif",
  "/valentine-bg-photos/27.avif",
  "/valentine-bg-photos/28.avif",
  "/valentine-bg-photos/29.avif",
  "/valentine-bg-photos/30.avif",
  "/valentine-bg-photos/31.avif",
  "/valentine-bg-photos/32.avif",
  "/valentine-bg-photos/33.avif",
  "/valentine-bg-photos/34.avif",
  "/valentine-bg-photos/35.avif",
  "/valentine-bg-photos/36.avif",
];

export default function ValentinesProposal() {
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState<{
    top: string;
    left: string;
  } | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const getRandomPosition = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  useEffect(() => {
    if (step < 2) {
      // Change step after 5 seconds
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleYesClick = () => {
    setShowFireworks(true);
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h2
            key="step-0"
            className={`text-5xl font-semibold mb-4 ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Congratulations Babyy! You have completed the game. You are so frickin smart!
          </motion.h2>
        )}
        {step === 1 && (
          <motion.h2
            key="step-1"
            className={`text-5xl font-semibold mb-4 ${playfairDisplay.className}`}
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            I have a question for you!
          </motion.h2>
        )}
        {step === 2 && (
          <motion.div
            key="step-2"
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            {/* Image Grid Background */}
            <div className="absolute inset-0 grid grid-cols-6 opacity-20">
              {images.slice(0, 36).map((src, index) => (
                <div key={index} className="relative h-full">
                  <Image
                    src={src}
                    alt={`Memory ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <h2
              className={`text-6xl font-semibold mb-8 ${playfairDisplay.className}`}
            >
              Will you be my Valentine Lashiya Baby?
            </h2>
            <Image
              src="/sad_hamster.png"
              alt="Sad Hamster"
              width={200}
              height={200}
            />
            <div className="flex space-x-4 mt-10">
              <button
                className="px-8 py-3 text-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleYesClick}
              >
                Yes, I will! 🥰
              </button>
              <button
                className="px-8 py-3 text-xl font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-95 transition-all duration-300 shadow-lg"
                style={
                  position
                    ? {
                      position: "absolute",
                      top: position.top,
                      left: position.left,
                    }
                    : {}
                }
                onMouseEnter={() => setPosition(getRandomPosition())}
              >
                No, I won&apos;t 😢
              </button>
            </div>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step-3"
            className={`text-4xl font-semibold mb-4 flex flex-col justify-center items-center ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Thank you for accepting, I love you. 💕
            <Image
              src="/hamster_jumping.gif"
              alt="Hamster Feliz"
              width={200}
              height={200}
              unoptimized
            />
            <Link href="/flowers" className="z-50 relative">
              <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-rose-400 to-pink-500 rounded-xl hover:from-rose-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Please don&apos;t click me
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {showFireworks && (
        <div className="absolute w-full h-full">
          <Fireworks
            options={{
              autoresize: true,
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}
    </div>
  );
}