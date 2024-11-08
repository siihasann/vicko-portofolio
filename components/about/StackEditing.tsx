import React from 'react';

const StackEditing = () => {
  const technologies = [
    { name: 'Nuxt', icon: '/icons/nuxt.svg', color: 'text-emerald-400' },
    { name: 'Vue', icon: '/icons/vue.svg', color: 'text-emerald-400' },
    { name: 'Motion', icon: '/icons/motion.svg', color: 'text-pink-500' },
    { name: 'Tailwind', icon: '/icons/tailwind.svg', color: 'text-blue-400' },
    { name: 'Vercel', icon: '/icons/vercel.svg', color: 'text-white' },
    { name: 'Prisma', icon: '/icons/prisma.svg', color: 'text-white' },
    { name: 'Planetscale', icon: '/icons/planetscale.svg', color: 'text-blue-600' },
    { name: 'NextJs', icon: '/icons/nextjs.svg', color: 'text-pink-500' },
    { name: 'Express', icon: '/icons/express.svg', color: 'text-pink-400' },
    { name: 'Notion', icon: '/icons/notion.svg', color: 'text-white' },
    { name: 'Ion', icon: '/icons/ion.svg', color: 'text-orange-500' },
    { name: 'Postman', icon: '/icons/postman.svg', color: 'text-blue-500' },
    { name: '1Password', icon: '/icons/1password.svg', color: 'text-blue-400' },
    { name: 'Outline', icon: '/icons/outline.svg', color: 'text-white' },
    { name: 'Figma', icon: '/icons/figma.svg', color: 'text-purple-400' },
    { name: 'Photoshop', icon: '/icons/photoshop.svg', color: 'text-blue-500' },
    { name: 'Illustrator', icon: '/icons/illustrator.svg', color: 'text-orange-500' },
    { name: 'Lightroom', icon: '/icons/lightroom.svg', color: 'text-blue-600' }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Top horizontal line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12" />

      <div className="mb-8">
        <h2 className="text-4xl font-serif italic text-white mb-4">Stack</h2>
        <p className="text-gray-400">
          Some of the software and technologies I use on a daily basis
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
          >
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            
            {/* Border with glow effect */}
            <div className="absolute inset-0 rounded-xl border dark:bg-black-100 bg-zinc-900 transition-shadow duration-300 group-hover:shadow-[0_0_2rem_-1rem_rgba(255,255,255,0.1)]" />
            
            {/* Content container */}
            <div className="relative aspect-square p-4 rounded-xl transition-all duration-300 group-hover:scale-105">
              <div className="w-8 h-8 relative flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Hover tooltip */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white text-sm px-2 py-1 rounded whitespace-nowrap border border-gray-800">
                  {tech.name}
                </div>
              </div>
            </div>

            {/* Light effect lines with animation */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent group-hover:via-gray-500 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent group-hover:via-gray-500 transition-colors duration-300" />
              <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-gray-700 to-transparent group-hover:via-gray-500 transition-colors duration-300" />
              <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-gray-700 to-transparent group-hover:via-gray-500 transition-colors duration-300" />
            </div>

            {/* Corner dots */}
            <div className="absolute top-0 left-0 w-1 h-1 bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 w-1 h-1 bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Bottom horizontal line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    </div>
  );
};

export default StackEditing;