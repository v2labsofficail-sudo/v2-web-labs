import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "V2 Labs | Digital Studio & Development Agency",
  description: "We build premium digital experiences that drive results. Expert custom websites, web applications, e-commerce solutions, mobile responsive designs, and branding.",
  keywords: ["V2 Labs", "digital agency", "custom website development", "web application development", "shopify ecommerce", "wordpress websites", "video editing", "logo design", "mobile responsive design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="glow-bg">
          <div className="glow-circle-1"></div>
          <div className="glow-circle-2"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
