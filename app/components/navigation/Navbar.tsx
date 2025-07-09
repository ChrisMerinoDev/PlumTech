"use client"

import { ROUTES } from '@/app/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import NavLink from '../NavLink'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='w-full hidden sm:flex justify-center bg-transparent'>
      <div className='flex w-full items-center justify-between px-6 py-4'>

        {/* LEFT: Logo */}
        <Link href={ROUTES.HOME} aria-label='Go to homepage' className='flex items-center'>
          <Image
            src='/Assets/Icons/Plum-svg.svg'
            alt='PlumTech Logo'
            height={22}
            width={22}
          />
        </Link>

        {/* CENTER: Nav Links */}
        <div className='flex gap-12 justify-center items-center'>
          <NavLink href={ROUTES.LAPTOPS} className='text-gray-50'>Laptops</NavLink>
          <NavLink href={ROUTES.PHONES} className='text-gray-50'>Phones</NavLink>
          <NavLink href={ROUTES.HEADPHONES} className='text-gray-50'>Headphones</NavLink>
        </div>

        {/* RIGHT: Icons */}
        <div className='flex gap-6 items-center'>
          <button className='cursor-pointer'>
            <Image
              src='/Assets/Icons/Search.svg'
              alt='Search'
              height={22}
              width={22}
            />
          </button>
          <Link href={ROUTES.CART} className='cursor-pointer'>
            <Image
              src='/Assets/Icons/Cart.svg'
              alt='Cart'
              height={22}
              width={22}
            />
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
