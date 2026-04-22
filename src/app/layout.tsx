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
    <html lang="en">
      <body className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
