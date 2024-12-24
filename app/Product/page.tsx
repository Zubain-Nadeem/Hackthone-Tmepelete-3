import React from 'react'
import Header from '../Home/Header'
import { PiSlidersHorizontal } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Footer from '../Home/Footer'
import Image from 'next/image'

export default function page() {
    return (
        <div>
            <Header />
            <main>
                <div>
                    <div className='flex justify-between text-black bg-white items-center mt-14 mb-3'>
                        <h1 className='text-xl font-bold'>New (500)</h1>
                        <div className='flex items-center'>
                            <p className='text-base mr-4'>Hide Filters  </p>  <PiSlidersHorizontal className='text-lg' />
                            <p className='text-base mx-2'>Shor By </p> <RiArrowDropDownLine className='text-3xl' />
                        </div>

                    </div>


                    <div className='w-[1440px] h-auto flex justify-between'>

                        <div className=' w-[260px] h-[849px]'>
                            <div className=' w-[192px] h-[400px] border-b-2 border-gray-400 mx-auto  leading-7 font-bold'>
                                <ul>
                                    <li>Shoes</li>
                                    <li>Sports Bras</li>
                                    <li>Tops & T-Shirts</li>
                                    <li>Hoodies & Sweatshirts</li>
                                    <li>Jackets</li>
                                    <li>Trousers & Tights</li>
                                    <li>Shorts</li>
                                    <li>Tracksuits</li>
                                    <li>Jumpsuits & Rompers</li>
                                    <li>Skirts & Dresses</li>
                                    <li>Socks</li>
                                    <li>Accessories & Equipment</li>
                                </ul>
                            </div>

                            <div className='w-[192px] h-[280px] border-b-2 border-gray-400 mx-auto '>
                                <h2 className='lg font-bold '>Gender</h2>
                                <label>
                                    <input type="checkbox" name='Gender' value='Male' /> Male
                                </label> <br />
                                <label>
                                    <input type="checkbox" name='Gender' value='Female' /> Female
                                </label> <br />
                                <label>
                                    <input type="checkbox" name='Gender' value='Unisex' /> Unisex
                                </label> <br />

                                <div className='mt-6'>
                                    <h2 className='lg font-bold '>Kids</h2>
                                    <label>
                                        <input type="checkbox" name='Gender' value='Boys' /> Boys
                                    </label> <br />
                                    <label>
                                        <input type="checkbox" name='Gender' value='Girls' /> Girls
                                    </label> <br />
                                </div>
                            </div>
                            <div className='w-[192px] h-[235px] border-b-2 border-gray-400 mx-auto'>

                                <h2 className='lg font-bold '>Shop By Price</h2>
                                <label>
                                    <input type="checkbox" name='price' /> under $78655
                                </label> <br />
                                <label>
                                    <input type="checkbox" name='price' /> $898983
                                </label> <br />
                            </div>

                        </div>

                        <div className='w-[1092px] h-[5700px]'>

                            <div className='flex justify-between mt-3'>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle.svg" alt="" /> */}
                                    <Image src={"/images/Rectangle.svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div >
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (1).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (1).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Court Vision Low Next Nature</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 4 995.00</p>
                                    </div>

                                </div>
                                <div className='w-[348px] h-[533px]'>
                                    {/* <img src="/images/Rectangle (2).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (2).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 PLT.AF.ORM</p>
                                        <p className='text-gray-300 text-sm'>Women's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 8 695.00</p>
                                    </div>

                                </div>
                            </div>

                            <div className='flex justify-between  mt-3'>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (3).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (3).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 React</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 13 295.00</p>
                                    </div>

                                </div >
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (4).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (4).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Air Jordan 1 Elevate Low</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 11 895.00</p>
                                    </div>

                                </div>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (5).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (5).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Standard Issue</p>
                                        <p className='text-gray-300 text-sm'>Women's Basketball Jersey</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 2 895.00</p>
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-between  mt-3'>
                                <div className='w-[348px] h-[533px]'>
                                    {/* <img src="/images/Rectangle (6).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (6).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Dunk Low Retro SE</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 9 695.00</p>
                                    </div>

                                </div >
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (7).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (7).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Sustainable Materials</h3>
                                        <p>Nike Dri-FIT UV Hyverse</p>
                                        <p className='text-gray-300 text-sm'>Men's Short-Sleeve Graphic Fitness Top</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 2 495.00</p>
                                    </div>

                                </div>
                                <div className='w-[348px] h-[533px]'>
                                    {/* <img src="/images/Rectangle (8).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (8).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-between  mt-3'>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (9).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (9).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div >
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (10).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (10).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                                <div className='w-[348px] h-[533px] border'>
                                    {/* <img src="/images/Rectangle (11).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (11).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-between  mt-3'>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (12).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (12).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div >
                                <div className='w-[348px] h-[533px]'>
                                    {/* <img src="/images/Rectangle (13).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (13).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (14).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (14).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-between  mt-3'>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (15).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (15).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div >
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/rec.png" alt="" /> */}
                                    <Image src={"/images/rec.png"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (16).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (16).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-between  mt-3'>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (17).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (17).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div >
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (18).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (18).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (19).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (19).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-between  mt-3'>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (20).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (20).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div >
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (21).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (21).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (22).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (22).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-between  mt-3'>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (23).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (23).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div >
                                <div className='w-[348px] h-[533px]'>
                                    {/* <img src="/images/Rectangle (24).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (24).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (25).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (25).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-between  mt-3'>
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (26).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (26).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div >
                                <div className='w-[348px] h-[533px] '>
                                    {/* <img src="/images/Rectangle (27).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (27).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                                <div className='w-[348px] h-[533px]'>
                                    {/* <img src="/images/Rectangle (28).svg" alt="" /> */}
                                    <Image src={"/images/Rectangle (28).svg"} alt='shoes product' width={348} height={348} />
                                    <div className='mt-3 leading-7'>
                                        <h3 className='text-orange-500'>Just in</h3>
                                        <p>Nike Air Force 1 Mid '07</p>
                                        <p className='text-gray-300 text-sm'>Men's Shoes</p>
                                        <p className='text-gray-300 text-sm'>1 Colour</p>
                                        <p className='mt-3 font-bold'>MRP : ₹ 10 795.00</p>
                                    </div>

                                </div>
                            </div>

                            <div className='w-[1092px] h-[259px] p-4' >
                                <h2 className='text-3xl font-bold'>Related Catagries</h2>
                                <div className='mt-5 space-x-2 space-y-3'>
                                    <button className='py-2 px-5 rounded-3xl border border-gray-400'>Best Selling Product</button>
                                    <button className='py-2 px-5 rounded-3xl border border-gray-400'>Best Shoes</button>
                                    <button className='py-2 px-5 rounded-3xl border border-gray-400'>Best Selling Product</button>
                                    <button className='py-2 px-5 rounded-3xl border border-gray-400'>Best Selling Product</button>
                                    <button className='py-2 px-5 rounded-3xl border border-gray-400'>Best Selling Product</button>
                                    <button className='py-2 px-5 rounded-3xl border border-gray-400'>Best Selling Product</button>
                                    <button className='py-2 px-5 rounded-3xl border border-gray-400'>Best Selling Product</button>
                                    <button className='py-2 px-5 rounded-3xl border border-gray-400'>Best Selling Product</button>
                                    <button className='py-2 px-5 rounded-3xl border border-gray-400'>Best Selling Product</button>
                                    <button className='py-2 px-5 rounded-3xl border border-gray-400'>Best Selling Product</button>
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
