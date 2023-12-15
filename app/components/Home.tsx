import React from 'react'



interface HomeProps {
    view: string; // Change 'string' to the actual type of your 'view' prop
    setView: React.Dispatch<React.SetStateAction<string>>; // Change 'string' to the actual type of your 'view' prop
  }
  const Home: React.FC<HomeProps> = ({ view, setView }) => {
  return (
    <div className='p-14  flex justify-center items-center'>
      <div className='flex m-auto gap-x-20 text-[12px] w-[100%]'>
      <ul className='flex flex-col gap-y-3'>
        <li>Home</li>
        <li>New</li>
        <li>Trending</li>
      </ul>
      <ul className='flex flex-col gap-y-3'>
        <li>Bedroom</li>
        <li>Bathroom</li>
        <li>Living</li>
      </ul>
      <ul className='flex flex-col gap-y-3'>
        <li>Kitchen/Table</li>
        <li>HouseKeeping</li>
        <li>Trending</li>
      </ul>
      <ul className='flex flex-col gap-y-3'>
        <li>Office/Apparel</li>
        <li>New</li>
        <li>Trending</li>
      </ul>
      </div>
    </div>
  )
}

export default Home