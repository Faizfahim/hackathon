import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Section_4 = () => {
  return (
    <section className='section-4 sm:py-10'>
        <div className='container'>
            <div className='lg:flex sm:grid grid-cols-2 gap-4'>
                <div className=''>
                    <Image 
                    src='/images/asian-woman-man-with-winter-clothes 1.png'
                    alt=''
                    width={725}
                    height={774}
                    />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='s4-content'>
                        <p className='text-xl text-[#BDBDBD]'>SUMMER 2020</p>
                        <h1 className='xl:text-[58px] font-bold md:w-[509px] lg:text-[36px] sm:text-[30px]'>Part of the Neural Universe</h1>
                        <p className='text-sm w-[341px]'>We know how large objects will act, 
                        but things on a small scale.</p>
                        <div className='flex gap-4 items-center'>
                            <Link href='' className='lg:text-sm lg:px-[40px] lg:py-[15px] rounded-[5px] sm:px-5 sm:py-2 text-white bg-[#2DC071]'>Buy Now</Link>
                            <Link href='' className='lg:text-sm lg:px-[40px] lg:py-[15px] sm:px-5 sm:py-2 rounded-[5px] border-[1px] border-[#2DC072] font-bold text-[#2DC071]'>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section_4
