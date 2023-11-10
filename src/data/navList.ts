

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
 