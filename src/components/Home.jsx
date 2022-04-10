import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
export default function Home() {
    return (
        <div className='bg-[#0a192f] w-full h-screen' name='home'>
            
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-white'>Hi, my name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Brian Lee</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a full-stack developer based in Los Angeles. Currently, I'm focused on building responsive full-stack web applications.</p>
                <div>
                    <Link to="work" smooth={true} duration={500}>
                        <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 group'>
                            View Work 
                            <span>
                                <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}