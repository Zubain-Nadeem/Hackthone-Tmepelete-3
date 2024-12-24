import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <header className='bg-white text-black w-[1440px] h-[96px] flex flex-col items-center'>
                <div className='bg-gray-100 w-full h-[36px] text-black flex justify-between px-2 items-center '>
                    <img src="/images/vector.png" alt="Vector" className='w-[19px] h-[19px]' />
                    <ul className='flex list-none gap-6 text-base'>
                        <li> <a href="#" className='px-3'>Find a Store</a>|</li>
                        <li> <a href="#" className='px-3'>Help</a>|</li>
                        <li> <a href="#" className='px-3'>Join us</a>|</li>
                        <li> <a href="#" >Sign in</a></li>
                    </ul>
                </div>
                {/* main-nav */}
                <nav className='bg-white text-black w-full h-[60px] flex justify-between items-center'>
                    <img src="/images/nike-logo.svg" alt="Nike-Logo" className='w-[58px] h-[20px]' />
                    <ul className='flex list-none gap-6 text-base font-bold'>
                        <li> <a href="#">New & Feature</a> </li>
                        <li> <a href="#">Men</a> </li>
                        <li> <a href="#">Women</a> </li>
                        <li> <a href="#">Sale</a> </li>
                        <li> <Link href="/Product">SNKRS</Link>  </li> 
                    </ul>
                    <div className='flex items-center space-x-6'>
                        <div className='hidden lg:flex items-center rounded bg-gray-100 px-3 py-2'>
                            <input
                                type="text"
                                placeholder='What are you looking for?'
                                className='outline-none bg-gray-100 text-sm'
                            />
                            <IoSearch />
                        </div>
                        <IoMdHeart />
                        <FaShoppingCart />
                    </div>
                </nav>
            </header>
    </div>
  )
}
