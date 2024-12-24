import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <Header />
<main>
<div>
      <div className='w-[380px] h-[833px] mx-auto  text-center'>

        <div className='flex justify-center mt-3'>
            {/* <img src="/images/nike-logo.svg" alt="" /> */}
             <Image src={"/images/nike-logo.svg"} alt='logo' width={324} height={17} />
        </div>

        <div className='flex justify-center  mt-3'>
            <h1 className='font-bold text-base'>BECOME A NIKE MEMBER</h1>
        </div>

        <div className='flex justify-center  mt-3'>
            <p className='text-base text-gray-400'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
        </div>
        <div className=' w-[324px] h-[561px] mx-auto'>
            <input type="email" name='email' placeholder='Email Address' className='w-[324px] h-[40px] rounded-md border border-gray-300 pl-1' /> <br /><br />
            <input type="password" name='password' placeholder='Password' className='w-[324px] h-[40px] rounded-md border border-gray-300 pl-1' /> <br /><br />
            <input type="text" name='name' placeholder='First Name' className='w-[324px] h-[40px] rounded-md border border-gray-300 pl-1' /> <br /><br />
            <input type="text" name='name' placeholder='Last Name' className='w-[324px] h-[40px] rounded-md border border-gray-300 pl-1' /> <br /><br />
            <input type="date" name='Dob' placeholder='Date Of Birth' className='w-[324px] h-[40px] rounded-md border border-gray-300 pl-1' /> <br />
            <span className='text-xs text-gray-400'>Get a Nike Member Reward every year on your Birthday.</span><br /><br />
            <select className='w-[324px] h-[40px] rounded-md border border-gray-300 pl-1'>
            <option value="India" className='text-gray-300'>India</option>
            </select>

            <div className='flex justify-between mt-2'>
            <button className='text-gray-300 border border-gray-300 w-[153px] h-[43px] '>Male</button>
            <button  className='text-gray-300 border border-gray-300 w-[153px] h-[43px] '>Female</button>
        </div>

        <div className='flex justify-center text-center items-center mt-4 text-sm text-gray-400'>
            <p>By creating an account, you agree to Nike's <span className='underline'>Privacy Policy</span> and Terms of Use.</p>
        </div>
        
        <div className='mt-3'>
        <button className='bg-black text-white w-full  py-2 px-3' >Join US</button>
        </div>
        </div>

        <div className='text-gray-400 text-center mt-1'>
                    Already a Member<a href='#' className='underline text-black'>Sign in</a>
                </div>
      </div>
    </div>
</main>
      <Footer />
    </div>
  )
}
