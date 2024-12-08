import React from 'react'

const Banner = () => {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='banner-content gap-5 font-bold text-white w-7/12 h-screen'>
          <p>SUMMER 2020</p>
          <h1 className='2xl:text-6xl xl:text-5xl md:text-4xl'>NEW COLLECTION</h1>
          <h3 className='font-normal 2xl:text-xl w-6/12'>We know how large objects will act, 
          but things on a small scale.</h3>
          <div className='b-btn'>
          <button className='px-6 py-3 bg-[#2DC071] text-2xl'>Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
