import { BinaryBackground } from "../components/canvas/Background";
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
        {children}
      </body>
    </html>
  );
}
