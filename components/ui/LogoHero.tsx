'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

export const LogoHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-[200px]">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-blue-300/20 blur-3xl transform scale-75 opacity-75" />
      
      {/* Main logo container */}
      <motion.div
        className="relative cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          scale: isHovered ? 1.05 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-blue-500"
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 0.3
            }
          }}
        />

        {/* Middle pulsing ring */}
        <motion.div
          className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1,
            opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Inner white glow */}
        <motion.div
          className="absolute -inset-1 rounded-full bg-white opacity-30 blur-sm"
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Logo container with glass effect */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20 shadow-xl">
          <img
            src="/logo.png"
            alt="Logo"
            className="relative h-24 w-24 object-contain z-10 filter brightness-0 invert"
            style={{
              filter: 'brightness(0) invert(1)'
            }}
          />
          
          {/* Sparkle effects */}
          {isHovered && (
            <>
              <motion.div
                className="absolute top-0 right-0 h-2 w-2 bg-white rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: Math.random()
                }}
              />
              <motion.div
                className="absolute bottom-2 left-2 h-2 w-2 bg-white rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: Math.random()
                }}
              />
              <motion.div
                className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: Math.random()
                }}
              />
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LogoHero;