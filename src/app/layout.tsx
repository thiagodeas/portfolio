import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import "aos/dist/aos.css";
import { AOSClient } from "@/components/AOSClient";


const montserrat = Montserrat({
   subsets: ["latin"], 
   weight: ["400", "700"],
  });

export const metadata: Metadata = {
  title: "Portfólio | Thiago Sousa",
  description: "portfolio para mostrar minhas skills, projetos e falar um pouco sobre mim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} bg-main-color`}>
        <Header />
        <AOSClient />
        {children}
        </body>
    </html>
  );
}
