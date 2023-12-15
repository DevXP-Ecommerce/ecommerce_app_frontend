"use client";
import Image from 'next/image'
import Navbar from './components/Navbar';
import { useState } from 'react'
import Search from './components/Search';
import Home from './components/Home';


export default function Page() {
  const [view, setView] = useState('Home') //Products, Shop , Cart, Checkout


  return (
    <div className='flex flex-row  '>
      
      <Navbar
        view = {view}
        setView = {setView}
      />
      <main className="flex h-screen overflow-hidden flex-col items-center justify-between ">
      {view === "Search" && <Search
        view = {view}
        setView = {setView}
      /> }
      {view === "Home" && <Home
        view = {view}
        setView = {setView}
      /> }
      </main>
    </div>
  )
}
