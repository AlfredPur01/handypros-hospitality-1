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
              <h3 className='text-base ml-2 text-white'>HandPros Hospitality</h3>
            </div>
            <h2 className="text-white font-black md:text-3xl text-2xl">
              Bookmark in Your Own Way, With
              HandyPros Our Travel Agency
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <button className="px-4 py-4 mx-2 my-4 text-center bg-[#30E7D5] text-black rounded-md w-full md:w-1/4 font-bold hover:cursor-pointer mt-8">
                EXPLORE TRIP
              </button>
              <p className="text-white font-bold text-sm">Call +234 809 8493357 or Chat Now.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_2fr] gap-6 px-6 md:px-24 mt-16">

          {/* Packages */}
          <div className="space-y-6">
            <p className="font-bold text-white text-xl">Packages</p>
            <ul className="space-y-6">
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Morocco </span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>London Express</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Chao Praya</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Japan and Barley</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="bg-gray-800 rounded-3xl py-5 pl-5 space-y-6">
            <div className="">
              <h2 className="text-2xl text-white font-bold">3.2K+</h2>
              <p className="text-sm text-gray-400 font-bold">Bookings</p>
            </div>
            <div className="">
              <h2 className="text-2xl text-white font-bold">12K</h2>
              <p className="text-sm text-gray-400 font-bold">Total Travels</p>
            </div>
            <div className="">
              <h2 className="text-2xl text-white font-bold">96708</h2>
              <p className="text-sm text-gray-400 font-bold">Total Travelers</p>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <p className="font-bold text-white text-xl">Supports</p>
            <ul className="space-y-6">
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Emails</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Social Media</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>FAQs</span>
              </li>
              <li className="text-gray-400 font-semibold flex items-center gap-2">
                <span><MdOutlineDoubleArrow className='text-[#30E7D5]' /></span>
                <span>Calls</span>
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
            <p className="font-bold text-white text-xl">What would you say to everyone about us</p>
            <p className="text-gray-400 font-semibold">add your own testimonial content here...</p>
            <div className="flex w-full justify-between bg-gray-500 rounded-lg overflow-hidden mt-3">
              <input type="text" placeholder='click to upload your picture' className=' outline-none focus:outline-none bg-transparent text-white w-3/4 pl-2.5' />
              <button className="px-4 py-4 text-center bg-[#22bbbbd5] text-black rounded-r-lg w-1/4 font-bold hover:cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-20 mx-5 py-8 border-t-gray-600 border-t text-center text-white font-bold text-sm"> ©2025 HandyPros | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
