import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  imprimante1,
  imprimante2,
  imprimante4,
  imprimante5,
  imprimante6,
  imprimante7,
  imprimante8,
  imprimante9,
  encre1,
  encre2,
  encre3,
  encre4,
  ruban1,
  ruban2,
  ruban3,
  ruban4,
  bac1,
  bac2,
  bac3,
  bac4,
  IMPRIMANTE_PANTUM_CP2200DW,
  IMPRIMANTE_PANTUM_BM5100FDW,
  IMPRIMANTE_PANTUM_M6609N,
  IMPRIMANTE_PANTUM_P3300DN,
  IMPRIMANTE_PANTUM_P3300DW,
  IMPRIMANTE_PANTUM_P2509W,
  IMPRIMANTE_PANTUM_BP5100DN,
  IMPRIMANTE_PANTUM_M6559N,
  IMPRIMANTE_PANTUM_P2509,
  hp1,
  hp2,
  hp3,
  ricoh1,
  ricoh2,
  ricoh3,
  ricoh4,
  ricoh5,
  espson1,
  espson2,
} from "../assets/images/index";
import ShopImageOne from "../Images/Lenovo_IdeaPad_1_15AMN7.png";
import ShopImageTwo from "../Images/Lenovo_V15_G3_IAP.png";
import ShopImageThree from "../Images/Dell_Vostro_3520.png";
import ShopImageFour from "../Images/Lenovo_IdeaPad_Slim_3.png";
import ShopImageFive from "../Images/HP_250_G10.png";
import ShopImageSix from "../Images/HP_Laptop_15-FD0336NIA_Intel_Core_i3.png";
import ShopImageSeven from "../Images/Lenovo_V15_G4_IRU.png";
import ShopImageEight from "../Images/Dell_Inspiron_16_5635.png";
import ShopImageNine from "../Images/HP_15S-FQ5099TU.png";
import ShopImageTen from "../Images/Lenovo_ThinkBook_16_G6_IRL_Business.png";
import ShopImageEleven from "../Images/Dell_Inspiron_14_7430_2-in-1.png";
import ShopImageTwelve from "../Images/CarouselImageTwo.png";
import ShopImageThirteen from "../Images/HP_OMEN_16-XF0033DX_Gaming_Laptop.png";
import ShopImageFourteen from "../Images/Dell_Latitude_3540.png";
import ShopImageFifteen from "../Images/TP-Link_Tapo_C310_Outdoor_Security_Wi-Fi_Camera_-_Ver_1.0.png";
import ShopImageSixteen from "../Images/Sony_DualSense_Wireless_Controller_for_PS5_PlayStation_5.png";
import ShopImageSeventeen from "../Images/Bloody_G230P_Stereo_Surround_Sound_Gaming_Headphone.png";
import ShopImageEighteen from "../Images/Samsung_Galaxy_Watch6_Classic_47mm.png";
import ShopImageNinteen from "../Images/Samsung_LS22A330NHMXUE_22_FHD_Flat_Monitor.png";
import ShopImageTwenty from "../Images/ViewSonic_VA2432-H_24_1080p_IPS_100Hz_1ms_FHD_Monitor.png";
import ShopImageTwentyOne from "../Images/Asus_TUF_Gaming_VG249Q3A_Gaming_Monitor.png";

import "./style.css";

// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
  {
    _id: 1005,
    title: "Journal",
    link: "/journal",
  },
];
// =================== NavBarList End here ======================
// =================== Special Offer data Start here ============
export const SplOfferData = [
  {
    _id: "201",
    img: imprimante1,
    productName: "imprimante",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "202",
    img: imprimante2,
    productName: "imprimante",
    price: "180.00",
    color: "Gray",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "203",
    img: imprimante4,
    productName: "imprimante",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "204",
    img: imprimante5,
    productName: "imprimante",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "205",
    img: imprimante6,
    productName: "imprimante",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "206",
    img: imprimante7,
    productName: "imprimante",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "207",
    img: imprimante8,
    productName: "imprimante",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "208",
    img: imprimante9,
    productName: "imprimante",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "209",
    img: encre1,
    productName: "encre",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "ancre",
  },
  {
    _id: "210",
    img: encre2,
    productName: "encre",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "ancre",
  },
  {
    _id: "211",
    img: encre3,
    productName: "encre",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "ancre",
  },
  {
    _id: "212",
    img: encre4,
    productName: "encre",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "ancre",
  },
  {
    _id: "213",
    img: ruban1,
    productName: "Ruban",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Ruban",
  },
  {
    _id: "214",
    img: ruban2,
    productName: "Ruban",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Ruban",
  },
  {
    _id: "215",
    img: ruban3,
    productName: "Ruban",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Ruban",
  },
  {
    _id: "216",
    img: ruban4,
    productName: "Ruban",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Ruban",
  },
  {
    _id: "217",
    img: bac1,
    productName: "Bac de dechet",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Bac",
  },
  {
    _id: "219",
    img: bac2,
    productName: "Bac de dechet",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Bac",
  },
  {
    _id: "220",
    img: bac3,
    productName: "Bac de dechet",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Bac",
  },
  {
    _id: "221",
    img: bac4,
    productName: "Bac de dechet",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Bac",
  },
];
// =================== Special Offer data End here ==============

