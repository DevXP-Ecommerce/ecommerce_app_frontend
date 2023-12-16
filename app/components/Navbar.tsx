import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/app/assets/images/navbar/logo.png'
import ham from '@/app/assets/images/navbar/ham.svg'
import pin from '@/app/assets/images/navbar/Pinterest.svg'
import gram from '@/app/assets/images/navbar/Instagram.svg'
import faceo from '@/app/assets/images/navbar/Facebook.svg'
import twit from '@/app/assets/images/navbar/Twitter.svg'
import Link from 'next/link'
import cancel from '@/app/assets/images/navbar/cancel.svg'
import { TiShoppingCart } from "react-icons/ti";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";



interface NavbarProps {
    view: string; // Change 'string' to the actual type of your 'view' prop
    setView: React.Dispatch<React.SetStateAction<string>>; // Change 'string' to the actual type of your 'view' prop
  }
  
  const Navbar: React.FC<NavbarProps> = ({ view, setView }) => {
    const [sideBar, setSidebar] = useState(false)

  return (
    <>
    <header className={`fixed w-[100%] h-[80px] xsm:px-[20px] sm:px-[40px] flex items-center justify-between shadow-md lg:hidden z-50 bg-white ${sideBar ? 'hidden' : 'flex'}`} >
      <Image src={logo} alt='' width={100} />
      <Image 
      onClick={()=>setSidebar(true)}
      src={ham} alt='' />
    </header>
    <div className={`${view == 'Search' ? ' delay-200 md:mt-60 xsm:mt-0 xsm:z-[60] md:z-[0] ' : null}  ${!sideBar ? 'w-[20rem] lg:flex flex-col gap-y-16 py-6 overflow-y-scroll h-screen px-[50px]  xsm:hidden scrollbar-none shadow-sm scroll-smooth grow-0 shrink-0' : 'lg:hidden xsm:flex flex-col px-[40px] md:w-[40%] xsm:w-[100%] py-12 h-screen xsm:gap-y-4 sm:gap-y-10 md:justify-between fixed overflow-y-scroll slide-in bg-white scrollbar-none shadow-sm z-[60]'}  `}>
    <Image className='xsm:hidden lg:block' src={logo} alt='' />
    <div className=' xsm:flex justify-between lg:hidden  '>
      <Image src={logo} alt='' width={80} />
      <Image onClick={()=>setSidebar(false)} className='' src={cancel} alt='' />
      </div>
        <nav className='xsm:mt-5 lg:mt-8 '>
            <ul className='flex flex-col xsm:gap-y-4 sm:gap-y-6 lg:gap-y-12 justify-between font-semibold'>
                <li onClick={() =>{ 
                  setView('Home')
                  setSidebar(false)}
                  } className={`${view == 'Home' ? 'hover-color active' : null}`}>Home</li>
                <li onClick={() =>{ 
                  setView('Shop')
                  setSidebar(false)}
                  } className={`${view == 'Shop' ? 'hover-color active' : null}`}>Shop</li>
                <li onClick={() =>{ 
                  setView('Product')
                  setSidebar(false)}
                  } className={`${view == 'Product' ? 'hover-color active' : null}`}>Product</li>
                <li onClick={() =>{ 
                  setView('Cart')
                  setSidebar(false)}
                  } className={`${view == 'Cart' ? 'hover-color active' : null}`}>Cart</li>
                <Link href='/Login'>
                  <li 
                  // onClick={() => setView('Login')}
                  >Login</li>
                </Link>
            </ul>
        </nav>
        <div className='flex  flex-col  gap-y-3 text-white'>
          <button className='py-3 px-2 bg-default'>%DISCOUNT%</button>
          <button className='py-3 px-2 bg-black'>NEW THIS WEEK</button>
        </div>
        <div className='flex flex-col gap-y-3'>
          <span className={` ${view == 'Cart' ? 'hover-color active' : null} flex flex-row gap-2.5 items-center`}>
            <TiShoppingCart className='text-[24px]'/>
            <p onClick={()=>{
              setView('Cart')
              setSidebar(false)}
              } className={`cursor-pointer `}>Cart(0)</p>
            
          </span>
          <span className={` ${view == 'Favorite' ? 'hover-color active' : null} flex flex-row gap-2.5 items-center`}>
          <IoIosHeartEmpty className='text-[24px]'/> 
            <p onClick={()=>{
              setView('Favorite')
              setSidebar(false)}
              } className={`cursor-pointer `}> Favourite</p>
           
          </span>
          <span className={` ${view == 'Search' ? 'hover-color active' : null} flex flex-row gap-2.5 items-center`}>
            <IoIosSearch className='text-[24px]' /> 
            <p onClick={()=>{
              setView('Search')
              setSidebar(false)}
              } className={`cursor-pointer `}>Search</p>
          </span>
          
        </div>
        <div className='flex flex-row gap-6 justify-center '>
            <Image className='cursor-pointer' src={pin} alt='' />
            <Image className='cursor-pointer' src={gram} alt='' />
            <Image className='cursor-pointer' src={faceo} alt='' />
            <Image className='cursor-pointer' src={twit} alt='' />
        </div>
    </div>
    </>
  )
}

export default Navbar