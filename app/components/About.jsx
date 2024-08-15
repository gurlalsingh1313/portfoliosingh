import React from 'react'
import Image from "next/image";
import profile from './profile.jpg'

const About = () => {
    return (
        <div className='border border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='pb-16 text-6xl font-lg tracking-tight lg:mt-16 lg:text-8xl'>Gurlal Singh</h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Next.JS Developer</span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        I am a Full Stack Developer with a strong background in both frontend and backend technologies, currently focused on mastering Next.js. My work involves creating scalable and efficient applications with modern features, integrating TypeScript, and enhancing code modularity. With experience in building dynamic web apps, implementing robust authentication systems using Firebase, and managing data storage, I am committed to continuous learning and delivering high-quality solutions that drive innovation and make an impact in the tech world.
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                    <Image src={profile} width={400} height={400} className='rounded-xl'></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
