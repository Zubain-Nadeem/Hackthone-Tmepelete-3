import React from 'react'
import Image from 'next/image'

export default function Main() {
  return (
    <div>
      <div className='bg-gray-100 text-black text-center w-[1440px] h-[58px] gap-4'>
                <h3>Hello Nike App</h3>
                Download the app to access Nike{' '}
                <a href="#" className='underline'>Your Great</a>
            </div>

            <main className=' w-[1344px] h-[977px] mx-auto'>
  {/* <img src="/images/hero.png" alt="Hero-Logo" className='w-full h-[700px]' /> */}
  <Image src={"/images/hero.png"} alt='heroimage' height={700} width={1344}/>


  <div className='text-black leading-9'>
      <h4 className='text-center'>First Look</h4>
      <h1 className='text-center text-[33px] py-3 font-bold'> NIKE AIR MAX PULSE</h1>
      <p className='text-center w-[50%] mx-auto'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
      —designed to push you past your limits and help you go to the max.</p>
      <div className=' w-[50%]  mx-auto flex justify-center py-2 gap-2'>
      <button className='bg-black text-white rounded-2xl py-2 px-3'>Notify Me</button>
      <button  className='bg-black text-white rounded-2xl py-2 px-3'>Shop Air Max</button>
      </div>
  </div>

    </main>

    <div className='w-[1440px] h-[604px] p-3 gap-2 '>
        <h3 className='text-xl'>Best of Air Max</h3>

        <div className='flex justify-evenly'>
        <div className='w-[441px] h-[510px] '>
            {/* <img src="/images/porduct1.svg" alt="" /> */}
            <Image src={"/images/porduct1.svg"} alt='shoe1' width={441} height={450}/>

            <div className='flex justify-between p-1'>
                <div >
                <p className='text-black text-base'>Nike Air Max Pulse</p>
                <p className='text-gray-300 text-base'>Women's Shoes</p>
                </div>
                <div>
                    $13995
                </div>
            </div>

        </div>
        <div className='w-[441px] h-[510px] '>
            {/* <img src="/images/porduct1.svg" alt="" /> */}
            <Image src={"/images/porduct1.svg"} alt='shoe1' width={441} height={450}/>

            <div className='flex justify-between p-1'>
                <div >
                <p className='text-black text-base'>Nike Air Max Pulse</p>
                <p className='text-gray-300 text-base'>Men Shoes</p>
                </div>
                <div>
                    $13998
                </div>
            </div>

        </div>
        <div className='w-[441px] h-[510px] '>
            {/* <img src="/images/porduct1.svg" alt="" /> */}
            <Image src={"/images/porduct1.svg"} alt='shoe1' width={441} height={450}/>

            <div className='flex justify-between p-1'>
                <div >
                <p className='text-black text-base'>Nike Air Max Pulse</p>
                <p className='text-gray-300 text-base'>Men Shoes</p>
                </div>
                <div>
                    $16995
                </div>
            </div>

        </div>
      
        </div>
        </div>

        <div className='w-[1344px] h-[977px] mx-auto'>
        <h3>Featured</h3>
        <div>
            {/* <img src="/images/feature.svg" alt="" /> */}
            <Image src={"/images/feature.svg"} alt='shoe1' width={1344} height={700}/>
        </div>

      <div className='text-center mt-5'>
        <h1 className='text-black text-4xl font-bold'>STEP INTO WHAT FEELS GOOD</h1>
      </div>

      <div className='text-center my-4'>
        <p>Cause everyone should know the feeling of running in that perfect pair.</p>
      </div>
      <div className='flex justify-center'>
        <button className='bg-black text-white rounded-2xl py-2 px-3' >Find Your Shoe</button>
      </div>
    </div>


    <div className=' w-[1344px] h-[561px] mx-auto'>
         <h3 className='text-xl'>Gear Up</h3>
         <div className='mt-8'>
         <div className='flex justify-evenly'>
        <div className='w-[300px] h-[393px] '>
            {/* <img src="/images/one.svg" alt="" /> */}
            <Image src={"/images/one.svg"} alt='shoe1' width={300} height={301}/>
            <div className='flex justify-between p-1'>
                <div >
                <p className='text-black text-base'>Nike Dri-FIT ADV TechKnit Ultra</p>
                <p className='text-gray-300 text-base'>Men's Short-Sleeve Running Top</p>
                </div>
                <div>
                    $13995
                </div>
            </div>

        </div>
        <div className='w-[300px] h-[393px] '>
            {/* <img src="/images/two.svg" alt="" /> */}
            <Image src={"/images/two.svg"} alt='shoe1' width={300} height={301}/>

            <div className='flex justify-between p-1'>
                <div >
                <p className='text-black text-base'>Nike Dri-FIT Challenger</p>
                <p className='text-gray-300 text-base'>Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
                </div>
                <div>
                    $198
                </div>
            </div>

        </div>
        <div className='w-[300px] h-[393px] '>
            {/* <img src="/images/three.svg" alt="" /> */}
            <Image src={"/images/three.svg"} alt='shoe1' width={300} height={301}/>

            <div className='flex justify-between p-1'>
                <div >
                <p className='text-black text-base'>Nike Dri-FIT ADV Run Division</p>
                <p className='text-gray-300 text-base'>Women's Long-Sleeve Running Top</p>
                </div>
                <div>
                    $1295
                </div>
            </div>

        </div>

        <div className='w-[300px] h-[393px] '>
            {/* <img src="/images/four.svg" alt="" /> */}
            <Image src={"/images/four.svg"} alt='shoe1' width={300} height={301}/>

            <div className='flex justify-between p-1'>
                <div >
                <p className='text-black text-base'>Nike Fast</p>
                <p className='text-gray-300 text-base'>Women's Mid-Rise 7/8 Running Leggings with Pockets</p>
                </div>
                <div>
                    $5495
                </div>
            </div>

        </div>
      
        </div>

         </div>
    </div>


    <div className='w-[1344px] h-[977px] mx-auto'>
        <h3>Don't Miss</h3>
        <div>
            {/* <img src="/images/dont.svg" alt="" /> */}
            <Image src={"/images/dont.svg"} alt='dont' width={1344} height={700}/>

        </div>

      <div className='text-center mt-5'>
        <h1 className='text-black text-4xl font-bold'>FLIGHT ESSENTIALS</h1>
      </div>

      <div className='text-center my-4'>
        <p>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
      </div>
      <div className='flex justify-center'>
        <button className='bg-black text-white rounded-2xl py-2 px-3' >Shop</button>
      </div>
    </div>

    <div className='w-[1344px] h-[592px] mx-auto '>
    <h3 className='text-xl'>The Essential</h3>
<div className='flex justify-evenly mt-3'>
    
<div className='w-[440px] h-[540px]'>
    {/* <img src="/images/ess1.svg" alt="" /> */}
    <Image src={"/images/ess1.svg"} alt='Essential' width={440} height={540}/>

    </div>
    <div className='w-[440px] h-[540px]'>
    {/* <img src="/images/ess2.png" alt="" /> */}
    <Image src={"/images/ess2.png"} alt='Essential' width={440} height={540}/>

    </div>
    <div className='w-[440px] h-[540px]'>
    {/* <img src="/images/ess3.png" alt="" /> */}
    <Image src={"/images/ess3.png"} alt='Essential' width={440} height={540}/>

    </div>
</div>
</div>

      
    </div>
  )
}
