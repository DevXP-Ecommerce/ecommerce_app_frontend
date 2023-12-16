import Link from 'next/link';
import React from 'react';
import logo from '@/app/assets/images/navbar/logo.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';

interface FooterProps {
    view: string; // Change 'string' to the actual type of your 'view' prop
    setView: React.Dispatch<React.SetStateAction<string>>; // Change 'string' to the actual type of your 'view' prop
  }

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className='flex flex-col gap-12 sm:p-12 xsm:p-6 bg-[#f3f3f3]'>
            <div className='flex xsm:flex-col md:flex-row justify-between xsm:gap-6 md:gap-0 text-black/70 font-medium w-[100%]'>
                       <p className='xsm:w-[250px] md:w-[400px] xsm:text-[10px] md:text-[12px]'>Store Location & Hours: <br />
                        270 Ponsonby Road, Auckland 1011 <br />
                        Monday to Saturday 9:30am - 5:30pm  <br />Sunday 9:30am - 5:00pm <br />
                        Click & Collect is available within store hours <br /> <br />
                        <span className='text-black  '>MERN Dev &copy; 2023</span>
                        
                        </p>
<p></p>
                
                <div className='flex flex-col xsm:gap-1 md:gap-2 text-black/60 font-medium '>
                    <Link href='tel:+2348008008008'>Tel: +2348008008008
                    </Link>
                    <Link className='underline underline-offset-2' href='mailto:amayofurniture@gmail.com'>Studio@amayofurniture.com</Link>
                    
                    <h4 className='xsm:text-[14px] md:text-[18px]'>Subscribe to our Newsetter</h4>
                    <div className=' w-[100%] flex flex-row justify-between items-center border-b-[1px] border-solid border-black'>
                    <input className='mt-2 w-[100%] bg-transparent outline-none border-none' type='email' placeholder='Email' />

                    <Link href='mailto:amayofurnitureblog@gmail.com'>
                    <IoIosArrowRoundForward  className='text-[32px]'/></Link>
                    </div>
                    
                </div>
                
            </div>
            <div className='flex flex-row  text-black/60 font-medium sm:justify-between xsm:gap-2 sm:gap-0'>
                <div>
                        <Image className='xsm:w-16 xsm:h-7 md:hidden' src={logo} alt='' />
                        <Image className='xsm:hidden md:block ' src={logo} alt='' />
                </div>

                <div className='  flex flex-col  gap-y-2 xsm:text-[10px] sm:text-[12px]'>
                    
                        <p><a href="#">About Us</a></p>
                        <p><a href="#">Blog</a></p>
                        <p><a href="#">Terms and Privacy</a></p>
                    
                </div>
                <div className=' flex flex-col  gap-y-2  xsm:text-[10px] sm:text-[12px]'>
                    
                        <p><a href="#">Shipping</a></p>
                        <p><a href="#">Payments</a></p>
                        <p><a href="#">Return Policy</a></p>
                
                </div>
            </div>
            
        </div>
    );

};
export default Footer