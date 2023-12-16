import Image from 'next/image'
import React from 'react'
import card1 from '@/app/assets/images/home/card1.png'
import card2 from '@/app/assets/images/home/card2.png'
import card3 from '@/app/assets/images/home/card3.png'
import card4 from '@/app/assets/images/home/card4.png'
import card5 from '@/app/assets/images/home/card5.png'
import card6 from '@/app/assets/images/home/card6.png'


type Props = {}

const Card = (props: Props) => {
  return (
    <div className='relative flex flex-wrap gap-10 justify-center'>
        <div className='relative flex flex-row gap-4 '>
            <Image className='  w-[250px] h-[250px]' src={card1} alt='' />
            <div className='opacity-0 hover:opacity-100  absolute xsm:w-[100%] sm:w-[250px] h-[250px] bg-black/30 transition-all 300ms ease-in-out text-white flex flex-col p-4 text-left gap-2  '>
                <h6 className=' delay-200 text-[12px]'>Claren xien</h6>
                <h3 className='text-[16px]'>Camp Stool // <br /> Wooden</h3>
                <p className='underline underline-offset-2 text-[#fbb710] text-[12px]'>₦3,500</p>
            </div>
            {/* <Image className='w-[250px] h-[250px]' src={card2} alt='' />
            <Image className='w-[250px] h-[250px]' src={card3} alt='' /> */}
        </div>
        <div className='relative flex flex-row gap-4 '>
            <Image className='  w-[250px] h-[250px]' src={card1} alt='' />
            <div className='opacity-0 hover:opacity-100  absolute  xsm:w-[100%] sm:w-[250px] h-[250px] bg-black/30 transition-all 300ms ease-in-out text-white flex flex-col p-4 text-left gap-2'>
                <h6 className=' delay-200 text-[12px]'>Claren xien</h6>
                <h3 className='text-[16px]'>Camp Stool // <br /> Wooden</h3>
                <p className='underline underline-offset-2 text-[#fbb710] text-[12px]'>₦3,500</p>
            </div>
            {/* <Image className='w-[250px] h-[250px]' src={card2} alt='' />
            <Image className='w-[250px] h-[250px]' src={card3} alt='' /> */}
        </div>
        <div className='relative flex flex-row gap-4'>
            <Image className='  w-[250px] h-[250px]' src={card1} alt='' />
            <div className='opacity-0 hover:opacity-100  absolute  xsm:w-[100%] sm:w-[250px] h-[250px] bg-black/30 transition-all 300ms ease-in-out text-white flex flex-col p-4 text-left gap-2'>
                <h6 className=' delay-200 text-[12px]'>Claren xien</h6>
                <h3 className='text-[16px]'>Camp Stool // <br /> Wooden</h3>
                <p className='underline underline-offset-2 text-[#fbb710] text-[12px]'>₦3,500</p>
            </div>
            {/* <Image className='w-[250px] h-[250px]' src={card2} alt='' />
            <Image className='w-[250px] h-[250px]' src={card3} alt='' /> */}
        </div>
        <div className='relative flex flex-row gap-4 '>
            <Image className='  w-[250px] h-[250px]' src={card1} alt='' />
            <div className='opacity-0 hover:opacity-100  absolute  xsm:w-[100%] sm:w-[250px] h-[250px] bg-black/30 transition-all 300ms ease-in-out text-white flex flex-col p-4 text-left gap-2'>
                <h6 className=' delay-200 text-[12px]'>Claren xien</h6>
                <h3 className='text-[16px]'>Camp Stool // <br /> Wooden</h3>
                <p className='underline underline-offset-2 text-[#fbb710] text-[12px]'>₦3,500</p>
            </div>
            {/* <Image className='w-[250px] h-[250px]' src={card2} alt='' />
            <Image className='w-[250px] h-[250px]' src={card3} alt='' /> */}
        </div>
        <div className='relative flex flex-row gap-4 '>
            <Image className='  w-[250px] h-[250px]' src={card1} alt='' />
            <div className='opacity-0 hover:opacity-100  absolute  xsm:w-[100%] sm:w-[250px] h-[250px] bg-black/30 transition-all 300ms ease-in-out text-white flex flex-col p-4 text-left gap-2'>
                <h6 className=' delay-200 text-[12px]'>Claren xien</h6>
                <h3 className='text-[16px]'>Camp Stool // <br /> Wooden</h3>
                <p className='underline underline-offset-2 text-[#fbb710] text-[12px]'>₦3,500</p>
            </div>
            {/* <Image className='w-[250px] h-[250px]' src={card2} alt='' />
            <Image className='w-[250px] h-[250px]' src={card3} alt='' /> */}
        </div>
        <div className='relative flex flex-row gap-4 '>
            <Image className='  w-[250px] h-[250px]' src={card1} alt='' />
            <div className='opacity-0 hover:opacity-100  absolute  xsm:w-[100%] sm:w-[250px] h-[250px] bg-black/30 transition-all 300ms ease-in-out text-white flex flex-col p-4 text-left gap-2 '>
                <h6 className=' delay-200 text-[12px]'>Claren xien</h6>
                <h3 className='text-[16px]'>Camp Stool // <br /> Wooden</h3>
                <p className='underline underline-offset-2 text-[#fbb710] text-[12px]'>₦3,500</p>
            </div>
            {/* <Image className='w-[250px] h-[250px]' src={card2} alt='' />
            <Image className='w-[250px] h-[250px]' src={card3} alt='' /> */}
        </div>
        
        
    </div>
  )
}

export default Card