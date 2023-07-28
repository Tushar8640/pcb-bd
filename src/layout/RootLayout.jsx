import Footer from "@/components/shared/Footer";
import MainMenu from "@/components/shared/MainMenu";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <>
      <MainMenu />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
