
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section_3 = () => {
  return (
    <section className='section-3 w-full'>
        <div className='container'>
            <div className='grid sm:grid-cols-1 lg:gap-3 sm:gap-32'>
                <div className='lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-6 flex items-center'>
                    <div className='s3-content'>
                        <p className='text-xl'>SUMMER 2020</p>
                        <h1 className='xl:text-[58px] font-bold w-[509px] lg:text-[40px] lg:gap-3'>Vita Classic Product</h1>
                        <p className='text-sm w-[341px]'>We know how large objects will act, We know how are objects will act, We know</p>
                        <div className='flex gap-9 items-center'>
                            <Link href='' className='font-bold text-2xl'>$16.48</Link>
                            <Link href='' className='text-sm px-[40px] py-[15px] rounded-[5px] bg-[#2DC071]'>ADD TO CART</Link>
                        </div>
                    </div>
                </div>
                <div className='md:col-start-6 md:col-end-12 md:row-start-1 md:row-end-6 '>
                    <div className='s3-image'>
                        <Image 
                        src='/images/shop-hero-2-png-picture-1.png'
                        alt=''
                        width={443}
                        height={685}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section_3
