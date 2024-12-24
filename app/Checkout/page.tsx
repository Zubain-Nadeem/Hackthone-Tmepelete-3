import React from 'react'

import { IoBagCheck } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Header from './Header';
import Footer from './Footer';

export default function page() {
  return (
    <div>
      <Header />
<main>
<div className='w-[880px] h-[2076px]   mx-auto flex justify-evenly mt-3'>
        <div className='w-[440px] h-[2206px] '>
          <h2 className='text-xl font-semibold mt-3'>How would you like to get your order?</h2>
          <p className='text-gray-400 text-base mt-3'>Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <span className='underline'> Learn More</span> </p>

          <div className='w-[440px] h-[82px] mt-5 border border-black flex gap-5 px-2 rounded-2xl items-center '>
          <IoBagCheck className='text-2xl' />
          <p className='text-xl'>Deliver it</p>

          </div>
          <div className='w-[440px] h-[800px] mt-4'>
            <h1 className='text-xl font-semibold mt-3'>Enter your name and address:</h1>

            <div>
              <input type="text" name='first name' placeholder='First name' className='w-[440px] h-[56px] border border-gray-400 pl-2 mt-5'  />
              <input type="text" name='last name' placeholder='Last name' className='w-[440px] h-[56px] border border-gray-400 pl-2 mt-5'  />
              <input type="text" name='Address 1' placeholder='Address line 1' className='w-[440px] h-[56px] border border-gray-400 pl-2 mt-5'  />
              <input type="text" name='Addresss 2' placeholder='Address line 2' className='w-[440px] h-[56px] border border-gray-400 pl-2 mt-5'  />
              <input type="text" name='Address 3' placeholder='Address line 3' className='w-[440px] h-[56px] border border-gray-400 pl-2 mt-5'  />

              <div className='flex gap-4 mt-4'>
                <button className='w-[211px] h-[56px] border border-gray-400'>Postal Code</button>
                <button className='w-[211px] h-[56px] border border-gray-400'>Locality</button>
              </div>

              <div className='flex gap-4 mt-4'>
                <button className='w-[211px] h-[56px] border border-gray-400 flex justify-center items-center'>State/Terrority <RiArrowDropDownLine className='text-2xl ' /></button>
                <button className='w-[211px] h-[56px] border border-gray-400'>India</button>
              </div>

              <div className='mt-5 leading-9'>
                <input type="checkbox" name='profile' /> <span className='pl-3'>Save this address to my profile</span> <br /><br />
                <input type="checkbox" name='profile' /> <span className='pl-3'>Make this my preferred address</span>
              </div>

              <div className='mt-5'>
                <h2 className='font-semibold textlg'>What's your contact information?</h2>

                <div>
                <input type="email" name='email' placeholder='Email' className='w-[440px] h-[56px] border border-gray-400 pl-2 mt-5'  /><br />
                <input type="password" name='password' placeholder='Password' className='w-[440px] h-[56px] border border-gray-400 pl-2 mt-5'  /><br />
                </div>

                <div className='mt-5'>
                    <h2 className='font-semibold text-lg'>What's your PAN?</h2>

                    <div>
                    <input type="text" name='pan' placeholder='Pan' className='w-[440px] h-[56px] border border-gray-400 pl-2 mt-5'  /><br />
                    </div>
                    <p className='text-justify text-sm text-gray-300 flex justify-center'>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>

                    <div className='mt-5 '>
                <input type="checkbox" name='profile' /> <span className='pl-3 text-gray-300'>Save PAN details to Nike Profile</span> <br /><br />
                <input type="checkbox" name='policy' /> <span className='pl-3 text-gray-300'>I have read and consent to eShopWorld processing my information in accordance with the <span className='underline'>Privacy Statement </span> and <span className='underline'> Cookie Policy</span> . eShopWorld is a trusted Nike partner.</span>
              </div>
                </div>

                <div className='w-[440px] h-[60px] border-b-2 border-gray-400 bg-gray-300 text-gray-500 flex justify-center items-center text-lg mx-auto mt-10 text-center rounded-3xl'>
                <button className=''>Continue</button>
              </div>

              <div className='mt-14 border-t-2 border-gray-300'>
                <p className='mt-4'>Delivery</p>
              </div>
              <div className='mt-14 border-t-2 border-gray-300'>
                <p className='mt-4'>Shipping</p>
              </div>
              <div className='mt-14 border-t-2 border-gray-300'>
                <p className='mt-4'>Billing</p>
              </div>
              <div className='mt-14 border-t-2 border-gray-300'>
                <p className='mt-4'>Payment</p>
              </div>

              </div>
            </div>
            
          </div>

        </div>

        <div className='w-[320px] h-[721px] '>

            <div>
                <h2 className='text-xl font-semibold'>Order Summery</h2>

                <div className='leading-8 pb-2 mt-4 border-b-2 border-gray-200'>
              <div className='flex justify-between'>
                <span>Subtotal</span>
                <span>₹ 20 890.00</span>
              </div>
              <div className='flex justify-between'>
                <span>Delivery/Shipping</span>
                <span>Free</span>
              </div>

            </div>
            <div className='flex justify-between border-b-2 border-gray-200 py-3'>
                <span>Total</span>
                <span>₹ 20 890.00</span>
              </div>

              <div>
                <p className='text-sm text-gray-300 mt-3'>(The total reflects the price of your order, including all duties and taxes)</p>
              </div>
              
                    <div className='mt-5'>
                        <h2 className='font-semibold text-lg'>Arrives Mon, 27 Mar - Wed, 12 Apr</h2>
                    </div>

                    <div className='mt-6 flex justify-between '>
                        <div >
                        <img src="/images/cart.svg" alt="" className='w-[208px] h-[208px]' />
                        </div>

                        <div className='w-[100px] h-[178px]'>
                            <p>Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
                            <p className='text-gray-300 text-base'>Qty 1</p>
                            <p className='text-gray-300 text-base'>Size L</p>
                            <p className='text-gray-300 text-base'>$ 3 895.00</p>
                        </div>
                    </div>

                    <div className='mt-6 flex justify-between '>
                        <div >
                        <img src="/images/Frame (2).png" alt="" className='w-[208px] h-[208px]' />
                        </div>

                        <div className='w-[100px] h-[178px]'>
                            <p>Nike Air Max 97 SE Men's Shoes</p>
                            <p className='text-gray-300 text-base'>Qty 1</p>
                            <p className='text-gray-300 text-base'>Size UK 8</p>
                            <p className='text-gray-300 text-base'>$ 16 955.00</p>
                        </div>
                    </div>



            </div>

        </div>

      </div>
</main>
      <Footer />
    </div>
  )
}
