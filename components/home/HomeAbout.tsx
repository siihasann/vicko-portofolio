import React from 'react';

const HomeAbout = () => {
    return (
        <div className="py-36 px-4 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-4xl">
                {/* About Me Section */}
                <div className="about-me text-center mb-12 pt-8 border-b border-gray-600 pb-8">
                    <h2 className="text-3xl font-bold mb-4 text-purple">ABOUT ME</h2>
                    <p className="text-white-200 text-lg leading-relaxed max-w-3xl mx-auto">
                    Jika kalian mencari orang yang seseorang yang dapat bekerja sama, mengerjakan proyek terbaik kalian, hubungi saya dan mari membuat sesuatu yang lebih menarik.
                    </p>
                    {/* Baca Selengkapnya Button */}
                    {/* Baca Selengkapnya Button */}
                    <a 
                        href="/about"  // Ganti dengan URL halaman about Anda
                        className="mt-3 inline-flex items-center px-6  text-lg font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 group"
                    >
                        <span className="mr-2">Baca Selengkapnya</span>
                        <svg
                            className="w-5 h-5 transform group-hover:translate-x-2 transition-all duration-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                {/* Hard Skills and Soft Skills */}
                <div className="skills grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="hard-skills p-6 border border-gray-300 rounded-lg transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold mb-3 text-purple">HARDSKILL</h3>
                        <ul className="text-white-200 list-disc list-inside space-y-2">
                            <li>Camera Basics (Especially Canon)</li>
                            <li>Photography Technique Basics</li>
                            <li>Photography Equipment</li>
                        </ul>
                    </div>
                    <div className="soft-skills p-6 border border-gray-300 rounded-lg transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold mb-3 text-purple">SOFTSKILL</h3>
                        <ul className="text-white-200 list-disc list-inside space-y-2">
                            <li>Good in presentation</li>
                            <li>Attractive personality</li>
                            <li>Adapt quickly</li>
                            <li>Eager to learn new things</li>
                        </ul>
                    </div>
                </div>

                {/* Skill Icons */}
                <div className="my-skill text-center border-t border-gray-300 pt-8">
                    <h3 className="text-xl font-semibold mb-6 text-purple">MY SKILL</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {["coreldraw", "lightroom", "photoshop", "snapseed", "canva", "illustrator"].map((skill, index) => (
                            <img
                                key={index}
                                src={`/${skill}-icon.png`}
                                alt={skill.charAt(0).toUpperCase() + skill.slice(1)}
                                className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110 hover:rotate-6"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeAbout;
