import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cam Thompson",
  description: "Personal site of Cam Thompson",
  metadataBase: new URL("https://camthompson.com"),
  openGraph: {
    title: "Cam Thompson",
    description: "Personal site of Cam Thompson",
    url: "https://camthompson.com",
    siteName: "Cam Thompson",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cam Thompson",
    description: "Personal site of Cam Thompson",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "256x256" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
