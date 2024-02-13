import React from 'react'
import illustration from '../../assets/illustration.jpg'

const About = () => {
    return (
        <section id='about'>
            <div className='min-h-screen py-20'>
                <div>
                    <div className='uppercase font-semibold text-center w-2/4 mx-auto flex flex-col gap-3 max-[987px]:w-full'>
                        <p className='text-[#26484f] text-6xl max-[709px]:text-4xl'>About <span className='text-[#aa9b8a]'>Founderx</span></p>
                        <p className='font-normal max-[709px]:text-sm'>The world needs your creativity and ingenuity. Don't put your dreams on hold.<br /> Start your founder's journey today!</p>
                    </div>
                    <div className='flex items-center justify-center w-10/12 mx-auto mt-20 gap-6 max-[987px]:flex-col'>
                        <div className='flex-1 flex justify-center'>
                            <img src={illustration} alt="" className='rounded-lg max-h-96 w-full object-cover' />
                        </div>
                        <div className='flex-1'>
                            <div className='bg-[#ebe9e2] rounded-lg p-12 min-h-96 max-[692px]:p-7'>
                                <div>
                                    <ul className='flex flex-col gap-5 text-lg'>
                                        <li>
                                            ⇝ Master a <b>structured approach</b> to building a tech venture
                                        </li>
                                        <li>
                                            ⇝ <b>Get coached by</b> India's top 1% founders, operators and investors
                                        </li>
                                        <li>
                                            ⇝ <b>Learn by doing-Work </b> on actual startup ideas in a real-world startup team simulation
                                        </li>
                                        <li>
                                            ⇝ <b>Expand your network</b> in the community of like- minded peers
                                        </li>
                                        <li>
                                            ⇝ <b>Find your co-founder</b> & your core team among the fellows and alumni.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About