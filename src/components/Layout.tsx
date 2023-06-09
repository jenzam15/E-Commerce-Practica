import React, { FC, ReactNode } from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <menu className={`${styles.main} ${inter.className}`}>{children}</menu>
      <Footer />
    </>
  );
};
