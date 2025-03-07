import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
=======
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header style={{ backgroundColor: "lightblue",  textAlign: "center" }}> Header
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "lightblue",
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            textAlign: "center",
          }} 
        > Footer</footer>
>>>>>>> 7c81e5d (Initial commit)
      </body>
    </html>
  );
}
