import React, { useState  , useEffect} from 'react'
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { HashLink } from 'react-router-hash-link';
import { Link} from 'react-router-dom';
import logo from '../../assets/logo.png'


const Header = () => {
    const [open, setopen] = useState(false)
    return (
        <div>
            <nav className='w-full h-[10vh]  bg-white flex items-center justify-between  lg:px-28 sm:px-10 px-4 z-40'>
                <div className='w-[80%]md:w-[50%] h-full flex items-center '>
                    <Link to={'/'}><img src={logo} alt="" className='w-40 cursor-pointer'/></Link>
                </div>
                <div className='h-full flex items-center md:hidden'>
                    {open ? <RxCross2 fontSize={30} onClick={() => setopen(!open)} /> : <IoReorderThree fontSize={30} onClick={() => setopen(!open)} />}
                </div>
                <div className='absolute md:static w-screen  h-[20vh] md:w-[40%]  md:h-full md:min-h-full  top-[10%]  duration-500 flex items-center  justify-start  md:justify-end  md:bg-transparent z-50' style={{ left: open ? "0%" : "-100%" }}>
                    <ul className='flex md:flex-row flex-col md:items-center justify-end    items-start gap-2 md:gap-10  pl-3 md:pl-0 '>
                        <li>
                            <HashLink to={'/#home'} className='font-bold text-black hover:text-blue-500 duration-300' onClick={() => setopen(!open)}>Home</HashLink>
                        </li>
                        <li>
                            <HashLink to={'/#about'} className='font-bold text-black hover:text-blue-500 duration-300' onClick={() => setopen(!open)}>About</HashLink>
                        </li>
                        <li>
                            <HashLink to={"/#contact"} className='font-bold text-black hover:text-blue-500 duration-300' onClick={() => setopen(!open)}>Contact</HashLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header