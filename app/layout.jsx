import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className} antialiased bg-cover bg-center`}
        style={{ backgroundImage: "url('/navy.jpg')" }}
      >
        <div className="absolute "></div>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}



