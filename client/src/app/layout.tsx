import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const robotoSans = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto-sans",
  weight: "100 900",
}); 
const robotoMono = localFont({
  src: "./fonts/Roboto-Thin.ttf",
  variable: "--font-roboto-mono",
  weight: "100 900",
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
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
