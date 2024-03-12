import { ChevronLeft, Siren } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <main>
      <section className="bg-white">
        <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
          <Siren
            size={60}
            className="drop-shadow-glow animate-flicker text-gray-500"
          />
          <h1 className="mb-4 mt-8 text-5xl font-black md:text-6xl ">404</h1>

          <h1 className="mb-8 text-5xl font-black md:text-6xl ">
            Page Not Found
          </h1>
          <Link
            href="/"
            className={`${buttonVariants({
              variant: "outline",
              size: "lg",
            })} text-balck  px-2 text-xl `}
          >
            <ChevronLeft /> Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
