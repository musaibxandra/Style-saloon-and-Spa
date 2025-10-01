'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navbarLinks } from '@/constants';
import { Button } from './ui/button';

const Navbar = () => {
  return (

    <header className='px-5 py-3 shadow-sm border-1'>
        <nav className='flex items-center justify-between md:justify-around'>
          <div className='flex'>
            <Link href="/"
            className='flex cursor-pointer gap-2 items-center'>
              <Image
                src="/icons/logo_copy.png"
                alt="Style logo"
                width={64}
                height={24}>
              </Image>
                <span>Style Saloon & Spa</span>
            </Link>
          </div>
          <div>
            <Image
            src="/icons/hamburger.svg"
            alt="Menu Icon"
            width={28}
            height={28}
            className='cursor-pointer bg-white md:hidden'>
            </Image>
          </div>
          <div className='hidden md:flex items-center gap-6'>
            {
            navbarLinks.map((item) => {
                return (
                  <Link 
                  href={item.route} 
                  key={item.label}
                  className='cursor-pointer hover:underline'
                  >
                    {item.label}
                  </Link>
                )
              })
            }
            <Button className='ml-6 cursor-pointer'>
              <span>Login</span>
            </Button>
            <Button>
              <span>Book an Appointment</span>
            </Button>
          </div>
        </nav>
    </header>
      
  )
}

export default Navbar
