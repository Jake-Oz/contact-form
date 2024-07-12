import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Custom Form",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
