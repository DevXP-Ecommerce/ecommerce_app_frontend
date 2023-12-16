import React, { useEffect } from 'react'
import { IoIosSearch } from 'react-icons/io';
import cancel from '@/app/assets/images/navbar/cancel.svg'
import Image from 'next/image';

interface SearchProps {
    view: string; // Change 'string' to the actual type of your 'view' prop
    setView: React.Dispatch<React.SetStateAction<string>>; // Change 'string' to the actual type of your 'view' prop
  }
  const Search: React.FC<SearchProps> = ({ view, setView }) => {

    const handleButtonClick = () => {
      window.location.reload();
     ;
    };

  return (
    <div  className=' slide-down fixed w-[100vw] xsm:h-[250px] md:h-[300px] lg:h-[400px] bg-[#f5f7fa] xsm:mt-[-20px]  md:mt-[-30px] lg:mt-[-120px]  left-0 z-[49] flex justify-center items-center xsm:px-6 md:px-12'>
      <Image 
      onClick={handleButtonClick}
      className='absolute xsm:top-28 md:top-32 lg:top-36 xsm:right-6 md:right-12 xsm:w-[12px] md:w-[16px] lg:w-auto' src={cancel} alt=''/>
      <form  className='w-[54rem] xsm:mt-24 md:mt-20 lg:mt-16 bg-white'>
        <div className='flex items-center gap-x-3 w-[100%] xsm:h-[45px] md:h-[60px] lg:h-[70px] shadow-md xsm:px-3 md:px-6 focus:border-black '>
        <IoIosSearch className='text-[24px]' /> 
            <input  type='text' placeholder='Type your keyword...'
                className=' border-none outline-none bg-transparent w-[100%]'
            />
        </div>

      </form>
    </div>
  )
}

export default Search
