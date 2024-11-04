import PriceList from "@/components/services/PriceList";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/ui/Footer";
import { FaHome, FaUser } from "react-icons/fa";



export default function Pricelist() {
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
          <PriceList />
          <Footer />
        </div>
      </main>
    );
  }