// =================== PaginationItems Start here ===============

export const paginationItems = [
  {
    _id: "201",
    img: ShopImageOne,
    productName: "Lenovo IdeaPad 1 15AMN7",
    price: "358",
    color: "Blanc",
    badge: true,
    brand: "lenovo",
    des: "Ideapad 1 Series laptops are engineered for productivity but priced for accessibility.",
    cat: "Laptops",
    ficheTech: [
      { label: "Technology ", value: "Electrophotographic monochrome laser " },
      { label: "Print speed ", value: "22 ppm (A4)/23 ppm (Letter)" },

      { label: "First print out time ", value: "Less than 7.8s       " },
      { label: "Maximum Monthly Duty Cycle", value: "15,000 pages " },
      {
        label: "Recommended monthly volume Resolution(dpi) ",
        value: "700 pages ",
      },
      { label: "Printer language Duplex Mode ", value: "Max. 1,200×1,200 " },
      { label: "Printer  ", value: "Max. 1,2   " },
      { label: "galass  ", value: "Max. 1,2   " },
    ],
  },
  {
    _id: "202",
    img: ShopImageTwo,
    productName: "Lenovo V15 G3 IAP",
    price: "373",
    color: "Blanc",
    badge: true,
    brand: "lenovo",
    des: "Think of the Lenovo V15 as your office manager, executing your everyday tasks with efficiency. It will keep your business productive and your data secure, while its thinner, smaller design and narrower side bezels put a clean, professional look on your desk—or wherever you choose to use it.",
    cat: "Laptops",
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },

  {
    _id: "203",
    img: ShopImageThree,
    productName: "Dell Vostro 3520",
    price: "376",
    color: "Blanc",
    badge: true,
    brand: "Dell",
    des: "Everyday tasks are quickly handled with ease using up to 12th Gen Intel® Core™ Processors.",
    cat: "Laptops",
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },
  {
    _id: "2005",
    img: ShopImageFour,
    productName: "Lenovo IdeaPad Slim 3",
    price: "389",
    color: "Blanc",
    badge: true,
    brand: "lenovo",
    des: "The smart, powerful, and military-grade durable IdeaPad Slim 5i Gen 8 laptop is designed for life on the go – and the school of hard knocks. It’s thin and light enough to slip under your arm or into any bag.",
    cat: "Laptops",
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },

  {
    _id: "20005",
    img: ShopImageFive,
    productName: "HP 250 G10",
    price: "394",
    color: "Blanc",
    badge: true,
    brand: "Hp",
    des: "The budget-friendly, business-ready HP 250 G10 Laptop provides essential power and productivity features in a thin and light design with a large 15.6-inch diagonal display.",
    cat: "Laptops",
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },

  {
    _id: "206",
    img: ShopImageSix,
    productName: "HP Laptop 15-FD0336NIA Intel Core i3",
    price: "396",
    color: "Blanc",
    badge: true,
    brand: "Hp",
    des: "Say hello to the reliable PCs that easily pass the vibe check. HP PCs are built with dependable technology, next-level power, and rock-solid performance that turn your to-do lists into to-done lists.",
    cat: "Laptops",
    ficheTech: [
      { label: "gtin	", value: "P3300DN      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Mémoire	", value: "256MO      " },
      { label: "Technologie d impression		", value: "laser      " },
      { label: "Impression		", value: "Noir & Blanc      " },
      { label: "Connectivite		", value: "Réseau      " },
      { label: "Vitesse du Processeur		", value: "350 MHz      " },
      { label: "Type ecran		", value: "LCD 2 lignes      " },
      {
        label: "Consommation d énergie		",
        value:
          "Impression : 525 W en moyenne Veille : 50 W en veille : moins de 2 W      ",
      },
      {
        label: "Gestion d entrée Papier Standard		",
        value: "Papier Bac d'alimentation: 250pages      ",
      },
      { label: "Premiére Page Imprimée		", value: "Moins de 8,2 secondes      " },
      {
        label: "Vitesse d impression Noir		",
        value: "33 ppm (A4) / 35 ppm (Lettre)      ",
      },
      { label: "Cycle d utilisation Mensuel		", value: "60000pages      " },
      {
        label: "Résolution d impression		",
        value: "1 200 x 1 200 dpi (maximum)      ",
      },
      { label: "formats	", value: "A4      " },
      {
        label: "Connecteurs		",
        value: "USB2.0 haut débit / Ethernet：IEEE 802.3 10/100Base-Tx      ",
      },
      { label: "Fonctionnalités		", value: "Impression      " },
      {
        label: "Volume de Pages Mensuel Recommandé		",
        value: "750 à 3 500 pages      ",
      },
      { label: "Dimensions		", value: "354 x 334 x 232mm      " },
      { label: "Garantie	", value: "1ANS      " },
    ],
  },

  {
    _id: "207",
    img: ShopImageSeven,
    productName: "Lenovo V15 G4 IRU",
    price: "495",
    color: "Blanc",
    badge: true,
    brand: "Lenovo",
    des: "Open for business tired of entry-level laptops that lack the tools you need to run a business? The Lenovo V15 Gen 4 laptop is both feature packed and value priced. You'll enjoy powerful Intel® processing, battery-efficient Intel® integrated graphics, and a conveniently sized, 15.6 display that gives a great workspace.",
    cat: "Laptops",
    ficheTech: [
      { label: "gtin		", value: "P3300DW      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Mémoire	", value: "256 Mo      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Connectivite	", value: "WIFI      " },
      { label: "Vitesse du Processeur		", value: "350 MHz      " },
      { label: "Type ecran		", value: "LCD 2 lignes      " },
      {
        label: "Consommation d énergie		",
        value:
          "Impression : 525 W en moyenne Veille : 50 W en veille : moins de 2 W      ",
      },
      {
        label: "Gestion d entrée Papier Standard		",
        value: "Papier Bac d'alimentation: 250pages      ",
      },
      { label: "Premiére Page Imprimée		", value: "Moins de 8,2 secondes      " },
      {
        label: "Vitesse d impression Noir		",
        value: "33 ppm (A4) / 35 ppm (Lettre)      ",
      },
      { label: "Cycle d utilisation Mensuel		", value: "60000pages      " },
      { label: "Résolution d impression		", value: "Max.1200x1200 dpi      " },
      {
        label: "Volume de Pages Mensuel Recommandé		",
        value: "750 à 3 500 pages      ",
      },
      {
        label: "Interface Réseau	",
        value:
          "Ethernet USB 2.0 haut débit : Wi-Fi IEEE 802.3 10/100Base-Tx : IEEE 802.11b/g/n      ",
      },
      {
        label: "Contenu de L'emballage		",
        value:
          "Imprimante - Cordon d’alimentation - Câble d’interface USB - Plateau de sortie - CD-ROM - Guide de configuration rapide      ",
      },
      { label: "Garantie	", value: "1 ANS      " },
    ],
  },

  {
    _id: "208",
    img: ShopImageEight,
    productName: "Dell Inspiron 16 5635",
    price: "556",
    color: "Blanc",
    badge: true,
    brand: "Dell",
    des: "Level-up your productivity by using the world’s longest battery life in a 16 essential commercial notebook*. Customize to fit your needs with a vast array of options and speed your work with Dell Optimizer, now with Express Connect.",
    cat: "Laptops",
    ficheTech: [
      { label: "gtin	", value: "P2509W      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Ecran Tactile		", value: "Non      " },
      { label: "Connectivite	", value: "WiFi      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats	", value: "A4      " },
      { label: "Connecteurs		", value: "USB 2.0, Wi-Fi      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      {
        label: "Contenu de L'emballage		",
        value:
          "Imprimante - Cordon d’alimentation - Câble d’interface USB - Plateau de sortie - CD-ROM - Guide de configuration rapide      ",
      },
      { label: "Dimensions		", value: "337 x 220 x 178 mm      " },
    ],
  },
  {
    _id: "233",
    img: ShopImageNine,
    productName: "HP 15S-FQ5099TU",
    price: "599",
    color: "Blanc",
    badge: true,
    brand: "Hp",
    des: "Stay productive and entertained from anywhere with long-lasting battery life and a micro-edge display. 6L1S5PA#UUF.",
    cat: "Laptops",
    ficheTech: [],
  },
  {
    _id: "220",
    img: ShopImageTen,
    productName: "Lenovo ThinkBook 16 G6 IRL Business",
    price: "678",
    color: "Mixed",
    badge: true,
    brand: "Lenovo",
    des: "ThinkBook Series | Built for business, designed for you. These laptops make it easy to do business with style. From options that keep you up and running without pause, to security that works behind the scenes. And that's not all-ThinkBook laptops are built with premium materials like anodized aluminium with dual-tone finish.    ",
    cat: "Laptops",
    ficheTech: [],
  },
  {
    _id: "221",
    img: ShopImageEleven,
    productName: "Dell Inspiron 14 7430 2-in-1",
    price: "720",
    color: "Black",
    badge: true,
    des: "Work, watch and listen as you explore the depths of your entertainment with Dolby Atmos® spatial audio.",
    cat: "Laptops",
  },
  {
    _id: "215",
    img: ShopImageTwelve,
    productName: "HP Pavilion 15-EG3147NIA Touchscreen Laptop",
    price: "520",
    color: "Mixed",
    badge: true,
    des: "Do your thing, anywhere, with the help of the compact HP Pavilion 15 Laptop.",
    cat: "Laptops",
  },
  {
    _id: "216",
    img: ShopImageThirteen,
    productName: "HP OMEN 16-XF0033DX Gaming Laptop",
    price: "420",
    color: "Black",
    badge: true,
    des: "Powerful gaming anywhere with next-gen performance and comfort.",
    cat: "Laptops",
  },
  {
    _id: "209",
    img: ShopImageFourteen,
    productName: "Dell Latitude 3540",
    price: "753",
    color: "Mixed",
    badge: true,
    des: "Modern design to boost productivity. Experience uncompromised connectivity. Essential performance for any business.",
    cat: "Laptops",
  },
  {
    _id: "210",
    img: ShopImageFifteen,
    productName: "TP-Link Tapo C310 Outdoor Security Wi-Fi Camera - Ver 1.0",
    price: "48",
    color: "Black",
    badge: true,
    des: "Ultra-High-Definition Video: Records every image in crystal-clear 3MP definition.",
    cat: "Camera",
  },

  {
    _id: "211",
    img: ShopImageSixteen,
    productName: "Sony DualSense Wireless Controller for PS5 PlayStation 5",
    price: "71",
    color: "Mixed",
    badge: true,
    des: "Discover a deeper, highly immersive gaming experience* that brings the action to life in the palms of your hands.",
    cat: "Gaming",
  },
  {
    _id: "212",
    img: ShopImageSeventeen,
    productName: "Bloody G230P Stereo Surround Sound Gaming Headphone",
    price: "12",
    color: "Black",
    badge: true,
    des: "Discover a deeper, highly immersive gaming experience* that brings the action to life in the palms of your hands.",
    cat: "Gaming",
  },
  {
    _id: "213",
    img: ShopImageEighteen,
    productName: "Samsung Galaxy Watch6 Classic 47mm",
    price: "251",
    color: "Mixed",
    badge: true,
    des: "Galaxy Watch6. Start your everyday wellness journey.",
    cat: "Watch",
  },
  {
    _id: "214",
    img: ShopImageNinteen,
    productName: "Samsung LS22A330NHMXUE 22 FHD Flat Monitor",
    price: "114",
    color: "Black",
    badge: true,
    des: "Experience the whole picture from wherever you sit. Everything remains vivid and clear from 178° all around—even up into the very corners.",
    cat: "Lcd",
  },

  {
    _id: "217",
    img: ShopImageTwenty,
    productName: "ViewSonic VA2432-H 24” 1080p IPS 100Hz 1ms FHD Monitor",
    price: "128",
    color: "Mixed",
    badge: true,
    des: "The ViewSonic VA2432-H is a 24” 1080p IPS monitor featuring HDMI and VGA inputs for business and home use.",
    cat: "Lcd",
  },
  {
    _id: "219",
    img: ShopImageTwentyOne,
    productName: "Asus TUF Gaming VG249Q3A Gaming Monitor",
    price: "194",
    color: "Black",
    badge: true,
    des: "TUF Gaming VG249Q3A Gaming Monitor – 24-inch(23.8 inch viewable), Full HD(1920x1080), 180Hz, Fast IPS, ELMB, 1ms (GTG), FreeSync Premium™, Variable Overdrive, 99% sRGB",
    cat: "Lcd",
  },

  // =================== imprimante hp =================

  {
    _id: "hp1",
    img: hp1,
    productName:
      "IMPRIMANTE HP JET D'ENCRE HP SMART TANK 516 COULEUR MFP 3EN1 A4 WIFI",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Hp",
    des: "Desc : Imprimante Jet D'encre HP SMART TANK 516 3en1 Couleur 3YW70A - Fonction: Impression, Copie, Numérisation - Technologie d'impression: jet d'encre - Vitesse d'impression Noir : Jusqu'à 22 ppm - Vitesse d’impression Couleur : Jusqu'à 16 ppm - Résolution d'impression Couleur : 1200x1200dpi - Format Papier : A4 - Capacité Papier : 100 feuilles -  Cycle d'utilisation (mensuel, A4) : Jusqu'à 1000pages - Connectivité: USB 2.0 haute vitesse, Wi-Fi, Bluetooth LE -  Dimensions: 447 x 373 x 158 mm - Garantie: 1 an",
    cat: "Printers",
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "3YW70A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Ecran", value: "LCD" },
      {
        label: "Taille de L écran cm",
        value: "Affichage LCD 7 segments + icône 5,08 cm (2 pouces)",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Technologie d impression", value: "Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Impression", value: "Couleur" },
      { label: "formats", value: "A4" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 22 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 16 ppm" },
      { label: "FAX", value: "Non" },
      { label: "Mémoire", value: "256 Mo" },
      {
        label: "Qualité d impression Noir",
        value: "Jusqu'à 1 200 x 1 200 ppp",
      },
      {
        label: "Qualité d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 ppp",
      },
      { label: "Résolution d impression Couleur", value: "1200x1200dpi" },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Connectivite", value: "USB 2.0, WiFi" },
      { label: "Capacité papier", value: "100 feuilles" },
      { label: "Cycle d utilisation Mensuel", value: "Jusqu'à 1000 pages" },
      {
        label: "Consommation électrique",
        value:
          "0,12 Watts (Arrêt manuel), 3,12 Watts (Prêt), 0,75 Watt (Veille) 5",
      },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "Imprimante HP Smart Tank 516, Bouteilles d'encre: 3 x HP GT53XL (noir), 3 x HP GT52 (cyan, magenta et jaune), Notice de précaution pour l'encre; Fiche pour le ré-emballage et réglementaire RoH-EAC; Cordon d'alimentation, Guide d'installation; Notice PT",
      },
      { label: "Poids", value: "5,14 kg" },
      { label: "Dimensions", value: "447 x 373 x 158 mm" },
      { label: "Couleur", value: "Noir et Bleu" },
      { label: "Garantie", value: "1 an" },
    ],
  },

  {
    _id: "hp2",
    img: hp2,
    productName: "IMPRIMANTE HP INK TANK WIRELESS 415 ALL-IN-ONE",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Hp",
    des: "Desc : Imprimante Multifonction Jet d'encre 3 en 1 à réservoir intégré - Impression, numérisation, copie, sans fil - Résolution d'impression: Jusqu'à 4800 x 1200 dpi - Vitesse d'impression Couleur Jusqu'à 15 ppm -Vitesse d'impression N et B Jusqu'à 18 ppm - Résolution du scanner: 1200 x 1200 dpi - Format A4 - Interface USB - Bac d'alimentation de 60 feuilles - Dimensions: 525 x 310 x 158 mm - Garantie 1 an (+ Extension de Garantie 2 Ans ) + 5 Bouteilles",
    cat: "Printers",
    ficheTech: [],
  },

  {
    _id: "hp3",
    img: hp3,
    productName: "IMPRIMANTE HP INK TANK WIRELESS 415 ALL-IN-ONE",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Hp",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Printers",
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
  // =================== imprimante ricoh =================
  {
    _id: "ricoh1",
    img: ricoh1,
    productName: "IMPRIMANTE RICOH P501",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Ricoh",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Printers",
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },

  {
    _id: "ricoh2",
    img: ricoh2,
    productName: "IMPRIMANTE RICOH SP3710DN",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Ricoh",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Printers",
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
  {
    _id: "ricoh3",
    img: ricoh3,
    productName: "IMPRIMANTE RICOH SP4520DN",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Ricoh",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Printers",
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
  {
    _id: "ricoh4",
    img: ricoh4,
    productName: "IMPRIMANTE RICOH COULEUR LASER SPC840",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Ricoh",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Printers",
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
  {
    _id: "ricoh5",
    img: ricoh5,
    productName: "IMPRIMANTE RICOH SP4510DN (407313)",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Ricoh",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Printers",
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },

  // =================== imprimante ricoh =================

  {
    _id: "espson1",
    img: espson1,
    productName: "IMPRIMANTE EPSON L3251 3EN1 A4 WIFI",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Epson",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Printers",
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },

  {
    _id: "espson2",
    img: espson2,
    productName: "IMPRIMANTE EPSON JET D'ENCRE L3156 COULEUR A4  WIFI",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Epson",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Printers",
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
];
