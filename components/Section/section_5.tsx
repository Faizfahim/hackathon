import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiAlarmOn } from "react-icons/ci";
import { FaChartArea } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


const Section_5 = () => {
  return (
    <section className='section-5 py-[112px]'>
        <div className='container'>
            <div className='row grid justify-center items-center gap-20'>
                <div className='s5-title text-center flex flex-col gap-3 items-center'>
                    <h5 className='text-[#23A6F0] font-bold text-sm'>Practice Advice</h5>
                    <h1 className='font-bold text-[40px]'>Featured Posts</h1>
                    <p className='text-sm text-[#737373] w-[463px] text-center'>Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
                <div className='grid xl:grid-cols-3 gap-4 lg:grid-cols-2 sm:grid-cols-1'>
                    <div className='w-[348px] shadow-lg shadow-indigo-500/40'>
                        <Image  
                        src='/images/unsplash_dEGu-oCuB1Y.png'
                        alt=''
                        width={348}
                        height={300}
                        />
                        <div className='text-[#737373] flex flex-col gap-4 px-2 py-3'>
                            <div className='box-btns flex gap-3'>
                                <Link href=''>Google</Link>
                                <Link href=''>Trading</Link>
                                <Link href=''>New</Link>
                            </div>
                            <h1 className='text-black text-xl'>Loudest à la Madison #1 
                            Lintegral</h1>
                            <p>We focus on ergonomics and meeting 
                            you where you work. Its only a 
                            keystroke away.</p>
                            <div className='flex justify-between'>
                                <a href='' className='flex items-center text-xs gap-2'><CiAlarmOn className='text-xl text-[#23A6F0]' />22 April 2021</a>
                                <a href='' className='flex items-center text-xs gap-2'><FaChartArea className='text-[#23856D] text-lg' />10 comments</a>
                            </div>
                            <a href='' className='flex items-center gap-2'>Learn More <IoIosArrowForward /></a>
                        </div>
                    </div>
                    <div className='w-[348px] shadow-lg shadow-indigo-500/40'>
                        <Image  
                        src='/images/unsplash_tVEqStC2uz8.png'
                        alt=''
                        width={348}
                        height={300}
                        />
                        <div className='text-[#737373] flex flex-col gap-4 px-2 py-3'>
                            <div className='box-btns flex gap-3'>
                                <Link href=''>Google</Link>
                                <Link href=''>Trading</Link>
                                <Link href=''>New</Link>
                            </div>
                            <h1 className='text-black text-xl'>Loudest à la Madison #1 
                            Lintegral</h1>
                            <p>We focus on ergonomics and meeting 
                            you where you work. Its only a 
                            keystroke away.</p>
                            <div className='flex justify-between'>
                                <a href='' className='flex items-center text-xs gap-2'><CiAlarmOn className='text-xl text-[#23A6F0]' />22 April 2021</a>
                                <a href='' className='flex items-center text-xs gap-2'><FaChartArea className='text-[#23856D] text-lg' />10 comments</a>
                            </div>
                            <a href='' className='flex items-center gap-2'>Learn More <IoIosArrowForward /></a>
                        </div>
                    </div>
                    <div className='w-[348px] shadow-lg shadow-indigo-500/40 hidden xl:block'>
                        <Image  
                        src='/images/unsplash_hHdHCfAifHU.png'
                        alt=''
                        width={348}
                        height={300}
                        />
                        <div className='text-[#737373] flex flex-col gap-4 px-2 py-3'>
                            <div className='box-btns flex gap-3'>
                                <a href=''>Google</a>
                                <Link href=''>Trading</Link>
                                <Link href=''>New</Link>
                            </div>
                            <h1 className='text-black text-xl'>Loudest à la Madison #1 
                            Lintegral</h1>
                            <p>We focus on ergonomics and meeting 
                            you where you work. Its only a 
                            keystroke away.</p>
                            <div className='flex justify-between'>
                                <a href='' className='flex items-center text-xs gap-2'><CiAlarmOn className='text-xl text-[#23A6F0]' />22 April 2021</a>
                                <a href='' className='flex items-center text-xs gap-2'><FaChartArea className='text-[#23856D] text-lg' />10 comments</a>
                            </div>
                            <a href='' className='flex items-center gap-2'>Learn More <IoIosArrowForward /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section_5
