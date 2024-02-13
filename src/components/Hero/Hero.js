import React, { useEffect, useState } from 'react'
import man from '../../assets/man.png'

const Hero = () => {

    const [showPopup, setShowPopup] = useState(false);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='bg-[#1a1646] min-h-screen flex items-center relative'>
            {showPopup && (
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            )}
            {/* Hero Content */}
            <div className='w-11/12 mx-auto flex items-center mt-40 mb-20 max-[1010px]:flex-col max-[1010px]:mt-36 max-[1010px]:gap-5'>
                <div className='flex-1 flex flex-col gap-6'>
                    <p className='text-white font-bold text-5xl max-[450px]:text-3xl'>
                        Discover a Consultant's Approach to Problem Solving
                    </p>
                    <p className='text-white max-[450px]:text-sm'>
                        Learn the proven approach used by top strategy consultants to tackle complex business challenges effectively. Solve an MBB case study LIVE with Ashwin to understand the concepts hands-on.
                    </p>
                    <div className='flex text-white justify-around max-[429px]:flex-col'>
                        <div className='flex flex-col justify-center gap-2 items-center border border-white py-4 px-6 rounded-md max-[466px]:!p-4'>
                            <div>
                                <svg
                                    className='h-10'
                                    fill="#ffffff"
                                    viewBox="0 0 100.353 100.353"
                                    id="Layer_1"
                                    version="1.1"
                                    xmlSpace="preserve"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    stroke="#ffffff"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <g>
                                            {" "}
                                            <path d="M32.286,42.441h-9.762c-0.829,0-1.5,0.671-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.829,0,1.5-0.672,1.5-1.5 v-9.762C33.786,43.113,33.115,42.441,32.286,42.441z M30.786,52.203h-6.762v-6.762h6.762V52.203z" />{" "}
                                            <path d="M55.054,42.441h-9.762c-0.829,0-1.5,0.671-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5 v-9.762C56.554,43.113,55.882,42.441,55.054,42.441z M53.554,52.203h-6.762v-6.762h6.762V52.203z" />{" "}
                                            <path d="M77.12,42.441h-9.762c-0.828,0-1.5,0.671-1.5,1.5v9.762c0,0.828,0.672,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5v-9.762 C78.62,43.113,77.948,42.441,77.12,42.441z M75.62,52.203h-6.762v-6.762h6.762V52.203z" />{" "}
                                            <path d="M32.286,64.677h-9.762c-0.829,0-1.5,0.672-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.829,0,1.5-0.672,1.5-1.5 v-9.762C33.786,65.349,33.115,64.677,32.286,64.677z M30.786,74.439h-6.762v-6.762h6.762V74.439z" />{" "}
                                            <path d="M55.054,64.677h-9.762c-0.829,0-1.5,0.672-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5 v-9.762C56.554,65.349,55.882,64.677,55.054,64.677z M53.554,74.439h-6.762v-6.762h6.762V74.439z" />{" "}
                                            <path d="M77.12,64.677h-9.762c-0.828,0-1.5,0.672-1.5,1.5v9.762c0,0.828,0.672,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5v-9.762 C78.62,65.349,77.948,64.677,77.12,64.677z M75.62,74.439h-6.762v-6.762h6.762V74.439z" />{" "}
                                            <path d="M89,13.394h-9.907c-0.013,0-0.024,0.003-0.037,0.004V11.4c0-3.268-2.658-5.926-5.926-5.926s-5.926,2.659-5.926,5.926v1.994 H56.041V11.4c0-3.268-2.658-5.926-5.926-5.926s-5.926,2.659-5.926,5.926v1.994H33.025V11.4c0-3.268-2.658-5.926-5.926-5.926 s-5.926,2.659-5.926,5.926v1.995c-0.005,0-0.01-0.001-0.015-0.001h-9.905c-0.829,0-1.5,0.671-1.5,1.5V92.64 c0,0.828,0.671,1.5,1.5,1.5H89c0.828,0,1.5-0.672,1.5-1.5V14.894C90.5,14.065,89.828,13.394,89,13.394z M70.204,11.4 c0-1.614,1.312-2.926,2.926-2.926s2.926,1.312,2.926,2.926v8.277c0,1.613-1.312,2.926-2.926,2.926s-2.926-1.312-2.926-2.926V11.4z M50.115,8.474c1.613,0,2.926,1.312,2.926,2.926v8.277c0,1.613-1.312,2.926-2.926,2.926c-1.614,0-2.926-1.312-2.926-2.926v-4.643 c0.004-0.047,0.014-0.092,0.014-0.141s-0.01-0.094-0.014-0.141V11.4C47.189,9.786,48.501,8.474,50.115,8.474z M24.173,11.4 c0-1.614,1.312-2.926,2.926-2.926c1.613,0,2.926,1.312,2.926,2.926v8.277c0,1.613-1.312,2.926-2.926,2.926 c-1.614,0-2.926-1.312-2.926-2.926V11.4z M87.5,91.14H12.753V16.394h8.405c0.005,0,0.01-0.001,0.015-0.001v3.285 c0,3.268,2.659,5.926,5.926,5.926s5.926-2.658,5.926-5.926v-3.283h11.164v3.283c0,3.268,2.659,5.926,5.926,5.926 s5.926-2.658,5.926-5.926v-3.283h11.163v3.283c0,3.268,2.658,5.926,5.926,5.926s5.926-2.658,5.926-5.926V16.39 c0.013,0,0.024,0.004,0.037,0.004H87.5V91.14z" />{" "}
                                        </g>{" "}
                                    </g>
                                </svg>

                            </div>
                            <p>3rd March</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 border border-white py-4 px-6  rounded-md max-[466px]:!p-4'>
                            <div>
                                <svg
                                    className='h-10'
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#ffffff"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                            stroke="#ffffff"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />{" "}
                                    </g>
                                </svg>
                            </div>
                            <p className='text-center'>1 PM <br /> Onwards</p>
                        </div>
                        <div className='flex flex-col justify-center items-center border border-white py-4 px-6 rounded-md max-[466px]:!p-4'>
                            <div>
                                <svg
                                    className='h-10'
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#ffffff"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M15.24 2H8.76004C5.00004 2 4.71004 5.38 6.74004 7.22L17.26 16.78C19.29 18.62 19 22 15.24 22H8.76004C5.00004 22 4.71004 18.62 6.74004 16.78L17.26 7.22C19.29 5.38 19 2 15.24 2Z"
                                            stroke="#ffffff"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />{" "}
                                    </g>
                                </svg>
                            </div>
                            <p>2.5 Hours</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-6'>
                        <button className='font-bold bg-[#f4b700] p-7 rounded-md w-11/12 mx-auto text-2xl'>Register Now at ₹499 <strike>1999</strike></button>
                        <p className='text-white underline text-center'>click here to get a team discount</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='flex flex-col gap-16'>
                        <div className='banner-offer border-transparent w-9/12 mx-auto flex items-center p-5 rounded-md justify-around max-[1010px]:w-full max-[1010px]:flex-col'>
                            <div className='text-center text-white flex flex-col gap-4'>
                                <p className='text-green-400 font-bold text-lg'>Welcome to</p>
                                <p className='text-3xl font-bold'>Strategy Consulting</p>
                                <p className='text-2xl font-bold'>Mastery Workshop</p>
                            </div>
                            <div>
                                <img src={man} alt="man" className='w-40 max-[1010px]:w-full max-[1010px]:max-h-60' />
                            </div>
                        </div>
                        <div className='max-[1010px]:hidden'>
                            <div className='flex justify-center relative top-2'>
                                <button className='text-white border border-gray-500 bg-[#131033] px-6 py-2 rounded-sm'>Instructed By</button>
                            </div>
                            <div className='h-0.5 w-9/12 mx-auto bg-white'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 p-6 rounded-md shadow-lg max-w-md w-full'>
                    <h2 className='text-2xl font-bold mb-4 text-center text-gray-800'>
                        <p>Flat 15% off</p>
                        <p className='text-sm'>Enter details below to get a coupon</p>
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor='name' className='block text-gray-700'>Name</label>
                            <input type='text' id='name' name='name' className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-yellow-500' />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-gray-700'>Email</label>
                            <input type='email' id='email' name='email' className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-yellow-500' />
                        </div>
                        <button type='submit' className='bg-yellow-500 text-black px-4 py-2 rounded-md w-full hover:bg-yellow-600 transition-colors duration-300'>Submit</button>
                    </form>
                    <button onClick={handleClosePopup} className='mt-4 text-sm text-gray-600 block w-full text-center hover:text-gray-700 transition-colors duration-300'>Close</button>
                </div>
            )}
        </div>
    )
}

export default Hero