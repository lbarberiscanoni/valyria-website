// src/app/layout.js
import './globals.css';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Valyria Studios',
  description: 'A software studio providing real-world experience to student developers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}