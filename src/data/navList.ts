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
  { title: "Ціни", href: "#prise" },
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
    link: "https://t.me/beautifulnails_ukraine",
    href: "/sprite.svg#icon-telegram",
  },
  { link: "viber://add?number=380989505917", href: "/sprite.svg#icon-viber" },
];

export const socialeDirect: Array<SocialLinks> = [
  {
    link: "https://www.instagram.com/direct/t/17842239836855986",
    href: "/sprite.svg#icon-instagram",
  },
  {
    link: "https://m.me/beautifulnails.ukraine",
    href: "/sprite.svg#icon-facebook-messenger",
  },
  {
    link: "https://t.me/beautifulnails_ukraine",
    href: "/sprite.svg#icon-telegram",
  },
  { link: "viber://add?number=380989505917", href: "/sprite.svg#icon-viber" },
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
  { id: 1, src: "/gallery/2_img.jpg" },
  { id: 2, src: "/gallery/3_img.jpg" },
  { id: 3, src: "/gallery/4_img.jpg" },
  { id: 4, src: "/gallery/5_img.jpg" },
  { id: 5, src: "/gallery/6_img.jpg" },
  { id: 6, src: "/gallery/7_img.jpg" },
  { id: 7, src: "/gallery/8_img.jpg" },
  { id: 8, src: "/gallery/9_img.jpg" },
  { id: 9, src: "/gallery/10_img.jpg" },
  { id: 10, src: "/gallery/11_img.jpg" },
  { id: 11, src: "/gallery/12_img.jpg" },
  { id: 12, src: "/gallery/13_img.jpg" },
  { id: 13, src: "/gallery/14_img.jpg" },
  { id: 0, src: "/gallery/15_img.jpg" },
  { id: 14, src: "/gallery/1_img.jpg" },
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
  { id: 1, src: "/price/img1.png", title: "Покриття гель-лаком", description: "Гігієнічний манікюр, покриття гель-лаком та дизайн", price: "від 550 грн." },
  { id: 2, src: "/price/img8.png", title: "Укріплення", description: "Гігієнічний манікюр, укріплення нігтів гелем, покриття гель-лаком та дизайн", price: "від 650 грн." },
  // { id: 8, src: "/price/img8.png", title: "Корекція гелевих нігтів", description: "Гігієнічний манікюр, ремонт та корекція гелевих нігтів, покриття гель-лаком, дизайн", price: "650 грн." },
  { id: 3, src: "/price/img4.png", title: "Нарощення", description: "Гігієнічний манікюр, нарощення нігтів гелем, покриття гель-лаком, дизайн", price: "від 900 грн." },
  { id: 4, src: "/price/img3.png", title: "Гігієнічний манікюр: жіночий, чоловічий", description: "Апаратний, обрізаний або комбінований", price: "від 400 грн." },
  { id: 5, src: "/price/img6.png", title: "Гігієнічний  педикюр: жіночий, чоловічий", description: "Апаратна обробка стопи та пальчиків, обрізання нігтів.", price: "від 500 грн." },
  { id: 6, src: "/price/img5.png", title: "Повний педикюр", description: "Апаратний педикюр, покриття гель-лаком та дизайн", price: "від 700 грн." },
  { id: 8, src: "/price/img9.jpg", title: "Синхрон: манікюр + педикюр", description: "Kомплексна процедура в чотири руки, манікюр та педикюр всього за 90 хв.", price: "від 1400 грн." },
  { id: 9, src: "/price/img11.jpg", title: "Медичний педикюр", description: "Апаратна обробка стопи, п'ят, пальців, зачистка натоптишів, мозолів, підрізання нігтів.", price: "від 550 грн." },
  { id: 7, src: "/price/img10.jpg", title: "Подолог", description: "Зачистка оніхолізису, врослих  нігтів, встановлення корегуючих систем, видалення натоптишів, мозолів, обробка тріщин.", price: "від 550 грн." },
 
];

export const team: Array<Team> = [
  {id:1, src: "/team/img1.jpg", name: "ірина", item1: "Досвід роботи - з 2014 року.", item2: "Власна технологія апаратного манікюру та педикюру", item3: "Дизайн будь-якої складності."},
  {id:2, src: "/team/img2.jpg", name: "олександра", item1: "Досвід роботи - з 2021 року.", item2: "З манікюрними ножницями на ти, швидке виконання обрізаного манікюру та педикюру.", item3: "Володіє знаннями для роботи зі складними нігтями."}
];
