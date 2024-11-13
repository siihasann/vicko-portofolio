import React from 'react';
import { socialMedia } from '@/data';
import HomeContactButton from './ContactButton';

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading text-[30px] md:text-5xl lg:text-6xl lg:max-w-[45vw]">
          Wujudkan proyek terbaik <span className="text-purple">kamu</span>, mari membuat sesuatu yang menarik.
        </h1>
        <p className="text-white-200 md:mt-10 mt-5 text-center">
          Hubungi saya hari ini dan mari kita bahas bagaimana saya dapat membantu Anda mencapai tujuan Anda..
        </p>
        <HomeContactButton />
      </div>

      <div className="flex mt-10 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-3">
          Copyright © 2024 Ahmad Vicko
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}  // Make the icon clickable
              target="_blank"  // Open link in a new tab
              rel="noopener noreferrer"  // Security measure
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="social-media-icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
