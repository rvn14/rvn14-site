import "./globals.css";
import { ReactLenis } from 'lenis/react'


export const metadata = {
  title: "Dasun Adithya | Creative Developer & Designer",
  description: "Portfolio of Dasun Adithya — a creative full-stack developer & designer crafting modern web experiences with clean design and powerful code.",
};



export default function RootLayout({ children }) {

  

  return (
    <html lang="en" suppressHydrationWarning
      
    >
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body
        className={` antialiased`}
      >
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
