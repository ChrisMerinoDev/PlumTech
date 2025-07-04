"use client"

import { ROUTES } from '@/app/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'
import NavLink from '../NavLink'

const Navbar = () => {

    const pathname = usePathname();

  return (
    <nav className='flex-row max-w-full'>
        <div className='flex py-3 px-5 justify-center gap-14'>
            <Link href={ROUTES.HOME} aria-label='Go to homepage'>
                <Image 
                    src='/Assets/Icons/Plum-svg.svg'
                    alt='PlumTech Logo'
                    height={22}
                    width={22}
                    className='flex absolute left-6 top-3'
                />
            </Link>

            <NavLink href={ROUTES.STORE} className='text-gray-50'>Store</NavLink>
            <NavLink href={ROUTES.LAPTOPS} className='text-gray-50'>Laptops</NavLink>
            <NavLink href={ROUTES.PHONES} className='text-gray-50'>Phones</NavLink>
            <NavLink href={ROUTES.HEADPHONES} className='text-gray-50'>Headphones</NavLink>

            <div className='absolute right-8 flex'>
                <button className='cursor-pointer mr-6'>
                    <Image src='/Assets/Icons/Search.svg' alt='Search' height={22} width={22}
                    />
                </button>

              <Link href={ROUTES.CART} className='cursor-pointer'>
                    <Image src='/Assets/Icons/Cart.svg' alt='Cart' height={22} width={22}
                    />
              </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar