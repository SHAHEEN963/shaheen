"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useAnimate,
  useMotionValue,
  useSpring,
} from "motion/react";

function SplashScreen({ onLoadingComplete }) {
  const [loading, setLoading] = useState(0);
  const [scope, animate] = useAnimate();
  const heightMotion = useMotionValue('0%');

  useEffect(() => {
    const animation = animate(heightMotion, '100%', {
      duration: 2,
      ease: [0.77, 0, 0.175, 1],
      onUpdate: (latest) => {
        // Extract numeric value from "XX%"
        setLoading(Math.round(parseFloat(latest)));
      },
      onComplete: () => {
        setTimeout(onLoadingComplete, 100);
      }
    });

    return () => animation.stop();
  }, [animate, heightMotion, onLoadingComplete]);
  return (
    <div className="bg-[#f2ddb0] h-screen w-screen">
      <div className="relative left-1/2 w-1 h-[98%] bg-[#f2ddb0]">
        <motion.div
          initial={{ height: 8 }}
          animate={{ height: `${loading + 2}%` }}
          style={{ originY: 1, maxHeight: "90%" }}
          className="absolute bottom-0 w-full origin-bottom rounded-md bg-[#a35c6a]"
        >
          <span className="absolute -top-6 -left-1 text-[#a35c6a] md:text-xl text-lg font-semibold">
            {loading}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default SplashScreen;
