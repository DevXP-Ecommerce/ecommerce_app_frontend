"use client";
import React, { useState } from 'react'
import box from '@/app/assets/images/login/box.svg'
import box2 from '@/app/assets/images/login/boxsm.svg'
import Image from 'next/image'
import logo from '@/app/assets/images/navbar/logo.png'
import Link from 'next/link';
// import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"; 

const Login = () => {

  const [password, setPassword] = useState('');
    const [viewPassword, setViewPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        // setIsFocused(false);
    };

    const handlePasswordVisibility = () => {
        setViewPassword((prevState) => !prevState);
    };

  return (
    <div className='flex   items-center justify-center pt-24'>
     <Image className='xsm:hidden lg:block absolute left-[-30px] top-[-30px]' src={box}  alt=''/>
     <Image className='lg:hidden absolute left-[-20px] top-[-20px]' src={box2}  alt=''/>
    
      <form className='flex flex-col md:shadow-md bg-white w-[25rem] min-h-[70vh] p-8 gap-y-7 justify-center'>
        <Image className='' src={logo} alt=''/>
        <span>
          <label htmlFor='name'>Name</label> <br />
          <input
          required={true} 
          type='text' 
          name='name' 
          placeholder='enter your name...'
          className={`border-[1px] border-solid  w-[90%] h-[2.5rem] px-3 mt-2 border-color `}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          // tabIndex={0}
          />
        </span>
        <span>
          <label htmlFor='email'>Email</label> <br />
          <input
          required={true} 
          type='text' 
          name='email' 
          placeholder='enter your email...'
          className={`border-[1px] border-solid  w-[90%] h-[2.5rem] px-3 mt-2 border-color `}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          // tabIndex={0}
          />
        </span>
        <span>
          <label htmlFor='pass'>Password</label> <br />
          <input 
          required = {true}
          type='text' 
          name='password' 
          placeholder='enter your password'
          className={`  border-[1px] border-solid  w-[90%] h-[2.5rem] px-3 mt-2 border-color`}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          // tabIndex={1}
          />
           {/* <span onClick={handlePasswordVisibility} className=' flex items-center text-[20px]  '  >
                    {viewPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        
            </span>  */}
        </span>
        <button type='submit' className='mt-5 px-2 py-3 bg-[#fbb710]/70 hover:bg-[#fbb710] text-white shadow-sm'> 
          Create Account
        </button>
      <p className='text-center text-[12px]'>Already have an account? 
      <Link href='/Login'>
      <span className='text-[#fbb710] cursor-pointer'>LogIn</span>
      </Link>
      </p>
      </form> 
    </div>
  )
}

export default Login