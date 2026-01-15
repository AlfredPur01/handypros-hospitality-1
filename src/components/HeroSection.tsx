import { motion } from "framer-motion";
import { Search, User } from "lucide-react";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import heroBeach from "@/assets/hero-beach.png";
import divider from "@/assets/Divider.png"

const HeroSection = () => {
  return (
    <section className="px-4 md:px-10 min-h-screen pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hidden md:grid grid-cols-[7fr_1fr] h-dvh  md:rounded-l-[30px] md:min-h-screen" style={{ backgroundImage: `url(/bg.png)` }}>
            <div className="flex flex-col justify-center items-center px-4 h-full">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-[#30E7D5] text-sm md:text-3xl font-justAnotherHand">Vacation Agency</h1>
              </motion.h1>
              <div className="search text-center mt-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h1 className="text-white text-3xl md:text-5xl mt-4 font-semibold font-Outfit">Find Next Place to Visit</h1>
                </motion.h1>
                <p className='text-white mt-2 text-3xl md:text-4xl font-justAnotherHand'>Choose from thousands of organized aAdventures</p>

                {/* Search Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="search-bar bg-white mt-6 flex justify-center items-center rounded-full md:w-full max-w-md px-2">
                    <div className=""></div>
                    <div className="flex justify-between items-center">
                      <input type="text" placeholder='Search your destination...' className='rounded-l-full px-6 py-4 w-96 focus:outline-none' />
                      <div className="search-icon flex justify-self-end">
                        <Search size={36} className='bg-[#30E7D5] rounded-full p-2 cursor-pointer' />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Users */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="text-white mt-10 flex flex-wrap justify-center items-center gap-3">
                  <User size={26} className='inline-block mr-2' />
                  <span className='font-bold'>50k+ Happy Travelers</span>
                  <span className='ml-2'><CiFacebook size={26} /></span>
                  <span className='ml-2'><FaXTwitter size={22} /></span>
                  <span className='ml-2'><FaBehance size={26} /></span>
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <img src={divider} alt="" className="divider hidden relative left-20 md:flex justify-end h-dvh" />
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative md:static bg-cover bg-center h-screen md:h-full w-full md:rounded-r-[30px]" style={{ backgroundImage: `url(${heroBeach})` }}>

            {/* Overlay */}
            <div className="absolute md:hidden inset-0 bg-black/60"></div>
            {/* <img src={Rightbg} alt="" className="object-cover -z-10 h-full w-full rounded-r-[30px]" /> */}

            {/* Content */}
            <div className="md:hidden z-10 relative flex flex-col justify-between px-4 py-8 h-full">
              <h1 className="text-[#30E7D5] text-5xl md:text-4xl font-justAnotherHand">Vacation Agency</h1>
              <div className="search text-center mt-4">
                <h1 className="text-white text-3xl md:text-5xl mt-4 font-semibold font-Outfit">Find Next Place to Visit</h1>
                <p className='text-white mt-2 text-3xl font-justAnotherHand'>Choose from thousands of organized aAdventures</p>

                {/* Search Bar */}
                <div className="search-bar bg-white mt-6 flex justify-center items-center rounded-full w-full max-w-md px-2">
                  <div className=""></div>
                  <div className="flex justify-between items-center">
                    <input type="text" placeholder='Search your destination...' className='rounded-l-full px-6 py-4 w-auto focus:outline-none' />
                    <div className="search-icon flex items-center justify-center">
                      <Search size={36} className='bg-[#30E7D5] rounded-full p-2 cursor-pointer' />
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Users */}
              <div className="text-white mt-10 flex flex-wrap justify-start items-center gap-3">
                <User size={26} className='inline-block mr-2' />
                <span className='font-bold text-lg'>50k+ Happy Travelers</span>
                <span className='ml-2'><CiFacebook size={26} /></span>
                <span className='ml-2'><FaXTwitter size={26} /></span>
                <span className='ml-2'><FaBehance size={26} /></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
