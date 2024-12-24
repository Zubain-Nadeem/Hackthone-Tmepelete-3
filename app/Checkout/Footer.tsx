import React from 'react'
import { FaLocationPin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
     
    <footer className='w-[1411px] h-[51px] bg-black flex justify-between'>

      <div className='flex text-white gap-4 items-center'>
        <div className='text-white flex items-center'>
        <FaLocationPin className='text-white' /> <span>India</span>
        </div>
        <div className='text-gray-300'>
          <p>© 2023 NIKE, Inc. All Rights Reserved</p>
        </div>

        <div className=' gap-3 flex  text-gray-300'>
         <p>Terms of us</p>
         <p>Terms of sale</p>
         <p>Privacy Policy</p>

        </div>
      </div>

      <div className='w-[601px] h-[27px] flex ml-6'>
        <img src="/images/Visa.svg" alt="" />
        <img src="/images/Visa-electronic.svg" alt="" />
        <img src="/images/master-card.svg" alt="" />
        <img src="/images/Mestro.svg" alt="" />
        <img src="/images/American-express.svg" alt="" />
        <img src="/images/Diners-club.svg" alt="" />
        <img src="/images/Discover.svg" alt="" />
        <img src="/images/Pay.svg" alt="" />
        <img src="/images/Upi.svg" alt="" />
        <img src="/images/Jcb.svg" alt="" />
      
      </div>

    </footer>
    </div>
  )
}
