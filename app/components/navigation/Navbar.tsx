import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <main className='flex-row max-w-full'>
        <div className='flex py-3 px-5 justify-center gap-15'>
            <Image 
                src='/Assets/Icons/Plum-svg.svg'
                alt='PlumTech Logo'
                height={22}
                width={22}
                className='flex absolute left-6 top-3'
                 />
            <p className='text-white'>Store</p>
            <p className='text-white'>Laptops</p>
            <p className='text-white'>Phones</p>
            <p className='text-white'>Headphones</p>
            <div className='absolute right-8'>
                <button className='cursor-pointer mr-8'>
                    <Image src='/Assets/Icons/Search.svg' alt='Cart' height={22} width={22}
                    />
                </button>

                <button className='cursor-pointer'>
                    <Image src='/Assets/Icons/Cart.svg' alt='Cart' height={22} width={22}
                    />
                </button>

            </div>
        </div>
    </main>
  )
}

export default Navbar