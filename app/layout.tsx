import { Fira_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "./components/header";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { BackToTop } from "./components/back-to-top";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "./components/toaster";
import Loader from "./components/loader";

export const metadata = {
  title: {
    default: "Matheus Guedes | Portfolio <Desenvolvedor Web />",
    template: "%s | Matheus Guedes",
  },
  icons: [
    {
      url: "/favicon.svg",
    },
  ],
};

const fira_sans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fira_sans.variable} ${poppins.variable}`}>
      <body className="bg-gray-900">
        <Loader>
          <NextTopLoader color="linear-gradient(to right, rgb(107,186,255), rgb(66,113,235))" />
          <Toaster />
          <BackToTop />
          <Header />
          {children}
          <ContactForm />
          <Footer />
        </Loader>
      </body>
    </html>
  );
}
