"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <main className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <section className="mx-auto max-w-2xl text-center font-sans">
          <h2 className="mt-2  text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            bearforge
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pour commencer, consultez le start-repo de Bearstudio. Choisissez
            les filtres "Website", "SEO" et "Landing Page", puis commencez par
            créer les issues correspondantes.
          </p>

          <Link
            href="https://start-repo.bearstudio.tools/app/issues"
            className={`${buttonVariants({
              size: "lg",
            })}  mt-6 px-1 text-xl`}
            target="_blank"
          >
            Issues
            <ChevronRight />
          </Link>
        </section>
      </main>
    </>
  );
}
