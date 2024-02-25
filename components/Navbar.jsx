'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const Navbar = () => {


  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])


  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };


  return (

    <>

      <nav
        className={`${isScrolled ? 'bg-black dark:transparent' : 'bg-transparent'
          } w-full overflow-x-hidden z-[99] top-0 start-0 border-b border-none dark:border-gray-600`}
      >
        <div className=" max-w-full   flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:p-4 md:px-8">
          <Link href="https://flowbite.com/">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src="/assets/ipcd-white.png" width={82} height={82} alt="Nhi" />

            </div>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="btn font-['Oxanium'] text-white   font-medium   text-sm     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Token</button>
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[--prime-yellow] dark:text-[--prime-yellow] ring-[--prime-yellow] dark:hover:bg-gray-900 dark:focus:ring-[--prime-yellow]"
              aria-controls="navbar-sticky1"
              aria-expanded={isNavVisible}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            id="navbar-sticky1"
            className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${isNavVisible ? 'block' : 'hidden'
              }`}
          >
            <ul className=" navcar  flex    flex-col p-4   md:py-1.5   mt-4 font-medium border border-gray-100 md:rounded-[50px] rounded-lg bg-gray-50 md:space-x-[4vmax] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-white md:text-black dark:border-gray-700">
              {/* <li>
                <Link href="#">
                  <div className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</div>
                </Link>
              </li> */}
              <li className='md:border-none border-b-[1px] border-[#F7A00B] '>
                <Link href="#">
                  <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white md:dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</div>
                </Link>
              </li>
              <li className='md:border-none border-b-[1px] border-[#F7A00B]'>
                <Link href="#">
                  <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white md:dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</div>
                </Link>
              </li>
              <li className='md:border-none border-b-[1px] border-[#F7A00B] '>
                <Link href="#">
                  <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white md:dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Use Case</div>
                </Link>
              </li>
              <li className='md:border-none border-b-[1px] border-[#F7A00B] '>
                <Link href="#">
                  <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white md:dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Roadmap</div>
                </Link>
              </li>
              <li className='md:border-none border-b-[1px] border-[#F7A00B] '>
                <Link href="#">
                  <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white md:dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tokenomics</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>





    </>
  )
}

export default Navbar