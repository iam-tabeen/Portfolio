import type { Metadata } from "next";
import "./globals.css";
import ScriptLoader from "@/components/ScriptLoader";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Home 01 - Virtuo Personal Portfolio HTML Template",
  description:
    "Virtuo is a modern personal portfolio template for designers, developers, content writer, cleaner, programmer, fashion designer, model, Influencer and freelancers. Fully responsive, SEO-friendly, Bootstrap and easy to customize.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.svg" />
        <link rel="stylesheet" href="/assets/css/vendor/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.css" />
        <link rel="stylesheet" href="/assets/css/plugins/odometer.css" />
        <link rel="stylesheet" href="/assets/css/vendor/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/custom-mobile.css" />
      </head>
      <body
        className="spybody"
        data-spy="scroll"
        data-bs-target=".navbar-example2"
        data-offset="150"
      >
        <SmoothScroll />
        {children}
        <ScriptLoader />
      </body>
    </html>
  );
}
