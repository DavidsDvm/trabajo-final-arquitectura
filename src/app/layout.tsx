import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Engineering Evolution - 90s Stories",
  description: "Discover the stories of engineering graduates from the 90s and their journey through life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gray-900 text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
