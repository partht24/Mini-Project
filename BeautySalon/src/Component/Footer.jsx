import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

 const Footer = () => {
  return (
    <footer className='bg-white border-t border-gray-100'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
                {/* Brand Section */}
                <div className='text-center md:text-left lg:text-center xl:text-left'>
                    <div className='flex justify-center md:justify-start lg:justify-center cl:justify-start items-center mb-4'>
                    <div className='relative'>
                        <div className='absolute -inset-2 bg-amber-200 rounded-full blur opacity-30' />
                        <h3 className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent relative'>
                            The Glam Bar
                        </h3>
                    </div>
                    </div>
                <p className='text-amber-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 lg:mx-auto xl:mx-0 font-medium'>
                    Discover your natural glow with our premium beauty tratments and expert care.
                </p>
                </div>
                {/* Timing Section */}
                <div className='lg:bottom-1 lg:pl-8 border-gray-100'>
                    <h4 className='text-lg font-semibold text-gray-800 mb-4 text-center md:text-left'>
                        Opening Hours
                    </h4>
                    <ul className='space-y-2 text-center md:text-left'>
                        <li className='text-gray-600 text-sm'>
                            <span className='font-medium'>Monday-Friday</span> 9AM- 6PM
                        </li>
                        <li className='text-gray-600 text-sm'>
                            <span className='font-medium'>Saturday-sunday</span> 9AM- 7PM
                        </li>
                        
                    </ul>
                </div>
                {/* Quick Links */}
                <div className='text-center md:text-left'>
                    <h4 className='text-lg font-semibold text-amber-800 mb-4 font-[Poppins]'>
                        Explor
                    </h4>
                    <ul className='space-y-3'>
                        {['Home','About','Services','Book Appointment'].map((link) => (
                           <li key={link}>
                           <a href="#" className='text-amber-600 hover:text-amber-800 transition-all flex items-center justify-center md:justify-start gruop text-sm font-medium ' >
                                <span className='bg-amber-200 group-hover:bg-amber-300 w-1.5 h-1.5 rounded-full mr-2 transition-colors'/>
                                {link}
                            </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Social Media */}
                <div className='text-center md:text-left'>
                    <h4 className='text-lg font-semibold text-amber-800 mb-4 font-[Poppins]'>
                        Connect With Us 
                    </h4>
                    <div className='flex justify-center md:justify-start space-x-4 lg:space-x-5'>
                        {[
                            {
                                icon: <FiInstagram  className='w-5 h-5'/>,
                                color:"bg-amber-500"
                            } 
                        ].map((social, index) => (
                            <a href='#' key={index}
                            className={`p-2.5 rounded-full text-white ${social.color} hover:scale-110 transition-transform duration-300 shadow-sm hover:shadow-amber-200`}>
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className='border-t border-amber-100 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center'>
                <p className='text-sm text-amber-600 font-medium mb-2'>
                    &copy; {new Date().getFullYear()} The glam bar. All Right Reserved.
                </p>
                <a className='inline-block hover:text-purple-700 text-sm font-[Poppins] bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent hover:scale-105 transition-transform'>
                    Designed with <FiHeart className='text-amber-400 inline mx-0.5' /> By Parth Patel
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer