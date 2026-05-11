import type { Metadata } from "next";
import "./globals.css";
import ScriptLoader from "@/components/ScriptLoader";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Tabeen Haider - Full-Stack Web Developer",
  description:
    "Welcome to my portfolio! I am a passionate web developer with expertise in creating dynamic and responsive websites. Explore my projects, skills, and experience to see how I can bring your ideas to life. Let's connect and collaborate on your next web development project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon/favicon.png" />
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
