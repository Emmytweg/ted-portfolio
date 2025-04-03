import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/NavBar/NavBar";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap", // Ensures faster rendering
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
    <html  lang="en">
      <body className={`${poppins.className} antialiased`}>
      
          <NavBar />
          {children}
      </body>
    </html>
  );
}
