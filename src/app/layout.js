import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ['normal', 'italic'],
  weight: ['400', '700', '900'],
});

export const metadata = {
    title: "CarVerse | Find Your Dream Car",
  description: "Explore a premium collection of cars at CarVerse. Modern, responsive, and luxurious car showcase.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
     className={`${outfit.variable} ${playfair.variable} antialiased`} suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden ">
      <ThemeProvider>
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
