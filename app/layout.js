import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Toaster } from 'sonner';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 , maximum-scale=1.0, user-scalable=no"
        />
        <title> TeamTrack</title>
      
      </head>
      <body className={`relative h-full w-full bg-[#000000] ${inter.className}`}>
     
        <Nav/>
        {children}
        <Toaster /></body>
    </html>
  );
}
