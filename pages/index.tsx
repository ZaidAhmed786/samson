import Head from "next/head"; 
import { Inter } from "next/font/google"; 
import Popup from "@/components/popup/Popup";
import PapaJhon from "@/components/papajhon/landingPage"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const message = "Papa John's";
  return (
    <>
      <Head>
        <title>{message}</title>
        <meta name="description" content="Papa Jhon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/finalfavicon.ico" />
      </Head>
      <main>
        <PapaJhon/>
        <Popup url="/papajhon/papajhonlogo.svg" color="red" number="+1(321)-333-4374" logoWidth="300px !important"/>
      </main>
    </>
  );
}
