import React from 'react'

interface SearchProps {
    view: string; // Change 'string' to the actual type of your 'view' prop
    setView: React.Dispatch<React.SetStateAction<string>>; // Change 'string' to the actual type of your 'view' prop
  }
  const Search: React.FC<SearchProps> = ({ view, setView }) => {
  return (
    <div  className='slide-down fixed w-[100vw] h-[400px] bg-[#f5f7fa] mt-[-250px]  left-0 z-[5000] flex justify-center items-center px-12'>
      <form  className='w-[54rem] mt-16 bg-white'>
        <div className='flex items-center gap-x-3 w-[100%] h-[70px] shadow-md px-6 focus:border-black '>
            🔎
            <input  type='text' placeholder='Type your keyword...'
                className=' border-none outline-none bg-transparent w-[100%]'
            />
        </div>

      </form>
    </div>
  )
}

export default Search
