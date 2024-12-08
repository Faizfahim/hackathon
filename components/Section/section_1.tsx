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
                <div className='categorys grid gap-4'>
                    <div className='men xl:col-start-1 xl:col-end-6 xl:row-start-1 xl:row-end-6 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-6 relative'>
                        <Image 
                        src='/images/filter.png'
                        alt=''
                        width={510}
                        height={500}
                        />
                        <div className='category-btn'>
                            <button className='w-36 py-3 px-4 font-bold bg-white text-black'>Men</button>
                        </div>
                    </div>
                    <div className='women xl:col-start-6 xl:col-end-8 xl:row-start-1 xl:row-end-6 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-6 relative'>
                        <Image 
                        src='/images/filter-1.png'
                        alt=''
                        width={239}
                        height={500}
                        />
                        <div className='category-btn'>
                            <button className='w-36 py-3 px-4 font-bold bg-white text-black'>Women</button>
                        </div>
                    </div>
                    <div className='accessories xl:col-start-8 xl:col-end-12 xl:row-start-1 xl:row-end-3 lg:col-start-6 lg:col-end-8 lg:row-start-1 lg:row-end-3 relative'>
                        <Image 
                        src='/images/filter-2.png'
                        alt=''
                        width={240}
                        height={242}
                        />
                        <div className='category-btn'>
                            <button className='w-36 py-3 px-4 font-bold bg-white text-black'>Accessories</button>
                        </div>
                    </div>
                    <div className='kids xl:col-start-8 xl:col-end-12 xl:row-start-3 xl:row-end-6 lg:col-start-6 lg:col-end-8 lg:row-start-3 lg:row-end-6 relative'>
                        <Image 
                        src='/images/filter-3.png'
                        alt=''
                        width={240}
                        height={242}
                        />
                        <div className='category-btn'>
                            <button className='w-36 py-3 px-4 font-bold bg-white text-black'>Kids</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Section_1
