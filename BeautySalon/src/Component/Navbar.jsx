import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FiHome, FiMenu, FiX } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { GiScissors } from "react-icons/gi";
import { FiCalendar } from "react-icons/fi";
// import { FiX } from "react-icons/fi";
// import { FiMenu } from "react-icons/fi";



function Navbar() {
    const [navShadow , setNavShadow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='fixed w-full z-50 transition-all duration-500'>
        {/* {BG} */}
        <div className={`bg-white backdrop-blur-2xl ${navShadow ? 'shadow-xl':'shadow-md' }`}>
            <nav className='border-b border-pink-400/20'>
            <div className='container mx-auto px-2 md:px-6 py-4 flex items-center justify-between relative'>
                {/* {LOGO} */}
                <div className='flex items-center'>
                    <span className='cursor-pointer text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent font-[pooppins] tracking-tighter'>
                     The glam bar
                    </span>
                </div>
                {/* {center desktop menu} */}
                <div className='hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-2 lg:space-x-4 '>
                    <Link to='home' spy={true} smooth={true} className='flex items-center cursor-pointer text-gray-800 hover:text-pink-700 transition-all duration-300 relative group font-[poppins] font-medium text-base lg:text-lg'> 
                      <FiHome className='mr-1 lg:mr-2'/>
                      Home
                      <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full gap-4'></span>
                    </Link>

                     <Link to='about' spy={true} smooth={true} className='flex items-center cursor-pointer text-gray-800 hover:text-pink-700 transition-all duration-300 relative group font-[poppins] font-medium text-base lg:text-lg'> 
                      <FiUser className='mr-1 lg:mr-2'/>
                      About
                      <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full '></span>
                    </Link>

                     <Link to='services' spy={true} smooth={true} className='flex items-center cursor-pointer text-gray-800 hover:text-pink-700 transition-all duration-300 relative group font-[poppins] font-medium text-base lg:text-lg'> 
                      <GiScissors className='mr-1 lg:mr-2'/>
                      Services
                      <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full'></span>
                    </Link>
                    </div>
           
            {/* book btn */}
            <div className='flex items-center space-x-4'>
                <div className='hidden md:block'>
                    <Link to='contact' spy={true} smooth={true} className='flex items-center bg-pink-400 hover:bg-pinl-600 text-white px-4 py-2 lg:px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer
                    font-[Poppins] font-semibold border-pink-300 text-sm lg:text-base'>
                        <FiCalendar className='mr-1 lg:mr-2'/>
                        Book Now
                    </Link>
                </div>
                {/* Mobail Toggle */}
                <button className='md:hidden text-gray-800 hover:text-pink-700 transition-colors duration-300 p-2 ' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FiX size={28} /> :<FiMenu size={28} />}
                </button>
            </div>
          </div>
         </nav>
        </div>
        {/* Menu Mobile */}
        {isMenuOpen &&(
            <div className='fixed inset-0 z-40 flex items-center justify-center bg-pink-200/95 backdrop-blur-lg '>
                <button className='absolute top-4 right-4 text-gray-800 hover:text-pink-700 transition-colors duration-300 p-2 '>
                    <FiX size={28} />
                </button>
                <div className='bg-pink-100/90 border border-pink-300/20 rounded-xl shadow-2xl p-8 space-y-8 w-11/12 max-w-sm'>
                   <Link to='home' spy={true} smooth={true}
                   className='flex flex-col items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font[Poppins] text-xl'
                   onClick={() => setIsMenuOpen(false)}>
                    <FiHome className='mb-2 text-2xl' />
                    Home
                   </Link>

                    <Link to='about' spy={true} smooth={true}
                   className='flex flex-col items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font[Poppins] text-xl'
                   onClick={() => setIsMenuOpen(false)}>
                    <FiUser className='mb-2 text-2xl' />
                    About
                   </Link>

                    <Link to='services' spy={true} smooth={true}
                   className='flex flex-col items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font[Poppins] text-xl'
                   onClick={() => setIsMenuOpen(false)}>
                    <GiScissors className='mb-2 text-2xl' />
                    Services
                   </Link>

                   <Link to='contact' spy={true} smooth={true}
                   className='flex flex-col items-center bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-xl transition-all duration-300 font[Poppins] font-semibold text-lg ' 
                    onClick={() => setIsMenuOpen(false)} >
                        <FiCalendar className='md-2 text-2xl'/>
                        Book Appoinment
                   </Link>
                </div>
            </div>
        )}
      </div>
  )
}

export default Navbar