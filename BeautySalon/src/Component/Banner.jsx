import React from 'react'
import BannerImage from '../assets/imgbout.jpg';
import { FaSpa } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-scroll';


const Banner = () => {
    return (
        <div id='home'
        className='min-h-[80vh] md:min-h-[90vh] flex items-center justify-center text-center px-4 relative overflow-hidden '
        style={{
            background:`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${BannerImage})`,
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}>
            <div className='max-w-6xl text-white z-10 relative px-4'>
                <div className='absolute -bottom-12 -right-12 md:-bottom-8 md:-right-8 text-4xl md:text-5xl text-amber-300/20 rotate-12 '>
                    <FaSpa/>
                </div>
                      {/* Heading */}
                      <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 font-[Great+Vibes] bg-gradient-to-r from-amber-300 via-rose-300 to-rose-500  bg-clip-text text-transparent drop-shadow-2xl animate-fade-in'>
                            The Royal Makeup and Skin Care  
                      </h1>
                      {/* Decoretiv */}
                      <div className='w-48 md:w-64 h-1 bg-gradient-to-r from-transparent via-lime-300 to-transparent mx-auto my-6 md:my-8 rounded-full'>
                      </div>

                      {/* Tagline */}
                      <div className='space-y-4 md:space-y-6 mb-8 md:mb-12 '>
                        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-amber-100 leading-tight'>
                            Experience Beauty Redefined
                        </p>
                      </div>

                      {/* Btn */}
                      <div className='bg-gradient-to-r from-rose-600 to-amber-500 px-2 py-4 md:px-4 md:py-5 rounded-full text-white uppercase font-bold tracking-widest hover:scale-150 transition-transform duration-300 hover:shadow-2xl flex items-center gap-2 md:gap-3 mx-auto border-2 border-amber-200 md:border-rose-200 group text-sm  md:text-base '>
                        <FaCalendarAlt className='text-xl md:text-2xl animate-pulse group-hover:animate-none' />
                        <Link to='contact' smooth={true}>Book Your Experience</Link>
                      </div>
            </div>

        </div>
    )
}

export default Banner