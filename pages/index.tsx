import Head from "next/head"; 
import { Inter } from "next/font/google"; 
import Navbar from "@/components/nav/Navbar";
import Header from "@/components/header/Header";
import Services from "@/components/services/Services";
import Blogs from "@/components/blogs/Blogs";
import Contact from "@/components/contact/Contact";
import Sales from "@/components/sales/Sales";
import Footer from "@/components/footer/Footer";  
import TestimonialCarousel from "@/components/testimonials/Testimonial";
import Popup from "@/components/popup/Popup";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Super Savy Sales</title>
        <meta name="description" content="Super Savy Sales Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <Header/>
        <Blogs/>
        <Services/>
        <Contact/>
        <Sales/>
        <TestimonialCarousel/>
        <Popup url="/logo.jpg" color="rgb(190, 175, 135)" number="1(225)-523-2569" logoWidth="300px !important"/>
        <Footer/>
      </main>
    </>
  );
}
