import React from 'react'

const Hamburger = () => {
    return (
        <div className='flex items-center gap-4'>
            <div className='relative learn-btn'>
                <button className='px-5 py-2 border border-gray-400 rounded-md flex items-center gap-3 hover:bg-white hover:text-black transition-all text-white max-[440px]:px-3'>
                    <p>Learn</p>
                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.3611 4.86133L4.16666 8.05577L0.972221 4.86133L0 5.83355L4.16666 10.0002L8.33332 5.83355L7.3611 4.86133Z" fill="currentColor"></path>
                        <path opacity="0.5" d="M7.3611 0L4.16666 3.19444L0.972221 0L0 0.97222L4.16666 5.13888L8.33332 0.97222L7.3611 0Z" fill="currentColor"></path>
                    </svg>
                </button>
                <div className='absolute bg-white text-black p-5 rounded-md min-w-max pr-28 learn-menu !right-0 max-[450px]:pr-10'>
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
            <div>
                <div className='relative ham-btn'>
                    <div class="p-2 py-3 space-y-1.5 border rounded shadow hover:cursor-pointer hover:bg-white">
                        <span class="block w-7 h-0.5 bg-white"></span>
                        <span class="block w-7 h-0.5 bg-white"></span>
                        <span class="block w-7 h-0.5 bg-white"></span>
                    </div>
                    <div className='absolute bg-white text-black p-5 rounded-md min-w-max pr-28 ham-menu !right-0 max-[450px]:pr-10'>
                        <div className='flex flex-col justify-center gap-3 text-black'>
                            <p className='hover:cursor-pointer hover:bg-green-500 transition-all px-3 w-max'>Upskill Your Team</p>
                            <a href="#about"><p className='hover:cursor-pointer hover:bg-green-500 transition-all px-3 w-max'>About</p></a>
                            <div className='h-0.5 w-full bg-gray-400' />
                            <button className='px-5 py-2 border border-gray-400 rounded-md text-black flex items-center gap-3 transition-all font-semibold w-max hover:bg-black hover:text-white'>
                                <p>Login</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hamburger