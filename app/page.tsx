import Grid from "@/components/home/Grid";
import Hero from "@/components/home/Hero";
import RecentProject from "@/components/home/RecentProject";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import { FaHome, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {name: 'Home', link: '/', icon: <FaHome />},
            { name: 'About', link: '/about', icon: <FaUser /> },
            {name: 'Pricelist', link: '/price', icon:  <FaHome/>},
            {name: 'Gallery', link: '/gallery', icon: <FaHome />},
          ]}
        />
        <Hero />
        <Grid />
        <RecentProject />
        <Testimonial />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
