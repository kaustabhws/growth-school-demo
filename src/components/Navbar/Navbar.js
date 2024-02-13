import React from 'react'
import Hamburger from './Hamburger'
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='bg-[#1a1646] absolute w-full z-10'>
            <header>
                <div className='py-6 px-6'>
                    <div className='flex items-center justify-between max-[440px]:gap-3'>
                        <div className='flex items-center gap-16'>
                            <div>
                                <img src={logo} alt="Growth school logo" className='h-16 max-[440px]:h-12' />
                            </div>
                            <div className='flex items-center gap-10 text-base text-white font-semibold max-[870px]:hidden'>
                                <div className='relative learn-btn'>
                                    <button className='px-5 py-2 border border-gray-400 rounded-md flex items-center gap-3 hover:bg-white hover:text-black transition-all'>
                                        <p>Learn</p>
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.3611 4.86133L4.16666 8.05577L0.972221 4.86133L0 5.83355L4.16666 10.0002L8.33332 5.83355L7.3611 4.86133Z" fill="currentColor"></path>
                                            <path opacity="0.5" d="M7.3611 0L4.16666 3.19444L0.972221 0L0 0.97222L4.16666 5.13888L8.33332 0.97222L7.3611 0Z" fill="currentColor"></path>
                                        </svg>
                                    </button>
                                    <div className='absolute bg-white text-black p-5 rounded-md min-w-max pr-28 learn-menu left-0'>
                                        <div className='flex flex-col justify-center gap-3'>
                                            <p className='hover:cursor-pointer hover:bg-green-500 transition-all px-3 w-max'>Marketing</p>
                                            <p className='hover:cursor-pointer hover:bg-green-500 transition-all px-3 w-max'>Generative AI</p>
                                            <p className='hover:cursor-pointer hover:bg-green-500 transition-all px-3 w-max'>Product</p>
                                            <p className='hover:cursor-pointer hover:bg-green-500 transition-all px-3 w-max'>Design</p>
                                            <p className='hover:cursor-pointer hover:bg-green-500 transition-all px-3 w-max'>Business</p>
                                            <p className='hover:cursor-pointer hover:bg-green-500 transition-all px-3 w-max'>Tech & Data</p>
                                            <p className='hover:cursor-pointer hover:bg-green-500 transition-all px-3 w-max'>Personal Growth</p>
                                            <p className='hover:cursor-pointer hover:bg-green-500 transition-all px-3 w-max'>Founders</p>
                                        </div>
                                    </div>
                                </div>
                                <button>Upskill Your Team</button>
                                <a href="#about"><button>About</button></a>
                            </div>
                        </div>
                        <div className='max-[870px]:hidden'>
                            <button className='px-5 py-2 border border-gray-400 rounded-md text-white flex items-center gap-3 hover:bg-white hover:text-black transition-all font-semibold'>
                                <p>Login</p>
                            </button>
                        </div>
                        <div className='hidden max-[870px]:block'>
                            <Hamburger />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar