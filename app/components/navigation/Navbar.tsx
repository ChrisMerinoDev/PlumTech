"use client"

import { ROUTES } from '@/app/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavLink from '../NavLink'
import MobileNavbar from './MobileNavbar'
import { AnimatePresence } from 'framer-motion'
import SearchOverlay from '../search/SearchOverlay'


const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMobileNav = () => setIsMobileNavOpen(prev => !prev);
  const closeMobileNav = () => setIsMobileNavOpen(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // change at 20px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <nav className={`w-full justify-center z-50 fixed transition-colors duration-300 ${isScrolled ? "bg-black" : "bg-gradient-to-b from-[#112254] to-100%"}`}>
      <div className='flex w-full items-center justify-between px-6 py-4'>

        {/* LEFT: Logo */}
        <Link href={ROUTES.HOME} aria-label='Go to homepage' className='flex items-center'>
          <Image
            src='/Icons/Plum-svg.svg'
            alt='PlumTech Logo'
            height={30}
            width={30}
          />
        </Link>

        {/* CENTER: Nav Links - hidden on small screens */}
        <div className='hidden sm:flex gap-3 sm:gap-12 justify-center items-center ml-15'>
          <NavLink href={ROUTES.LAPTOPS} className='text-gray-50'>Laptops</NavLink>
          <NavLink href={ROUTES.PHONES} className='text-gray-50'>Phones</NavLink>
          <NavLink href={ROUTES.HEADPHONES} className='text-gray-50'>Headphones</NavLink>
        </div>

        {/* RIGHT: Icons - hidden on small screens */}
        <div className='hidden sm:flex gap-6 items-center'>
          <button 
            onClick={() => setIsSearchOpen(true)} 
            className='cursor-pointer'>
            <Image 
              src='/Icons/Search.svg' 
              alt='Search' 
              height={22} 
              width={22} 
            />
          </button>

          <Link href={ROUTES.CART} className='cursor-pointer'>
            <Image
              src='/Icons/Cart.svg'
              alt='Cart'
              height={22}
              width={22}
            />
          </Link>
        </div>

        {/* Hamburger Icon - only on small screens */}
        <div className="sm:hidden">
          <button onClick={toggleMobileNav}>
            <Image src="/mobilemenu.svg" alt="Menu" width={36} height={36} className='hover:cursor-pointer' />
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu Overlay – only rendered if toggled */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md flex justify-end"
            onClick={closeMobileNav}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <MobileNavbar onClose={closeMobileNav} />
            </div>
          </div>
        )}

        {isSearchOpen && (
          <SearchOverlay onClose={() => setIsSearchOpen(false)} />
        )}
      </AnimatePresence>

    </nav>
  )
}

export default Navbar
