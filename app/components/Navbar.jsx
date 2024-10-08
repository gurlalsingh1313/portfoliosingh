import React from 'react'
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='text-3xl font-extrabold'>GS</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <Link href={"https://www.linkedin.com/in/gurlal-singh-6933702a4/"}><FaLinkedin /></Link>
        <FaGithub />
        <Link href={"https://www.instagram.com/thegurlalsinghh/"}><FaInstagram /></Link>
            </div>
    </nav>
  )
}

export default Navbar
