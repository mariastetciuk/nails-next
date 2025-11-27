import { Gallery } from "@/type/type";

type NavLinks = {
  title: string;
  href: string;
};

type SocialLinks = {
  link: string;
  href: string;
};

type Reviev = {
  id: number;
  src: string;
};

type Price = {
  id: number;
  src: string;
  title: string;
  price: string;
  description: string;
};

type Team = {
  id: number;
  src: string;
  name: string;
  item1: string;
  item2:string;
  item3: string;
};

export const navLinks: Array<NavLinks> = [
  { title: "Про нас", href: "#about-us" },
  { title: "Послуги", href: "#prise" },
  // { title: "Ціни", href: "#prise" },
  { title: "Галерея", href: "#gallery" },
  { title: "Відгуки", href: "#revievs" },
  { title: "Контакти", href: "#footer" },
];

export const socialeList: Array<SocialLinks> = [
  {
    link: "https://www.instagram.com/beautiful.nails.if",
    href: "/sprite.svg#icon-instagram",
  },
  {
    link: "https://www.facebook.com/beautifulnails.if",
    href: "/sprite.svg#icon-facebook",
  },
  {
    link: "https://t.me/beautiful_nails_if",
    href: "/sprite.svg#icon-telegram",
  },
  { link: "viber://add?number=380935893133", href: "/sprite.svg#icon-viber" },
];

export const socialeDirect: Array<SocialLinks> = [
  {
    link: "https://www.instagram.com/direct/t/17842239836855986",
    href: "/sprite.svg#icon-instagram",
  },
  {
    link: "https://m.me/beautifulnails.ukraine",
    href: "/sprite.svg#icon-messenger",
  },
  {
    link: "https://t.me/beautiful_nails_if",
    href: "/sprite.svg#icon-telegram",
  },
  { link: "viber://add?number=380935893133", href: "/sprite.svg#icon-viber" },
];

export const response = {
  successfull: {
    title: "Дякуємо за запис!",
    text: "Ми зателефонуємо Вам найближчим часом)",
  },
  error: {
    title: "Щось пішло не так!",
    text: "Спробуйте будь ласка записатись знову.",
  },
};

export const gallery: Array<Gallery> = [
  { id: 1, src: "/gallery_new/2.jpg" },
  { id: 2, src: "/gallery_new/3.jpg" },
  { id: 3, src: "/gallery_new/4.jpg" },
  { id: 4, src: "/gallery_new/5.jpg" },
  { id: 5, src: "/gallery_new/6.jpg" },
  { id: 14, src: "/gallery_new/7.jpg" },
  { id: 6, src: "/gallery_new/8.jpg" },
  { id: 7, src: "/gallery_new/9.jpg" },
  { id: 8, src: "/gallery_new/14.jpg" },
  { id: 9, src: "/gallery_new/10.jpg" },
  { id: 10, src: "/gallery_new/12.jpg" },
  { id: 11, src: "/gallery_new/13.jpg" },
  { id: 12, src: "/gallery_new/11.jpg" },
  { id: 13, src: "/gallery_new/15.jpg" },
  { id: 15, src: "/gallery_new/1.jpg" },
];

export const revievs: Array<Reviev> = [
  { id: 1, src: "/revievs/photo_1.jpg" },
  { id: 3, src: "/revievs/photo_2.jpg" },
  { id: 4, src: "/revievs/photo_3.jpg" },
  { id: 5, src: "/revievs/photo-4.jpg" },
  { id: 6, src: "/revievs/photo-5.jpg" },
  { id: 7, src: "/revievs/photo-6.jpg" },
  { id: 8, src: "/revievs/photo-7.jpg" },
  { id: 9, src: "/revievs/photo-8.jpg" },
  { id: 10, src: "/revievs/photo-9.jpg" },
  { id: 11, src: "/revievs/photo-10.jpg" },
  { id: 12, src: "/revievs/photo-11.jpg" },
  { id: 13, src: "/revievs/photo-12.jpg" },
  { id: 15, src: "/revievs/photo-13.jpg" },
  
];

export const price: Array<Price> = [
  { id: 1, src: "/price/img1.png", title: "Покриття гель-лаком", description: "Гігієнічний апаратний манікюр, покриття гель-лаком та дизайн", price: "від 550 грн." },
  { id: 2, src: "/price/img8.png", title: "Укріплення нігтів", description: "Гігієнічний апаратний манікюр, укріплення нігтів гелем, покриття гель-лаком та дизайн", price: "від 650 грн." },
  { id: 3, src: "/price/img4.png", title: "Нарощення нігтів", description: "Гігієнічний апаратний манікюр, нарощення нігтів гелем, покриття гель-лаком, дизайн", price: "від 900 грн." },
  { id: 4, src: "/price/img3.png", title: "Гігієнічний апаратний манікюр", description: "Обрізання кутикули, обробка бокових валиків навколо нігтя, обрізання нігтів, надання їм форми. Жіночий, чоловічий.", price: "від 400 грн." },
  { id: 5, src: "/price/img6.png", title: "Гігієнічний педикюр: жіночий, чоловічий", description: "Апаратна обробка стопи та пальчиків, обрізання нігтів.", price: "від 500 грн." },
  { id: 6, src: "/price/img5.png", title: "Повний педикюр", description: "Апаратний педикюр, покриття гель-лаком та дизайн", price: "від 700 грн." },
  { id: 8, src: "/price/img9.jpg", title: "Синхрон: манікюр + педикюр", description: "Kомплексна процедура в чотири руки, манікюр та педикюр всього за 90 хв.", price: "від 1400 грн." },
  { id: 10, src: "/price/img12.png", title: "SPA догляд за руками та ногами", description: "Скрабування, доглядові маски, парафінотерапія рук та ніг.", price: "від 1400 грн." },
  { id: 9, src: "/price/img11.jpg", title: "Медичний педикюр", description: "Апаратна обробка стопи, п'ят, пальців, зачистка натоптишів, мозолів, підрізання нігтів.", price: "від 550 грн." },
  { id: 7, src: "/price/img10.jpg", title: "Подолог", description: "Зачистка оніхолізису, врослих  нігтів, встановлення корегуючих систем, видалення натоптишів, мозолів, обробка тріщин.", price: "від 550 грн." },
 
];

export const team: Array<Team> = [
  {id:1, src: "/team/img1.jpg", name: "ірина", item1: "Досвід роботи - з 2014 року.", item2: "Власна технологія апаратного манікюру та педикюру", item3: "Дизайн будь-якої складності."},
  {id:2, src: "/team/img2.jpg", name: "олександра", item1: "Досвід роботи - з 2021 року.", item2: "З манікюрними ножницями на ти, швидке виконання обрізаного манікюру та педикюру.", item3: "Володіє знаннями для роботи зі складними нігтями."}
];
