import Image from 'next/image'
import React from 'react'
import Link from 'next/link';


export default function Header() {
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30 p-3'>
        <div className = 'flex justify-between items-centre max-w-6ml mx-auto'>
            {/* Logo */}
            <Link href ='/' className = 'hidden lg:inline-flex'>
                <Image 
                    src = '/Logo-Instagram-1.png'
                    alt = 'Logo' 
                    width ={96} 
                    height = {96}
                />
            </Link>

            <Link href ='/' className='lg:hidden'>
                <Image 
                    src = '/logo-insta.png'
                    alt = 'Logo' 
                    width ={40} 
                    height = {40}
                />
            </Link>


            {/* Search input */}
            <input type ="text" placeholder ='Search'
            // bg, border color for search bar set to gray, borders are rounded, text set to small, width to full, padding to the y aixs is 2 and padding to x axis is 4.
            className='bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[310px]'/>

            {/* menu items */}
            <button className='text-sm font-semibold text-blue-500'>Log In</button>
        </div>
    </div>
  )
}
