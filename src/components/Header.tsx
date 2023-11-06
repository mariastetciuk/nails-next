import { navLinks } from '@/data/navList';
import Link from 'next/link';
import { Dancing_Script, Zilla_Slab } from 'next/font/google';
import BtnOpenMenu from './BtnOpenMenu';

const dancing = Dancing_Script({subsets: ['latin'], weight: ['700']})
const zilla = Zilla_Slab({subsets: ['latin'], weight: ['500']})

const Header = () => {

  return (
   
      <header className='fixed left-0 right-0 top-0 z-10 bg-red  text-white'>
        <div className=' max-w-[400px] mx-auto px-5 py-1 bg flex items-center justify-between md:max-w-[768px] lg:max-w-[1280px] lg:px-20'>
        <Link href={'/'} className={`${dancing.className} text-2xl font-medium md:text-4xl`}>
          Beautiful <span className='block pl-4'>Nails</span> 
        </Link>
       <nav className='hidden lg:block'>
          <ul className={`${zilla.className} flex gap-5 text-xl`}>
            {navLinks.map(({title, href}) => <li key={title}>
              <Link href={href} className='transition-all duration-300 hover:border-b-2 hover:border-white focus:border-white focus:border-b-2 py-3'>{title}</Link>
            </li>)}
          </ul>
        </nav>
        <div className='flex items-center gap-7'>
          <button className='hidden md:block md:px-5 md:py-2 md:text-white md:text-lg md:border-[2px] md:font-medium md:border-white transition-all duration-300 hover:bg-white hover:text-red font-medium focus:bg-white focus:text-red'>Записатися</button>
        <BtnOpenMenu /></div> 
      
        </div>
      </header>
       
  
  );
};

export default Header;