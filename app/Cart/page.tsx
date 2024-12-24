import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import { CiHeart } from "react-icons/ci";
import Image from 'next/image';
import { RiDeleteBin6Line } from "react-icons/ri";

export default function page() {
  return (
    <div>
      <Header />
      <main>
      <div className='w-[1100] h-[632px] flex justify-evenly '>

<div className='w-[733px] h-[547px]  mt-7' >
  <div className='w-[717px] h-[63px] px-3 bg-gray-200  mx-auto'>
    <h1 className='font-semibold'>Free Delivery</h1>
   <div className='flex'>
   <p>Applies to orders of ₹ 14 000.00 or more.</p> &nbsp; &nbsp; <a href="#" className='underline'>View Details</a>
   </div>

  </div>
  <h1 className='text-2xl font-bold ml-3'>Bag</h1>

  <div className='w-[717px] h-[218px] border-b-2 border-gray-300 mx-auto py-6 flex'>
    {/* <img src="/images/cart.svg" alt="" /> */}
     <Image src={"/images/cart.svg"} alt='cart' width={717} height={218} />

    <div className='leading-8 pl-3'>
      <h2>Nike Dri-FIT ADV TechKnit Ultra</h2>
      <p className='text-gray-400 text-sm'>Men's Short-Sleeve Running Top</p>
      <p className='text-gray-400  text-sm'>Ashen Slate/Cobalt Bliss</p>

      <div className=' mt-3'>
      <button className='text-gray-300 border border-gray-300 w-[97px] h-[28px] '>Size L</button>
      <button  className='text-gray-300 border border-gray-300 w-[118px] h-[28px] ml-2'>Quantity 1</button>
      </div>

      <div className='flex gap-3 text-2xl mt-3'>
      <CiHeart />
      <RiDeleteBin6Line />
      </div>
    </div>

    <div className='flex ml-[160px]'>
      <button className='w-[123px] h-[28px]'>MRP: ₹ 3 895.00</button>
    </div>
  </div>

  <div className='w-[717px] h-[218px] border-b-2 border-gray-300 mx-auto py-6 flex'>
    {/* <img src="/images/Rectangle (8).svg" alt="" /> */}
     <Image src={"/images/Rectangle (8).svg"} alt='product' width={717} height={218} />

    <div className='leading-8 pl-3'>
      <h2>Nike Air Max 97 SEa</h2>
      <p className='text-gray-400 text-sm'>Men's Shoes</p>
      <p className='text-gray-400  text-sm'>Flat Pewter/Light Bone/Black/White</p>

      <div className=' mt-3'>
      <button className='text-gray-300 border border-gray-300 w-[97px] h-[28px] '>Size 8</button>
      <button  className='text-gray-300 border border-gray-300 w-[118px] h-[28px] ml-2'>Quantity 1</button>
      </div>

      <div className='flex gap-3 text-2xl mt-3'>
      <CiHeart />
      <RiDeleteBin6Line />
      </div>
    </div>

    <div className='flex ml-[160px]'>
      <button className='w-[133px] h-[28px]'>MRP: ₹ 16995.00</button>
    </div>
  </div>

</div>




<div className='w-[350px] h-[295px] mt-7 leading-10 '>
    <h1 className='font-semibold'>Summery</h1>

    <div className='leading-8 pb-2 mt-4 border-b-2 border-gray-200'>
      <div className='flex justify-between'>
        <span>Subtotal</span>
        <span>₹ 20 890.00</span>
      </div>
      <div className='flex justify-between'>
        <span>Estimated Delivery & Handling</span>
        <span>Free</span>
      </div>

    </div>

    <div className='flex justify-between border-b-2 border-gray-200 py-3'>
        <span>Total</span>
        <span>₹ 20 890.00</span>
      </div>

      <div className='w-[334px] h-[60px] bg-black text-white flex justify-center items-center text-lg mx-auto mt-4 text-center rounded-3xl'>
        <button>Members Check OUt</button>
      </div>
</div>

</div>
      </main>

      <Footer />
    </div>
  )
}
