import { BinaryBackground } from "../components/canvas/Background";
import { Navbar } from "../components/ui/Navbar";
import Hero from "../components/ui/Hero";
import "./globals.css";

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
    <html>
      <body>
        <BinaryBackground />
        <Navbar />
        <Hero />
        {children}
      </body>
    </html>
  );
}
