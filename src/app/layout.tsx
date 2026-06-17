import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://eireneadjei.online"),
  title: "Eirene | Communicator. Entrepreneur. Creative. Woman of Faith.",
  description: "Portfolio of Eirene, Communicator. Entrepreneur. Creative. Woman of Faith.",
  icons: {
    icon: "https://media.licdn.com/dms/image/v2/D4D03AQFHobsCzMDYfw/profile-displayphoto-crop_800_800/B4DZmf0XQdJUAI-/0/1759322931397?e=1782950400&v=beta&t=-RiJ6yw5PZuXDHrif78FyQKFnDxtDxCiZmMAHfHiyjM",
  },
  openGraph: {
    title: "Eirene | Communicator. Entrepreneur. Creative. Woman of Faith.",
    description: "Portfolio of Eirene, Communicator. Entrepreneur. Creative. Woman of Faith.",
    url: "https://eireneadjei.online",
    siteName: "Eirene Adjei",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D03AQFHobsCzMDYfw/profile-displayphoto-crop_800_800/B4DZmf0XQdJUAI-/0/1759322931397?e=1782950400&v=beta&t=-RiJ6yw5PZuXDHrif78FyQKFnDxtDxCiZmMAHfHiyjM",
        width: 800,
        height: 800,
        alt: "Eirene Adjei Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eirene | Communicator. Entrepreneur. Creative. Woman of Faith.",
    description: "Portfolio of Eirene, Communicator. Entrepreneur. Creative. Woman of Faith.",
    images: ["https://media.licdn.com/dms/image/v2/D4D03AQFHobsCzMDYfw/profile-displayphoto-crop_800_800/B4DZmf0XQdJUAI-/0/1759322931397?e=1782950400&v=beta&t=-RiJ6yw5PZuXDHrif78FyQKFnDxtDxCiZmMAHfHiyjM"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
