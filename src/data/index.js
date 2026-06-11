import pushImg from "../assets/push.jpg.jpeg";
import anamaImg from "../assets/anama.jpg.jpeg";
import illayaImg from "../assets/illaya.jpg.jpeg";
import rrrImg from "../assets/rrr.jpg.jpeg";
import spImg from "../assets/sp.jpg.jpeg";
import rahmanImg from "../A.R.-Rahman.jpg";
import subaImg from "../suba.jpg";
import sankaraImg from "../assets/Sankarabharanam.jpg";
import lalgudiImg from "../assets/lalgudi1.jpg";

export const NAV_ITEMS = [
  {
    label: "New Releases",
    href: "#new-arrivals",
    sub: [
      { label: "✨ This Week's Drops", href: "#new-arrivals", highlight: true },
      { label: "Telugu Hits 2025",     href: "#new-arrivals" },
      { label: "Bollywood New",        href: "#new-arrivals" },
      { label: "Classical Releases",   href: "#new-arrivals" },
      { divider: true },
      { label: "Pre-Orders 📦",        href: "#new-arrivals" },
    ],
  },
  {
    label: "Genres",
    href: "#categories",
    sub: [
      { label: "🎵 Telugu Classical",  href: "#categories" },
      { label: "🎬 Film Soundtracks",  href: "#categories" },
      { label: "🎸 Carnatic",          href: "#categories" },
      { label: "🥁 Fusion / World",    href: "#categories" },
      { divider: true },
      { label: "🎷 Jazz",              href: "#categories" },
      { label: "🎹 Instrumental",      href: "#categories" },
    ],
  },
  {
    label: "Best Sellers",
    href: "#bestsellers",
    sub: [
      { label: "🏆 Top 20 Records",   href: "#bestsellers" },
      { label: "Limited Editions",    href: "#bestsellers" },
      { label: "Collector's Series",  href: "#bestsellers" },
      { divider: true },
      { label: "Gift Sets 🎁",        href: "#bestsellers" },
    ],
  },
  {
    label: "Accessories",
    href: "#categories",
    sub: [
      { label: "Turntables",          href: "#categories" },
      { label: "Styluses & Needles",  href: "#categories" },
      { label: "Record Sleeves",      href: "#categories" },
      { label: "Cleaning Kits",       href: "#categories" },
      { divider: true },
      { label: "Record Storage",      href: "#categories" },
    ],
  },
  { label: "About Us", href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export const CATEGORIES = [
  { icon: "🎵", title: "Telugu Classical", count: "840+ Records",   badge: "Popular", bg: "linear-gradient(135deg,#1a3a2a,#2d5a3a)" },
  { icon: "🎬", title: "Film Soundtracks", count: "1,200+ Records", badge: "Hot 🔥",  bg: "linear-gradient(135deg,#3a1a0a,#6b2e0f)" },
  { icon: "🎷", title: "Jazz & Fusion",    count: "320+ Records",   badge: null,       bg: "linear-gradient(135deg,#1a1a3a,#2a2a5a)" },
  { icon: "🥁", title: "World Beats",      count: "180+ Records",   badge: "New",      bg: "linear-gradient(135deg,#3a2a1a,#5a4020)" },
];

export const NEW_ARRIVALS = [
  { id: 1,  title: "Pushpa 2 — The Rule",              artist: "Devi Sri Prasad",    genre: "Telugu Film",  price: 1899, badge: "New",     rating: 4.9, img: pushImg },
  { id: 2,  title: "M S Subbulakshmi — Complete Works", artist: "M S Subbulakshmi",  genre: "Carnatic",     price: 3299, oldPrice: 4000, badge: "Hot 🔥", rating: 5.0, img: subaImg },
  { id: 3,  title: "Lagaan — Original Score",           artist: "A R Rahman",         genre: "Bollywood",    price: 2199, oldPrice: 2799, badge: "Sale",   rating: 4.8, img: rahmanImg },
  { id: 4,  title: "Shakti — Natural Elements",         artist: "John McLaughlin",    genre: "Fusion",       price: 2699, badge: "New",     rating: 4.6, img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&q=80" },
  { id: 5,  title: "Lalgudi Jayaraman — Violin Maestro",artist: "Lalgudi Jayaraman", genre: "Carnatic",     price: 2899, badge: "New",     rating: 5.0, img: lalgudiImg},
  { id: 6,  title: "Ilaiyaraaja — Nayagan OST",         artist: "Ilaiyaraaja",        genre: "Film Score",   price: 2399, badge: "Hot 🔥", rating: 4.9, img:  illayaImg },
  { id: 7,  title: "Kadri Gopalnath — Saxophone India", artist: "Kadri Gopalnath",   genre: "Jazz Fusion",  price: 2199, badge: null,      rating: 4.7, img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80" },
  { id: 8,  title: "Annamacharya Keerthanalu",          artist: "Ghantasala",         genre: "Devotional",   price: 1599, badge: "New",     rating: 5.0, img:anamaImg },
];

export const BESTSELLERS = [
  { id: 9,  title: "Sankarabharanam",                   artist: "K. Viswanath",       genre: "Telugu Classic",price: 2499, badge: "Best #1", rating: 5.0, img: sankaraImg
 },
  { id: 10, title: "RRR — Original Soundtrack",         artist: "M M Keeravani",      genre: "Film Score",   price: 1999, badge: "Best #2", rating: 4.9, img: rrrImg},
  { id: 11, title: "Annamacharya Keerthanalu",          artist: "Ghantasala",         genre: "Devotional",   price: 1599, badge: null,      rating: 5.0, img: anamaImg },
  { id: 12, title: "Kadri Gopalnath — Saxophone India", artist: "Kadri Gopalnath",   genre: "Jazz Fusion",  price: 2199, badge: null,      rating: 4.7, img: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&q=80" },
];

export const TESTIMONIALS = [
  { initials: "SK", color: "#C8541A", name: "Suresh Kumar",   location: "Hyderabad",     text: "Bought the Sankarabharanam vinyl — the sound quality is absolutely stunning! A completely different experience from digital streaming. Heartfully recommend Groove Street Records." },
  { initials: "PR", color: "#5C6B3A", name: "Padmavathi Rao", location: "Vijayawada",    text: "Gifted my grandfather his favourite Ghantasala records. Seeing the joy on his face brought tears to my eyes. Thank you Groove Street for making this possible!" },
  { initials: "VK", color: "#3D4826", name: "Venkata Krishna",location: "Visakhapatnam", text: "The collection is incredibly extensive. Found the RRR OST limited edition vinyl here and nowhere else! Excellent packaging, fast delivery. Will order again." },
];

export const CONTACT_DETAILS = [
  { icon: "📍", label: "Store Location", info: "MG Road, Near Benz Circle,\nVijayawada, Andhra Pradesh 520010" },
  { icon: "📞", label: "Phone",          info: "+91 98765 43210\nMon–Sat: 10am – 8pm" },
  { icon: "✉️", label: "Email",          info: "hello@groovestreetrecords.in\n24hr response time" },
  { icon: "🚚", label: "Shipping",       info: "All India delivery\nFree shipping on orders ₹999+" },
];

export const FOOTER_COLS = [
  {
    title: "Shop",
    links: [
      { label: "New Arrivals",      href: "#new-arrivals" },
      { label: "Best Sellers",      href: "#bestsellers" },
      { label: "Telugu Classical",  href: "#categories" },
      { label: "Film Soundtracks",  href: "#categories" },
      { label: "Accessories",       href: "#categories" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact Us",        href: "#contact" },
      { label: "Shipping Info",     href: "#contact" },
      { label: "Returns & Refunds", href: "#contact" },
      { label: "FAQ",               href: "#contact" },
      { label: "Track Order",       href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",  href: "#about" },
      { label: "Our Story", href: "#about" },
      { label: "Wholesale", href: "#contact" },
      { label: "Press",     href: "#contact" },
      { label: "Careers",   href: "#contact" },
    ],
  },
];

export const ABOUT_IMAGES = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
  "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=300&q=80",
  "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&q=80",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&q=80",
];

export const ABOUT_HIGHLIGHTS = [
  { value: "5,000+", label: "Unique Titles in Stock" },
  { value: "12 yrs", label: "Serving Music Lovers"  },
  { value: "15K+",   label: "Happy Customers"       },
  { value: "98%",    label: "Satisfaction Rate"     },
];

export const SEARCH_TAGS = [
  "S.P. Balasubrahmanyam",
  "Ilaiyaraaja",
  "Ghantasala",
  "A R Rahman",
  "RRR OST",
  "Pushpa",
];
