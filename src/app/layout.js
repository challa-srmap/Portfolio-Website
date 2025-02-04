"use client"
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const inter = Libre_Franklin({ subsets: ["vietnamese"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

  
  return (
    
    <html lang="en">
      
      
      
      <body className={inter.className}>
      <div className="fixed top-0 -z-10 h-full w-full overflow-x-hidden">
      
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#303030] bg-[radial-gradient(ellipse_30%_30%_at_40%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <video autoPlay muted playsInline loop id="video">
      <source src="assets/images/smoke6.webm" type="video/webm"/></video>
      
    </div>


    
        <Navbar/>
        <div className="">
          {children}
          <Footer/>
        </div>
        
      </body>
      
    </html>
  );
}
