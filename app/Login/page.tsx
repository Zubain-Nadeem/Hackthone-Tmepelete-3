import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <Header />

      <main>
      <div className='w-[380px] h-[489px] mx-auto mt-5'>
        <div className='w-[324px] h-[17px]  mx-auto flex justify-center'>
            {/* <img src="/images/nike-logo.svg" alt="" /> */}
             <Image src={"/images/nike-logo.svg"} alt='logo' width={10} height={10} />
        </div>

        <h1 className='text-center font-semibold text-2xl'>YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
        
        <div className='w-[324px] h-[325px] mx-auto mt-5'>
            <input type="email" name='email' placeholder='Email Address' className='border border-gray-300 w-full h-11 pl-3' /> <br /><br />
            <input type="password" name='password' placeholder='Password'  className='border border-gray-300 w-full h-11 pl-3' /><br /><br />

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'><input type="checkbox" name='Keep me signed in'  /> <span className='text-sm text-gray-400'>Keep me signed in</span></div>
                <button className='text-sm text-gray-400'>Forget Your Password?</button>
            </div>

                <div className='w-[324px] text-center mx-auto mt-4'>
                    <p className='text-base text-gray-400'>By logging in, you agree to Nike's <span className='underline'>Privacy Policy</span> <span className='underline'>and Terms of Use.</span></p>
                </div>

                <div className='mt-9'>
                <button className='bg-black text-white w-full  py-2 px-3' >Find Your Shoe</button>
                </div>
                <div className='text-gray-400 text-center mt-1'>
                    Not A Member <a href='#' className='underline text-black'>Join Us</a>
                </div>
      </div>
      </div>
      </main>

      <Footer />
    </div>
  )
}
