import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Header from '../Home/Header'
import Image from 'next/image';
import Footer from '../Home/Footer'

export default function page() {
  return (
    <div>
      <Header />

      <main>
      <div>
      
      <div className='w-[1440px] h-[1173px] flex justify-center mt-24 '>

          <div className='w-[653px] h-[653px]'>
              {/* <img src="/images/Detail.svg" alt="" /> */}
               <Image src={"/images/Detail.svg"} alt='shoes product' width={653} height={653} />

          </div>

          <div className='w-[376px] h-[1041px] ml-[155px]'>
             
              <div className=' mt-[48px]'>
              <h1 className='text-5xl font-medium'>Nike Air Force 1 
              PLT.AF.ORM</h1>
              <p>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
              <div>
                  <p className='w-[294px] h-[90px] mt-[32px] font-bold text-3xl'>$ 8695.00</p>
              </div>
              <button className='bg-black flex items-center gap-3 text-white rounded-2xl py-2 px-3' ><FaShoppingCart /> Add to Cart</button>
              </div>

          </div>

      </div>


  </div>
      </main>

      <Footer />
    </div>
  )
}
