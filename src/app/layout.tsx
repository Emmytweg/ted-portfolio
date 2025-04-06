import type { Metadata } from "next";
import { Poppins, PT_Sans_Narrow, Rowdies } from "next/font/google";
import "./globals.css";
import  {NavBar}  from "@/components/NavBar/NavBar";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TED's Portfolio",
  description: "Creativity that speaks volumes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
