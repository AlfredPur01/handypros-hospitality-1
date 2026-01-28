import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { MdOutlineDoubleArrow } from "react-icons/md"

const Footer = () => {
  return (
    <div className='mt-10'>
      <footer className="bottom-0 w-full bg-cover bg-center" style={{ backgroundImage: `url("/footerbg.jpg")` }}>
        <div className="footer-top flex flex-col md:flex-row justify-between items-center gap-6 mb-10 pr-24">
          <img src="/Footer.png" alt="Footer Image" className="object-cover w-full md:w-1/2" />
          <div className="p-5 flex flex-col justify-center text-center md:text-left">
            <div className="logo flex items-center justify-center md:justify-start">
              <img src={logo} alt="logo" width={40} height={40} className='' />
              <h3 className='text-base ml-2 text-white'>HandyPros Hospitality</h3>
            </div>
            <h2 className="text-white font-black md:text-3xl text-2xl">
              Find Your Perfect Stay with HandyPros Hospitality
            </h2>

            <div className="flex flex-col md:flex-row justify-between items-center">
              <button className="px-4 py-4 mx-2 my-4 text-center bg-[#30E7D5] text-black rounded-md w-full md:w-1/4 font-bold hover:cursor-pointer mt-8">
                EXPLORE STAYS
              </button>

              <p className="text-white font-bold text-sm">Call +234 809 8493357 or Chat Now.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_2fr] gap-6 px-6 md:px-24 mt-16">

          {/* Packages */}
          <div className="space-y-6">
            <p className="font-bold text-white text-xl">Accommodations</p>
            <ul className="space-y-6">
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <MdOutlineDoubleArrow className='text-[#30E7D5]' />
                <span>Luxury Apartments</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <MdOutlineDoubleArrow className='text-[#30E7D5]' />
                <span>Beachfront Homes</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <MdOutlineDoubleArrow className='text-[#30E7D5]' />
                <span>Serviced Villas</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <MdOutlineDoubleArrow className='text-[#30E7D5]' />
                <span>Short-Stay Rentals</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="bg-gray-800 rounded-3xl py-5 pl-5 space-y-6">
            <div>
              <h2 className="text-2xl text-white font-bold">3.2K+</h2>
              <p className="text-sm text-gray-400 font-bold">Successful Bookings</p>
            </div>

            <div>
              <h2 className="text-2xl text-white font-bold">120+</h2>
              <p className="text-sm text-gray-400 font-bold">Premium Properties</p>
            </div>

            <div>
              <h2 className="text-2xl text-white font-bold">98%</h2>
              <p className="text-sm text-gray-400 font-bold">Guest Satisfaction</p>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <p className="font-bold text-white text-xl">Support</p>
            <ul className="space-y-6">
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Email Support</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Live Chat</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>FAQs</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Phone Support</span>
              </li>
            </ul>
          </div>

          {/* Terms */}
          <div className="space-y-6">
            <p className="font-bold text-white text-xl">Terms</p>
            <ul className="space-y-6">
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Terms of Use</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Copyright Notice</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Refund Policy</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Privacy Policy</span>
              </li>
            </ul>
          </div>
          {/* testimonial Input */}
          <div className="space-y-8">
            <p className="font-bold text-white text-xl">
              Share your stay experience
            </p>
            <p className="text-gray-400 font-semibold">
              Tell others how HandyPros made your stay comfortable and memorable.
            </p>
            <div className="flex w-full justify-between bg-gray-500 rounded-lg overflow-hidden mt-3">
              <input type="text" placeholder='Write your experience here...' className=' outline-none focus:outline-none bg-transparent text-white w-3/4 pl-2.5' />
              <button className="px-4 py-4 text-center bg-[#22bbbbd5] text-black rounded-r-lg w-1/4 font-bold hover:cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-20 mx-5 py-8 border-t-gray-600 border-t text-center text-white font-bold text-sm">©2025 HandyPros Hospitality | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
