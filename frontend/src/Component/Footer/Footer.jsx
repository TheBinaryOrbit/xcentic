import React from 'react'
import { FaInstagramSquare, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AiFillCode } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='w-full h-fit p-5'>
      <div className='w-full h-full  rounded-2xl p-5 flex flex-col justify-evenly items-center gap-3 bg-indigo-100'>
        {/* <div className='w-full h-full rounded-xl py-10 rounded-b-2xl  bg-news object-cover bg-cover flex md:flex-row justify-between px-10 flex-col'>
          <div className="w-full  md:w-[50%] h-fit flex flex-col justify-center items-start gap-4">
            <h2 className="sm:text-xl md:text-3xl lg:text-4xl font-palyfair font-extrabold text-white">Subscribe to Newsletter</h2>
            <input type="email" placeholder="Enter Your email.." className="w-full md:w-[70%] p-1 py-2 md:p-2 rounded-md outline-none" />
            <button className="w-full md:w-[70%] bg-blue-800 rounded-2xl text-white font-roboto py-2 font-semibold p-1 md:p-2">Subscribe</button>
          </div>
          <div className="hidden md:flex w-[50%] h-full p-5 justify-end gap-5 text-3xl">
            <a href=""><FaInstagramSquare /></a>
            <a href=""><FaSquareXTwitter /></a>
            <a href=""><FaGithub /></a>
            <a href=""><FaLinkedin /></a>
          </div>
        </div> */}


        {/* Middle section */}
        <div className='w-full h-fit flex justify-between items-start py-5 md:p-4 p-0  flex-wrap  md:gap-4 md:flex-row flex-col gap-4'>
          <div className="md:w-[30%] w-full h-full md:self-center self-start  text-4xl font-extrabold flex md:justify-center justify-start items-center gap-2 ">
          <Link to={'/'}><img src={logo} alt="" className='scale-75 cursor-pointer'/></Link>
          </div>
          <div  >
            <h3 className="font-semibold text-xl leading-10 md:mt-10">Section</h3>
            <ul className="leading-7 text-gray-600">
              <li><a href='./' className="links">Home</a></li>
              <li><Link className="links" to={'./about'}>About</Link></li>
              <li><a href='./contact' className="links">Contact</a></li>
              <li><Link className="links" to={'./services'}>Services</Link></li>
            </ul>
          </div>
          <div >
            <h3 className="font-semibold text-xl leading-10 md:mt-10">Help</h3>
            <ul className="leading-7 text-gray-600">
              <li><a href="" className="links">Customer Support</a></li>
              <li><Link to={'./tandc'} className="links">Terms & Conditions</Link></li>
              <li><Link to={'./privacypolicy'} className="links">Privacy Policy</Link></li>
              <li><Link to={'./refund'} className="links">Refund Policy</Link></li>
            </ul>
          </div>
          <div >
            <h3 className="font-semibold text-xl leading-10 md:mt-10">Important Links</h3>
            <ul className="leading-7 text-gray-600">
              <li><Link to={'./faqs'} className="links">FAQ'S</Link></li>
              <li><a href="" className="links">Broucher</a></li>
            </ul>
          </div>
          <div className='md:mt-10 flex flex-col justify-start items-start leading-8'>
            <p className="flex justify-center items-center"><FaLocationDot /> &nbsp;Ghaziabad (NCR) Uttar Pradesh , India</p>
            <p className="flex justify-center items-center"><FaPhoneAlt />&nbsp; +91 79069 43033</p>
            <p className="flex justify-center items-center"><MdAttachEmail />&nbsp;business@xcentic.in</p>
          </div>
        </div>

        <hr className='w-[95%] h-1 my-3 bg-gray-600 rounded-full border-0' />
        {/*Bottom Section */}
        <div className="w-full h-full flex sm:justify-between justify-center items-center px-3">
        <h2 className="font-light font-roboto">©2024 XCENTIC Pvt. Ltd.</h2>
        <h3 className="font-semibold hidden sm:inline">Designed by  <span className="font-palyfair text-xl text-balck">Xcentic</span></h3>
        </div>
      </div>

    </div>
  )
}

export default Footer