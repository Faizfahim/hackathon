import React from 'react'
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Topbar = () => {
  return (
    <div className='topbar w-full px-6'>
      <div className='flex justify-between text-white items-center h-[46px] text-sm'>
        <div className='flex gap-6 justify-center font-bold'>
          <a href='tel:(225) 555-0118' className='flex items-center gap-3'>
            <HiOutlinePhone />
            (225) 555-0118
          </a>
          <a href='mailto:michelle.rivera@example.com' className='flex items-center gap-3'>
            <AiOutlineMail />
            michelle.rivera@example.com
          </a>
        </div>
          <div className='text-center'>
          <Link href=''>Follow Us  and get a chance to win 80% off</Link>
        </div>
        <div className=''>
            <p className='flex gap-3 justify-center'>Follow Us : <FaInstagram /> <FaYoutube /> <FaFacebook /> <FaTwitter /></p>
        </div>
      </div>
    </div>
  )
}

export default Topbar
