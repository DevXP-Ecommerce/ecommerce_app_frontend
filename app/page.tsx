"use client";
import Image from 'next/image'
import Navbar from './components/Navbar';
import { useState } from 'react'
import Search from './components/Search';
import Home from './components/Home';
import Footer from './components/Footer';


export default function Page() {
  const [view, setView] = useState('Home') //Products, Shop , Cart, Checkout


  return (
    <div className='h-screen overflow-hidden '>
      
     
      <main className="flex  ">
        <div className=' lg:w-[28%]'>
      <Navbar
        view = {view}
        setView = {setView}
      />
      </div>
      <div className='flex-grow  h-screen overflow-y-scroll scrollbar-none xsm:w-[100%] '>
      {view === "Search" && <Search
        view = {view}
        setView = {setView}
      /> }
      {view === "Home" && <Home
        view = {view}
        setView = {setView}
      /> }
      <div className=''>
      <Footer 
        view = {view}
        setView = {setView}
      />
      </div>
      </div>
      </main>
      {/* <div className='bottom-0' w-full z-20>

     
      </div> */}
      
    </div>
  )
}
