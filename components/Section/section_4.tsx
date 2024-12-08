import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Section_4 = () => {
  return (
    <section className='section-4'>
        <div className='container'>
            <div className='flex gap-4'>
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
                        <h1 className='xl:text-[58px] font-bold w-[509px] lg:text-[36px]'>Part of the Neural Universe</h1>
                        <p className='text-sm w-[341px]'>We know how large objects will act, 
                        but things on a small scale.</p>
                        <div className='flex gap-4 items-center'>
                            <Link href='' className='text-sm px-[40px] py-[15px] rounded-[5px] text-white bg-[#2DC071]'>Buy Now</Link>
                            <Link href='' className='text-sm px-[40px] py-[15px] rounded-[5px] border-[1px] border-[#2DC072] font-bold text-[#2DC071]'>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section_4
