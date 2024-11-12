"use client";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerate";
import { motion } from "framer-motion";
import { useState } from "react";

const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen w-full pb-20 pt-36">
      {/* Spotlight Effects */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About
            </motion.h1>
            <motion.p 
              className="text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Beberapa kata tentang saya
            </motion.p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Container */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div
                className="aspect-[4/3] relative cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Black and White Image */}
                <img
                  src="/aw1.jpg" 
                  alt="Profile"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                  } filter grayscale`}
                />
                {/* Colored Image */}
                <img
                  src="/aw1.jpg" 
                  alt="Profile Colored"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Intro</h2>
              
              <TextGenerateEffect 
                words="I'm Ahmad Vicko Freelance Fotografer based in Gentan, Surakarta"
                className="text-xl mb-4"
              />

              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Saya memulai dunia fotografi dari tahun 2021, saya memulai semuanya secara otodidak dan sudah mengimplementasikan beberapa jenis teknik fotografi dengan mengikuti kelas online dan beberapa kegiatan hunting bersama.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Selain fotografi saja juga membuka jasa desain. Seperti desain kaos, desain banner, desain undangan lipat, undangan online, cetak stiker, desain menu.
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                Jika kalian mencari orang yang seseorang yang dapat bekerja sama, mengerjakan proyek terbaik kalian, hubungi saya dan mari membuat sesuatu yang lebih menarik.
              </p>

              {/* Signature/Logo */}
              <div className="pt-6">
                <motion.img
                  src="/logo.png" // Ganti dengan path signature/logo Anda
                  alt="Signature"
                  className="h-16 w-auto opacity-80 filter brightness-0 invert"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;