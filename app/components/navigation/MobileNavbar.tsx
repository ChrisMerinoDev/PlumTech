'use client'

import { ROUTES } from '@/app/constants/routes';
import NavLink from '../NavLink';
import { motion } from 'framer-motion';
import SearchOverlay from '../search/SearchOverlay';
import { useState } from 'react';
import Image from 'next/image';

interface Props {
  onClose: () => void;
}

const slideVariants = {
  hidden: {
    x: '100%', // start off screen to the right
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 70,
      damping: 18,
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut' as const,
    },
  },
};

const MobileNavbar = ({ onClose }: Props) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
    <motion.div
      className="flex flex-col items-center gap-8 h-full w-[270px] py-11 shadow-lg bg-cover bg-center"
      style={{ backgroundImage: "url('/Background/bg6.jpg')" }}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <button onClick={onClose} className="text-gray-300 text-3xl absolute top-6 right-6 hover:cursor-pointer">✕</button>
     
      <button onClick={() => setIsSearchOpen(true)}>
        <Image src="/Icons/Search.svg" alt="Search" width={28} height={28} priority className='hover:cursor-pointer' />
      </button>
      <NavLink href={ROUTES.HOME} className="text-gray-50 text-xl hover:underline" onClick={onClose}>
        Home
      </NavLink>
      <NavLink href={ROUTES.LAPTOPS} className="text-gray-50 text-xl hover:underline" onClick={onClose}>
        Laptops
      </NavLink>
      <NavLink href={ROUTES.PHONES} className="text-gray-50 text-xl hover:underline" onClick={onClose}>
        Phones
      </NavLink>
      <NavLink href={ROUTES.HEADPHONES} className="text-gray-50 text-xl hover:underline" onClick={onClose}>
        Headphones
      </NavLink>
      <NavLink href={ROUTES.CART} className="text-gray-50 text-xl hover:underline" onClick={onClose}>
        Cart
      </NavLink>
    </motion.div>

    {/* Conditionally render SearchOverlay here */}
      {isSearchOpen && (
        <SearchOverlay onClose={() => setIsSearchOpen(false)} onProductSelect={onClose} />
      )}
      </>
  );
};

export default MobileNavbar;
