import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Profile = () => {
    return (
        <div className="relative w-full flex flex-col items-center justify-center pt-32">
            {/* Grid Background */}
            <div className="absolute inset-0 h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] z-0">
                <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
            </div>

            {/* Profile Content */}
            <div className="relative z-10 flex flex-col items-center">
                <img
                    src="/aw1.jpg"
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h2 className="text-2xl font-bold text-white mt-2">Ahmad Vicko</h2>
                <p className="text-[#b3b3b3]">Freelance Photographer</p>
                <div className="flex items-center mt-4 space-x-4">
                    <a href="https://www.instagram.com/vickoawaw/profilecard/?igsh=bHZhZmd2Mm5oaXR3"
                        className="text-[#b3b3b3] hover:text-white transition duration-200"
                        target="_blank"  // Open link in a new tab
                        rel="noopener noreferrer"  // Security measure
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100036887863390&mibextid=LQQJ4d"
                        className="text-[#b3b3b3] hover:text-white transition duration-200"
                        target="_blank"  // Open link in a new tab
                        rel="noopener noreferrer"  // Security measure
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://www.tiktok.com/@anakpapabaikhati?_t=8rL0P1Oc1dR&_r=1"
                        className="text-[#b3b3b3] hover:text-white transition duration-200"
                        target="_blank"  // Open link in a new tab
                        rel="noopener noreferrer"  // Security measure
                    >
                        <FaTiktok size={24} />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Profile;
