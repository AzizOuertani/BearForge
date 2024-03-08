"use client";

import * as React from "react";

import Footer from "@/features/footer/footer";
import Header from "@/features/header/Header";
import Partners from "@/features/partners/Partners";
import Projects from "@/features/projects/Projects";

export default function HomePage() {
  return (
    <>
      <main>
        <Header />
        <Projects />
        <Partners />
        <Footer />
      </main>
    </>
  );
}
