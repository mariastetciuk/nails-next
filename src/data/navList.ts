import { Gallery } from "@/type/type";


type NavLinks = {
    title: string;
    href: string;
  };

  type SocialLinks = {
    link: string;
    href: string;
  };


  
  export const navLinks: Array<NavLinks> = [
    { title: 'Про нас', href: '#about-us' },
    { title: 'Послуги', href: '#servises' },
    { title: 'Прайс', href: '#prise' },
    { title: 'Портфоліо', href: '#gallery' },
    { title: 'Відгуки', href: '#revievs' },
    { title: 'Контакти', href: '#contacts' }
  ];

export  const socialeList: Array<SocialLinks> = [
  { link: 'https://www.instagram.com/', href: '/sprite.svg#icon-instagram'},
  { link: 'https://www.facebook.com/beautifulnails.ukraine', href: '/sprite.svg#icon-facebook' },
  { link: 'https://t.me/beautifulnails_ukraine', href: '/sprite.svg#icon-telegram' },
  { link: 'viber://add?number=380989505917', href: '/sprite.svg#icon-viber' }
];

export  const socialeDirect: Array<SocialLinks> = [
  { link: 'https://www.instagram.com/direct/t/17842239836855986', href: '/sprite.svg#icon-instagram'},
  { link: 'https://m.me/beautifulnails.ukraine', href: '/sprite.svg#icon-facebook-messenger' },
  { link: 'https://t.me/beautifulnails_ukraine', href: '/sprite.svg#icon-telegram' },
  { link: 'viber://add?number=380989505917', href: '/sprite.svg#icon-viber' }
];

export const response = {
  successfull: {
  title: 'Дякуємо за запис!', text: 'Ми зателефонуємо Вам найближчим часом)'},
  error: {
    title: 'Щось пішло не так!', text: 'Спробуйте будь ласка записатись знову.'
  }
}

export const gallery: Array<Gallery> = [
  {id:1, src: '/gallery/img1.jpg', style: 'mr-0'},
  {id:2, src: '/gallery/img2.jpg', style: 'mr-0'},
  {id:3, src: '/gallery/img3.jpg', style: 'mr-0'},
  {id:4, src: '/gallery/img4.jpg', style: 'mr-0'},
  {id:5, src: '/gallery/img5.jpg', style: 'mr-0'},
  {id:6, src: '/gallery/img6.jpg', style: 'mr-0'},
  {id:7, src: '/gallery/img7.jpg', style: ''},
  {id:8, src: '/gallery/img8.jpg', style: ''},
  {id:9, src: '/gallery/img9.jpg', style: ''},
  {id:10, src: '/gallery/img10.jpg', style: ''},
  {id:11, src: '/gallery/img11.jpg', style: ''},
  {id:12, src: '/gallery/img12.jpg', style: ''},
] 
 