import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import { CiSearch } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { AiFillDislike } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEditLocation } from "react-icons/md";

export default function () {
  return (
    <div>
      <Header />
<main>
<div className='w-[1440px] h-[132px] flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-2xl'>GET HELP</h1>
           <div className='flex border border-gray-300 w-[457px] h-[56px] items-center justify-between px-3 mt-3'>
           <input type="text" placeholder='What can we help you with ? '  /> <CiSearch /> 
            </div> 
            

        </div>

      <div className='w-[1309px] h-[1098px] mx-auto  flex p-3 justify-between'>

        <div className=' w-[939px] h-[1042px]'>
            <h1 className='font-semiboldbold text-2xl'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
            <p className='mt-3'>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>

            <div className='w-[907px] h-[108px] mt-6 ml-6 leading-9'>
                <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                <p>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
                <p>Apples Pay</p>
            </div>

            <div className='w-[923px] h-[115px] leading-8 mt-4'>
                <p>Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</p>
                <div className='pl-5 '>
                <button className='bg-black text-white rounded-2xl py-2 px-3'>JOIN US</button>
                <button  className='bg-black text-white rounded-2xl py-2 px-3 ml-2'>SHOP NIKE</button>
                </div>
            </div>

            <div className='leading-10'>
                <h2 className='font-bold'>FAQs</h2>
               <div>
               <p className='font-bold'>Does my card need international purchases enabled?</p>
               <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
               </div>
                <p>Please note, some banks may charge a small transaction fee for international orders.</p>
                <div>
                <p className='font-bold'>Can I pay for my order with multiple methods?</p>
                <p>
                No, payment for Nike orders can't be split between multiple payment methods.</p>
                </div>

                <div>
                    <p className='font-bold'>What payment method is accepted for SNKRS orders?</p>
                    <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                </div>
                <div>
                    <p className='font-bold'>Why don't I see Apple Pay as an option?</p>
                    <p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
                </div>

                <div>
                    <p>Was this answer helpful ?</p>
                    <div className='flex gap-2'>
                    <AiFillLike className='text-3xl' />
                    <AiFillDislike className='text-3xl'  />
                    </div>
                </div>

                <div>
                    <p className='text-gray-500'>Relate</p>
                    <div className='pl-6'>
                        <p className='underline font-bold'>WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
                        <p  className='underline font-bold'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
                    </div>
                </div>

            </div>

        </div>

        <div className='w-[313px] h-[1042px] border-l-2 border-gray-400 text-center'>
        <h1 className='flex justify-center font-bold text-3xl'>Contact Us</h1>
        
        <div className='mt-4 leading-8 text-center ml-7 '>
           
            <FaMobileAlt className='flex mx-auto text-5xl mt-3 ' />
            
            
                <p>000 800 919 0566</p>
                <p className='flex ' >Products & Orders: 24 hours a day, 7 days a week
                Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
            </div>

            <div className='mt-20 leading-8 text-center ml-7 '>
           
            <RiMessage2Fill  className='flex mx-auto text-6xl mt-3 ' />
            
            
                <p className='font-bold' >24 Hour a day</p>
                <p>7 days a week</p>
            </div>

            <div className='mt-20 leading-8 text-center ml-7'>
           
            <FaMessage   className='flex mx-auto  text-5xl mt-3 ' />
           
           
              <p className='text-base mt-3'>We'll reply within
              five business days</p>
           </div>

           <div className='mt-20 leading-8 text-center ml-7 '>
           
           <MdEditLocation   className='flex mx-auto  text-5xl mt-3 ' />
           
           <p className='font-bold mt-3'>STORE LOCATOR</p>
           <p>Find Nike retail stores near you</p>
              
           </div>

        </div>


      </div>
</main>
      <Footer />
    </div>
  )
}
