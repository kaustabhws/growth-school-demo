import React, { useState, useEffect } from 'react';

const Course = () => {
    const [timeRemaining, setTimeRemaining] = useState(600);
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(prevTime => {
                if (prevTime === 0) {
                    return 600;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const formattedTime = `${hours.toString().padStart(2, '0')}hr${" "}:${" "}${minutes
        .toString()
        .padStart(2, '0')}m${" "}:${" "}${seconds.toString().padStart(2, '0')}s`;

    return (
        <div className='bg-[#1a1646] min-h-screen py-20'>
            <div>
                <div className='text-white text-center text-4xl font-semibold'>
                    <p>Time is running out.</p>
                    <p>Grab your spot fast !</p>
                </div>
                <div className='text-white text-center text-4xl font-semibold pt-14'>
                    <p>{formattedTime}</p>
                </div>
            </div>
            <div className='w-10/12 mx-auto mt-32'>
                <div className='bg-[#131033] text-white p-7 rounded-lg flex items-center max-[1090px]:flex-col'>
                    <div className='flex flex-col gap-5 border-r-2 flex-1 max-[1090px]:border-r-0 max-[1090px]:border-b-2 max-[1090px]:pb-6'>
                        <p className='text-3xl font-semibold'>
                            Crash Course Launch Offer (Save INR 1799)
                        </p>
                        <ul className='list-disc text-gray-400 ml-10'>
                            <li>Learn the toolkit of the professionals in just 3 hours</li>
                            <li>Enjoy the discounted price of ₹ 299</li>
                            <li>The launch offer expires soon, grab your seat NOW!</li>
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <div className='p-7 pl-10'>
                            <p className='text-2xl font-semibold'>Price of the program</p>
                            <div className='flex flex-col gap-3'>
                                <p className='text-[#f3b700] text-4xl font-bold'>₹499 <span className='text-white font-normal text-sm'><strike>₹1999</strike></span></p>
                                <button className='font-bold bg-[#f4b700] p-4 rounded-md w-max text-2xl text-black'>Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
