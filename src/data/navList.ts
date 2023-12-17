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

export const navLinks: Array<NavLinks> = [
  { title: "Про нас", href: "#about-us" },
  { title: "Послуги", href: "#prise" },
  { title: "Ціни", href: "#prise" },
  { title: "Галерея", href: "#gallery" },
  { title: "Відгуки", href: "#revievs" },
  { title: "Контакти", href: "#map" },
];

export const socialeList: Array<SocialLinks> = [
  {
    link: "https://www.instagram.com/beautiful.nails.if",
    href: "/sprite.svg#icon-instagram",
  },
  {
    link: "https://www.facebook.com/beautifulnails.ukraine",
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
  { id: 1, src: "/gallery/img1.jpg" },
  { id: 2, src: "/gallery/img2.jpg" },
  { id: 3, src: "/gallery/img3.jpg" },
  { id: 4, src: "/gallery/img4.jpg" },
  { id: 5, src: "/gallery/img5.jpg" },
  { id: 6, src: "/gallery/img6.jpg" },
  { id: 7, src: "/gallery/img7.jpg" },
  { id: 8, src: "/gallery/img8.jpg" },
  { id: 9, src: "/gallery/img9.jpg" },
  { id: 10, src: "/gallery/img10.jpg" },
  { id: 11, src: "/gallery/img11.jpg" },
  { id: 12, src: "/gallery/img12.jpg" },
  { id: 13, src: "/gallery/img13.jpg" },
  { id: 14, src: "/gallery/img14.jpg" },
  { id: 15, src: "/gallery/img15.jpg" },
];

export const revievs: Array<Reviev> = [
  { id: 1, src: "/reviev/img1.JPG" },
  { id: 2, src: "/reviev/img16.JPG" },
  { id: 3, src: "/reviev/img3.JPG" },
  { id: 4, src: "/reviev/img4.JPG" },
  { id: 5, src: "/reviev/img5.JPG" },
  { id: 6, src: "/reviev/img6.JPG" },
  { id: 7, src: "/reviev/img7.JPG" },
  { id: 8, src: "/reviev/img8.JPG" },
  { id: 9, src: "/reviev/img9.JPG" },
  { id: 10, src: "/reviev/img10.JPG" },
  { id: 11, src: "/reviev/img11.JPG" },
  { id: 12, src: "/reviev/img12.JPG" },
  { id: 14, src: "/reviev/img14.JPG" },
  { id: 15, src: "/reviev/img15.JPG" },
  { id: 16, src: "/reviev/img16.JPG" },
];

export const price: Array<Price> = [
  { id: 1, src: "/price/img1.png", title: "Покриття гель-лаком", description: "Гігієнічний манікюр, покриття гель-лаком та дизайн", price: "400 грн." },
  { id: 2, src: "/price/img2.png", title: "Укріплення", description: "Гігієнічний манікюр, укріплення нігтів гелем, покриття гель-лаком та дизайн", price: "500 грн." },
  { id: 3, src: "/price/img4.png", title: "Нарощення", description: "Гігієнічний манікюр, нарощення нігтів гелем, покриття гель-лаком, дизайн", price: "700 грн." },
  { id: 4, src: "/price/img3.png", title: "Гігієнічний манікюр", description: "Апаратний, обрізаний або комбінований", price: "250 грн." },
  { id: 5, src: "/price/img6.png", title: "Гігієнічний педикюр", description: "Апаратна обробка стопи та пальчиків, обрізання нігтів. Чоловічий, жіночий", price: "450 грн." },
  { id: 6, src: "/price/img5.png", title: "Повний педикюр", description: "Апаратний педикюр, покриття гель-лаком та дизайн", price: "600 грн." },
]
