import React from 'react';
import { FiScissors, FiUser, FiHeart, FiAward } from 'react-icons/fi';
import { GiLipstick } from 'react-icons/gi';
import imgabout from '../assets/imgAbout.jpg';

const About=() => {
  
    const features = [
    {
        icon: <FiScissors className="w-8 h-8" />,
        title: "Expert Stylists",
        desc: "Certified professionals with artistic vision"
    },
    {
        icon: <GiLipstick className="w-8 h-8" />,
        title: "Premium Products",
        desc: "Luxury brands for ultimate beauty experience"
    },
    {
        icon: <FiUser className="w-8 h-8" />,
        title: "Custom Care",
        desc: "Personalized beauty solutions for you"
    },
    {
        icon: <FiHeart className="w-8 h-8" />,
        title: "Passionate Team",
        desc: "Dedicated to enhancing your natural beauty"
    }
];
return (
//to-rose-200 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-all duration-300 
    <section id='about' className='py-24 bg-gradient-to-b from-rose-200 to-pink-100 '>
        <div className='container mx-auto px-4 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                {/* Img Section */}
                 <div className='relative group'>
                    <div className='absolute inset-0 bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-all duration-300 '>
                    </div>

                    <div className='relative bg-pink-100 rounded-3xl p-8 transform'>
                     <div className='relative bg-rose-200 rounded-3xl p-4 md:p-8 transform hover:scale-105 transition-all duration-300'>
                        <div className='aspect-square rounded-2xl overflow-hidden '>
                            <img src={imgabout} alt='About img' className='w-full h-full object-cover object-center' />
                        </div>
                     </div>
                    </div>
                 </div>
                   {/* content section */}
                   <div className='space-y-8'>
                    <div className='inline-block '>
                        <div className='flex items-center space-x-3 bg-rose-100 px-4 py-2 rounded-full'>
                            <FiAward className='text-rose-400' />
                            <span className='text-sm font-semibold text-rose-600'>
                                Awrd Winning 
                            </span>
                        </div>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent'>
                        Redefining Beauty Standards
                    </h2>
                    <p className='text-lg text-gray-600 leading-relaxed'>
                        At Glam Bar, we craft experiences that celebrate individually. Our master stylists combain technical expertise with artistic vision to reveal your most radient self.
                    </p>

                    {/* Feature Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        {features.map((feature,index)=>(
                            <div key={index} className='p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group'>
                                <div className='flex items-center space-x-4'>
                                    <div className='p-3 bg-rose-50 rounded-xl group-hover:bg-rose-100 transition-colors'>
                                        <span className='text-rose-500'>
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <h3 className='text-lg font-semibold text-gray-800'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-sm text-gray-500'>
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                   </div>

            </div>
        </div>
    </section>
  )
}

export default About