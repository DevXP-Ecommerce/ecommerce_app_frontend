import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import Card from './Card';



interface HomeProps {
    view: string; // Change 'string' to the actual type of your 'view' prop
    setView: React.Dispatch<React.SetStateAction<string>>; // Change 'string' to the actual type of your 'view' prop
  }
  const Home: React.FC<HomeProps> = ({ view, setView }) => {

    const [dataLoaded, setDataLoaded] = useState<boolean>(false);

    const [scrollPosition, setScrollPosition] = useState(0);

    // Update scroll position on scroll
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
  
    useEffect(() => {
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setDataLoaded(true);
    }, 500); // Simulating a 1.5 second delay for loading
  }, []);
  return (
    <>
    {dataLoaded ? (
    <div className='xsm:p-8 md:p-14 z-[-1] xsm:mt-14 lg:mt-0  '>
      <div className={`${scrollPosition > 50 ? 'fade-out' : 'fade-in'} fade-text flex flex-row m-auto xsm:gap-4 sm:gap-x-8 md:gap-x-20 xsm:text-[10px] sm:text-[12px] justify-center`}>
      <div className='flex flex-col gap-y-3'>
        <p>Home</p>
        <p>New</p>
        <p>Trending</p>
      </div>
      <div className='flex flex-col gap-y-3'>
        <p>Home</p>
        <p>New</p>
        <p>Trending</p>
      </div>
      <div className='flex flex-col gap-y-3'>
        <p>Home</p>
        <p>New</p>
        <p>Trending</p>
      </div>
      <div className='flex flex-col gap-y-3'>
        <p>Home</p>
        <p>New</p>
        <p>Trending</p>
      </div>
      
      </div>

      <div className=' text-center mt-20 '>
        <h2 className='text-[36px] font-bold mb-5'>/Trending.</h2>
        <Card />
      </div>
    </div>)
  :
  (<Loader />)  
  }
    </>
  )
}

export default Home