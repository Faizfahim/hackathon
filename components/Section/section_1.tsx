import React from 'react'
import Image from 'next/image'
const Section_1 = () => {
  return (
    <section className='section-1 py-20'>
        <div className='container'>
            <div className='flex flex-col gap-12'>
                <div className='s1-title text-center'>
                    <h1 className='text-2xl font-bold'>EDITORS PICK</h1>
                    <p className='text-sm text-[#737373]'>Problems trying to resolve the conflict between </p>
                </div>
                <div className='categorys xl:grid xl:grid-cols-2 lg:flex gap-4 md:flex'>
                    <div className='men xl:col-start-1 xl:col-end-6 xl:row-start-1 xl:row-end-6 relative'>
                        <Image 
                        src='/images/filter.png'
                        alt=''
                        width={510}
                        height={500}
                        />
                        <div className='category-btn xl:bottom-16'>
                            <button className='lg:w-36 lg:py-3 lg:px-4 sm:text-sm sm:px-5 sm:py-2 font-bold bg-white text-black'>Men</button>
                        </div>
                    </div>
                    <div className='women xl:col-start-6 xl:col-end-8 md:w-[240px] xl:row-start-1 xl:row-end-6 relative'>
                        <Image 
                        src='/images/filter-1.png'
                        alt=''
                        width={239}
                        height={500}
                        />
                        <div className='category-btn xl:bottom-16'>
                            <button className='lg:w-36 lg:py-3 lg:px-4 sm:text-sm sm:px-5 sm:py-2 font-bold bg-white text-black'>Women</button>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-col xl:col-start-8 xl:col-end-12 xl:row-start-1 xl:row-end-3 lg:gap-3'>
                        <div className='accessories xl:col-start-8 xl:col-end-12 xl:row-start-1 xl:row-end-3 relative'>
                            <Image 
                            src='/images/filter-2.png'
                            alt=''
                            width={240}
                            height={242}
                            />
                            <div className='category-btn'>
                                <button className='lg:w-36 lg:py-3 lg:px-4 sm:text-xs sm:px-2 sm:py-1 font-bold bg-white text-black'>Accessories</button>
                            </div>
                        </div>
                        <div className='kids xl:col-start-8 xl:col-end-12 xl:row-start-3 xl:row-end-6 relative'>
                            <Image 
                            src='/images/filter-3.png'
                            alt=''
                            width={240}
                            height={242}
                            />
                            <div className='category-btn'>
                                <button className='lg:w-36 lg:py-3 lg:px-4 sm:text-xs sm:px-2 sm:py-1 font-bold bg-white text-black'>Kids</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Section_1
