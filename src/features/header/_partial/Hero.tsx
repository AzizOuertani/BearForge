import NextImage from "@/components/ui/image/NextImage";

import { BearForgeLogo } from "~/svg/bearforge";
export default function Hero() {
  return (
    <div className="relative overflow-hidden pb-52">
      <div className="absolute left-0 top-0 z-10 h-full w-full">
        <NextImage
          useSkeleton
          src="/images/hero-background.webp"
          fill
          style={{ objectFit: "cover" }}
          alt="Hero Background"
        />
      </div>

      <div className="relative z-40 pb-16 pt-6 sm:pb-24">
        <BearForgeLogo className="mx-auto" />
        <main className="mx-auto mt-48 max-w-7xl space-y-6 px-4 text-center sm:mt-32">
          <h1 className="block text-5xl font-black text-gray-900 sm:text-5xl md:text-6xl xl:inline">
            Welcome to the bears' den
          </h1>
          <p className="mx-auto mt-3 max-w-md text-xl text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Discover all{" "}
            <a
              href="https://www.bearstudio.fr/"
              className="underline hover:no-underline"
              target="_blank"
            >
              BearStudio
            </a>
            ’s current internal projects and partners.
          </p>
        </main>
      </div>
    </div>
  );
}
