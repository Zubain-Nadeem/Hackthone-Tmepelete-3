import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <div>
      <div className='w-[1411px] h-[72px] mx-auto flex justify-between items-center'>
        <div>
          <img src="/images/nike-logo.svg" alt="" />
        </div>

        <div className='flex items-center gap-6'>
          <p>000 800 100 9538</p>
          <MdOutlineMessage className='text-2xl' />
          <FaBagShopping className='text-2xl'/>
        </div>

      </div>

    </div>
  )
}
