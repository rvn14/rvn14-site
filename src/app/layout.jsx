import NavBar from "@/components/Navbar";
import "./globals.css";
import { ReactLenis } from 'lenis/react'
import PreLoader from "@/components/PreLoader";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Dasun Adithya | Creative Developer & Designer",
  description: "Portfolio of Dasun Adithya — a creative full-stack developer & designer crafting modern web experiences with clean design and powerful code.",
};



export default function RootLayout({ children }) {

  

  return (
    <html lang="en" suppressHydrationWarning
    >
      <head>
       
      </head>
      <body
        className={` antialiased`}
      >
        <ReactLenis root>
          <PreLoader />
          <NavBar />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
