import React from 'react';

const HomeAbout = () => {
    return (
        <div className='py-10 px-4 sm:px-6 lg:px-8'>
            <section className="bg-[#0F172A] py-24 px-4 sm:px-6 lg:px-8 rounded-lg shadow-xl mx-auto w-full max-w-4xl">
                {/* About Me Section */}
                <div className="about-me text-center mb-12 pt-8">
                    <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">ABOUT ME</h2>
                    <p className="text-[#CBD5E1] text-lg leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                        Passionate about photography and design, skilled in camera operation and photo editing software. Eager to learn and adapt to new challenges in the creative field.
                    </p>
                </div>

                {/* Hard Skills and Soft Skills */}
                <div className="skills grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="hard-skills p-6 border border-[#475569] rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-[#1E293B]">
                        <h3 className="text-xl font-semibold mb-3 text-[#E2E8F0]">HARDSKILL</h3>
                        <ul className="text-[#CBD5E1] list-disc list-inside space-y-2">
                            <li>Camera Basics (Especially Canon)</li>
                            <li>Photography Technique Basics</li>
                            <li>Photography Equipment</li>
                        </ul>
                    </div>
                    <div className="soft-skills p-6 border border-[#475569] rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-[#1E293B]">
                        <h3 className="text-xl font-semibold mb-3 text-[#E2E8F0]">SOFTSKILL</h3>
                        <ul className="text-[#CBD5E1] list-disc list-inside space-y-2">
                            <li>Good in presentation</li>
                            <li>Attractive personality</li>
                            <li>Adapt quickly</li>
                            <li>Eager to learn new things</li>
                        </ul>
                    </div>
                </div>

                {/* Skill Icons */}
                <div className="my-skill text-center">
                    <h3 className="text-xl font-semibold mb-6 text-[#E2E8F0]">MY SKILL</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <img
                            src="/coreldraw-icon.png"
                            alt="CorelDraw"
                            className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110 hover:rotate-6"
                        />
                        <img
                            src="/lightroom-icon.png"
                            alt="Lightroom"
                            className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110 hover:rotate-6"
                        />
                        <img
                            src="/photoshop-icon.png"
                            alt="Photoshop"
                            className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110 hover:rotate-6"
                        />
                        <img
                            src="/snapseed-icon.png"
                            alt="Snapseed"
                            className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110 hover:rotate-6"
                        />
                        <img
                            src="/canva-icon.png"
                            alt="Canva"
                            className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110 hover:rotate-6"
                        />
                        <img
                            src="/illustrator-icon.png"
                            alt="Illustrator"
                            className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110 hover:rotate-6"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeAbout;
