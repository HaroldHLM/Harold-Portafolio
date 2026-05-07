import { BinaryBackground } from "../components/canvas/Background";
import Navbar from "../components/ui/Navbar";
import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
});

export const metadata = {
  title: "Harold Layme | Software Engineer",
  description: "Portfolio de ingeniería de software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${cormorant.variable} ${dmMono.variable}`}>
      <body>
        <BinaryBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
