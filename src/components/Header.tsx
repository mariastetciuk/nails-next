'use client'
import { navLinks } from '@/data/navList';
import Link from 'next/link';
import { Dancing_Script, Zilla_Slab, Great_Vibes } from 'next/font/google';
import BtnOpenMenu from './btnComponents.tsx/BtnOpenMenu';
import { useState, useEffect } from 'react';

const dancing = Dancing_Script({subsets: ['latin'], weight: ['700']})
const vibes = Great_Vibes({subsets: ['latin'], weight: ['400']})
const zilla = Zilla_Slab({subsets: ['latin'], weight: ['500']})

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   
      <header className={`absolute top-0 right-0 left-0 z-10 bg-transparent text-white md:py-[15px] lg:py-5`}>
        <div className='container py-1 bg flex items-center gap-[150px]'>
        <Link href={'/'} className={`${vibes.className} text-2xl font-medium md:text-4xl`}>
          Beautiful <span className='block pl-4'>Nails</span> 
        </Link>
       <nav className='hidden lg:block'>
          <ul className={`${zilla.className} flex gap-5 text-xl`}>
            {navLinks.map(({title, href}) => <li key={title} className='transition-all duration-300 hover:border-b-2 hover:border-white focus:border-white focus:border-b-2 py-3'>
              <Link href={href}>{title}</Link>
            </li>)}
          </ul>
        </nav>
       <BtnOpenMenu />
      
        </div>
      </header>
       
  
  );
};

export default Header;