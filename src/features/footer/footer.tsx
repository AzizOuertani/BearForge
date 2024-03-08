import BearIllustration from "~/images/bear";
import { FacebookLogo } from "~/svg/social/facebook";
import { InstagramLogo } from "~/svg/social/instagram";
import { LinkedInLogo } from "~/svg/social/linkedin";
import { TwitterLogo } from "~/svg/social/twitter";
import { WebLogo } from "~/svg/social/web";

const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/allyouneedisbear",
    icon: <FacebookLogo className="rounded-lg text-black" aria-hidden="true" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_bearstudio/",
    icon: (
      <InstagramLogo className="rounded-lg text-black" aria-hidden="true" />
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/_BearStudio",
    icon: <TwitterLogo className="rounded-lg text-black" aria-hidden="true" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/bearstudio/",
    icon: <LinkedInLogo className="rounded-lg text-black" aria-hidden="true" />,
  },
  {
    name: "Web Site",
    href: "https://www.bearstudio.fr/",
    icon: <WebLogo className="rounded-lg text-black" aria-hidden="true" />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="flex justify-between pb-24 lg:px-28 lg:pb-0 xl:px-60 2xl:px-[23rem]">
        <div className="mx-auto flex flex-col justify-center px-8 lg:mx-0">
          <h1 className="text-4xl font-bold">Don't forget to follow us!</h1>
          <h2 className="text-2xl font-medium">
            To see our news about BearStudio's projects
          </h2>
          <div className="mx-auto mt-8 flex space-x-6 sm:mx-0">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-900"
                target="_blank"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <BearIllustration className="hidden lg:block" />
      </div>

      <p className="bg-transparent py-6 text-center text-base text-gray-600 md:bg-gray-900 md:text-gray-300">
        &copy; {currentYear} BearStudio SAS, Inc. All rights reserved.
      </p>
    </footer>
  );
}
