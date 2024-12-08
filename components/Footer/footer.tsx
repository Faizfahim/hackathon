import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
    <footer>
      <div className='top-footer bg-[#FAFAFA]'>
        <div className='container'>
          <div className='flex justify-between py-10'>
            <h1 className='text-2xl font-bold'>Bandage</h1>
            <div className='flex gap-5 text-2xl text-[#23A6F0]'>
              <Link href=''><FaFacebook /></Link>
              <Link href=''><FaInstagram /></Link>
              <Link href=''><FaTwitter /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='main-footer p-12'>
        <div className='container'>
          <div className='grid'>
            <div className='col-start-1 col-end-2 f-box'>
              <h1>Company Info</h1>
              <div className='footer-navigations'>
                <Link href="">About Us</Link>
                <Link href=''>Carrier</Link>
                <Link href=''>We are hiring</Link>
                <Link href=''>Blog</Link>
              </div>
            </div>
            <div className='col-start-2 col-end-4 f-box'>
              <h1>Legal</h1>
              <div className='footer-navigations'>
                <Link href="">About Us</Link>
                <Link href=''>Carrier</Link>
                <Link href=''>We are hiring</Link>
                <Link href=''>Blog</Link>
              </div>
            </div>
            <div className='col-start-4 col-end-6 f-box'>
              <h1>Features</h1>
              <div className='footer-navigations'>
                <Link href="">Business Marketing</Link>
                <Link href=''>User Analytic</Link>
                <Link href=''>Live Chat</Link>
                <Link href=''>Unlimited Support</Link>
              </div>
            </div>
            <div className='col-start-6 col-end-8 f-box'>
              <h1>Resources</h1>
              <div className='footer-navigations'>
                <Link href="">IOS & Android</Link>
                <Link href=''>Watch a Demo</Link>
                <Link href=''>Customers</Link>
                <Link href=''>API</Link>
              </div>
            </div>
            <div className='col-start-8 col-end-12 f-box'>
              <h1>Get In Touch</h1>
              <div className='f-box'>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="email" placeholder="Email" />
                  <Button type="submit">Subscribe</Button>
                </div>
                <p className='text-[#737373]'>Lore imp sum dolor Amit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='f-bottom bg-[#FAFAFA] py-[25px]'>
        <div className='container '>
          <p className='text-[#737373]'>Made With Love By Finland All Right Reserved </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
