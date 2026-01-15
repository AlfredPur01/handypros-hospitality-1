import { useState } from "react";
import { motion } from "framer-motion";
import { Car, CookingPot, House } from 'lucide-react'
import spa from "@/assets/spa.jpg";
import house from "@/assets/house.jpg";
import offRoad from "@/assets/carousel/off-road.jpg";
import masked from "@/assets/masked.png";
import { FaHandsBubbles } from "react-icons/fa6";

const options = ["Accomodation", "Restaurant", "Spa", "Book a Ride"];

const ExploreOptions = () => {
  const [activeOption, setActiveOption] = useState(2); // Spa is default

  return (
    <section className="bg-white px-6 md:px-14 py-10 mt-10">
      {/* Left - Options */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="">
            <span className="text-2xl font-justAnotherHand">Vacation Agency</span><br />
            <h1 className="font-extrabold text-xl md:text-4xl font-barlow">
              Explore Options
            </h1>
          </div>
          <input type="email" placeholder='Enter your email' name="email" id="email" className='border-b-gray-700 border-b text-[#040404] w-full md:w-142.5 pb-2.5 focus:outline-none text-3xl font-barlow' />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7 mt-10">

          {/* Left */}
          <div className="px-0 md:px-10 flex flex-col">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 mb-5">
              <ul className='space-y-2 font-justAnotherHand text-3xl'>
                <li className="flex gap-2 items-center"><span><House className='h-7 w-7' /></span>Accomodation</li>
                <li className="flex gap-2 items-center"><span><CookingPot /></span>Restaurant</li>
                <li className="flex gap-2 items-center"><span><FaHandsBubbles /></span>Spa</li>
                <li className="flex gap-2 items-center"><span><Car /></span>Book a Ride</li>
              </ul>
              <img src={spa} alt="Spa" className='object-cover h-[200px] w-98  rounded-t-2xl' />
              <div className="text-xl md:text-4xl font-black font-barlow">
                <p><span className="text-red-600">84K</span> Happy Adventures</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_3fr] gap-6 mt-3">
              <img src='/group-friends-arab-restaurant.jpg' alt="Friends" className='object-cover rounded-t-2xl h-32 w-full' />
              <img src={house} alt="House" className='object-cover rounded-t-2xl h-40 w-full' />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 md:pr-10 pr-0">
            <img src={offRoad} alt="Off Road" className='object-cover rounded-t-md h-64 w-full' />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
              <div className="">
                <img src={masked} alt="" className='rounded-full' width={90} height={90} />
              </div>
              <p className="text-sm text-center sm:text-left font-Barlow">No one shall be subjected to arbitrary arrest or detention, arrest or exile.Everyone is entitled in full detention.</p>
            </div>
          </div>
        </div>


      </motion.div>
    </section>
  );
};

export default ExploreOptions;