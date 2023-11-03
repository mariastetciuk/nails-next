import { navLinks } from '@/data/navList';
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';
import BtnOpenMenu from './BtnOpenMenu';

const dancing = Dancing_Script({subsets: ['latin'], weight: ['700']})

const Header = () => {

  return (
   
      <header className=' bg-red  text-white'>
        <div className='w-[320px] mx-auto px-5 py-1 flex items-center justify-between md:w-[768px] lg:w-[1280px] lg:px-20'>
        <Link href={'/'} className={`${dancing.className} text-2xl md:text-4xl`}>
          Beautiful <span className='block pl-4'>Nails</span> 
        </Link>
       <nav className='hidden lg:block'>
          <ul className='flex gap-5 text-lg font-medium'>
            {navLinks.map(({title, href}) => <li key={title}>
              <Link href={href} className='transition-all duration-300 hover:border-b-2 focus:border-b-2 py-3'>{title}</Link>
            </li>)}
          </ul>
        </nav>
        <div className='flex items-center gap-7'>
          <button className='hidden md:block md:px-5 md:py-2 md:text-white md:text-lg md:border md:font-medium md:border-white transition-all duration-300 hover:bg-white hover:text-red font-medium foxus:bg-white focus:text-red'>Записатися</button>
        <BtnOpenMenu /></div> 
      
        </div>
      </header>
       
  
  );
};

export default Header;