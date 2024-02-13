import React from 'react'

const More = () => {
    return (
        <div className='min-h-screen my-20'>
            <div>
                <div className='text-center px-2'>
                    <p className='text-5xl font-semibold max-[709px]:text-3xl'>
                        <span className='text-orange-600'>But,</span>
                        <br />
                        Why should you become a Mindful Marketer?
                    </p>
                </div>
                <div className=' w-3/4 mx-auto flex gap-16 flex-wrap justify-center mt-28'>
                    <div className='flex flex-col items-center max-w-60'>
                        <img src="https://www.svgrepo.com/show/286277/writing.svg" alt="" className='h-20' />
                        <p className='text-center'>Learn to look at challanges through different lenses</p>
                    </div>
                    <div className='flex flex-col items-center max-w-60'>
                        <img src="https://www.svgrepo.com/show/181794/writing-note.svg" alt="" className='h-20' />
                        <p className='text-center'>Develop a deep understanding of modern marketing</p>
                    </div>
                    <div className='flex flex-col items-center max-w-60'>
                        <img src="https://www.svgrepo.com/show/230430/check-list-tick.svg" alt="" className='h-20' />
                        <p className='text-center'>Understand time-tested principles</p>
                    </div>
                    <div className='flex flex-col items-center max-w-60'>
                        <img src="https://www.svgrepo.com/show/448118/sales-amount.svg" alt="" className='h-20' />
                        <p className='text-center'>Become a strategic thinker without trend-surfing</p>
                    </div>
                    <div className='flex flex-col items-center max-w-60'>
                        <img src="https://www.svgrepo.com/show/483886/brain-illustration-12.svg" alt="" className='h-20' />
                        <p className='text-center'>Incorporate a creative and innovative thought process</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default More