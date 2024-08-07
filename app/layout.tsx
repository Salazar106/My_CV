import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Header } from "./ui/general/header";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./ui/general/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danie Salazar",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
        <body className={inter.className}>
          <NextUIProvider>
            <Header />
            <div className="min-h-[95vh] flex flex-col  items-center">
              {children}
            </div>
            <Footer />
          </NextUIProvider>
        </body>
    </html>
  );
}
