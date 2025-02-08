import img from '../assets/whitelogo.png'
import Image from 'next/image'
import { FaGooglePlay, FaAppStoreIos, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';


const Footer = () => {
  return (
    <footer className="w-full bg-black rounded-t-3xl  h-fit p-5">
      <div className="text-white py-8 max-w-7xl mx-auto">
        <div className="max-w-screen-xl mx-auto grid grid-cols-6 gap-6 mb-10">
        <div className='w-full h-full flex justify-start  items-center mb-10 col-span-2 mr-28'>
          <Image src={img} alt="img" className='w-64 ml-10' />
        </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">About us</li>
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Careers</li>
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Support center</li>
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Sarwisi AI</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">For Taskers</li>
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">For Drivers</li>
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">For Merchants</li>
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Safety Standards</li>
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Community Guidelines</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Join us</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Sell your services</li>
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Get help today</li>
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Become a tasker</li>
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Become a driver</li>
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">Sell and advertise</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacts</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">+91 620-382-1043</li>
              <li className="hover:text-slate-200 hover:scale-105 duration-300 cursor-pointer">business@xcentic.in</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t-2 max-w-7xl mx-auto border-gray-200 py-5 flex justify-between items-center'>
        <p className=' text-white text-sm '>©2024 XCENTIC Pvt. Ltd.</p>
        <ul className=' text-white flex gap-3 text-xl'>
          <li className=' cursor-pointer'><a href="#"></a> <FaFacebook /></li>
          <li className=' cursor-pointer'><a href="#"></a> <FaSquareXTwitter /></li>
          <li className=' cursor-pointer'><a href="#"></a> <FaLinkedin /> </li>
          <li className=' cursor-pointer'><a href="#"></a> <FaInstagram /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer