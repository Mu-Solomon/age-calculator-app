import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Age calculator app",
  description:
    "Developed by Muyonjo Solomon, it tells you how old are you according to years, months and days old!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f0f0f0]">{children}</body>
    </html>
  );
}
