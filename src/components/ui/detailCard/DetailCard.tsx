import { ChevronRight } from "lucide-react";
import React from "react";

import NextImage from "@/components/ui/image/NextImage";

import { GithubLogo } from "~/svg/social/github";
import { TwitterLogo } from "~/svg/social/twitter";
import { YouTubeLogo } from "~/svg/social/youtube";
type DetailCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  projectLogo: JSX.Element;
  button: string;
  buttonUrl: string;
};
const DetailCard: React.FC<{ DetailCardData: DetailCardProps }> = ({
  DetailCardData,
}) => {
  return (
    <li className="relative z-50 overflow-hidden rounded-2xl  shadow-2xl duration-300   hover:translate-y-1 hover:shadow-lg">
      <NextImage
        useSkeleton
        src={DetailCardData.imageUrl}
        fill
        priority={false}
        style={{ objectFit: "cover" }}
        alt={DetailCardData.name}
      />

      <div className="relative z-20 flex h-full flex-col space-y-4  p-7 ">
        <div className="flex-grow space-y-3 text-lg font-medium leading-6">
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-5 sm:space-y-0">
            {DetailCardData.projectLogo}
            <h2 className="text-3xl font-semibold text-white">
              {DetailCardData.name}
            </h2>
          </div>
          <p className="text-md whitespace-pre-wrap font-normal text-white">
            {DetailCardData.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul role="list" className="flex space-x-5">
            {DetailCardData.twitterUrl && (
              <li>
                <a
                  href={DetailCardData.twitterUrl}
                  className="text-white hover:text-gray-200"
                >
                  <span className="sr-only">Twitter</span>
                  <TwitterLogo className="rounded-lg" />
                </a>
              </li>
            )}
            {DetailCardData.githubUrl && (
              <li>
                <a
                  href={DetailCardData.githubUrl}
                  className="text-white hover:text-gray-200"
                >
                  <span className="sr-only">GitHub</span>
                  <GithubLogo className="rounded-lg" />
                </a>
              </li>
            )}
            {DetailCardData.youtubeUrl && (
              <li>
                <a
                  href={DetailCardData.youtubeUrl}
                  className="text-white hover:text-gray-200"
                >
                  <span className="sr-only">YouTube</span>
                  <YouTubeLogo className="rounded-lg" />
                </a>
              </li>
            )}
          </ul>
          <a
            href={DetailCardData.buttonUrl}
            className="inline-flex h-12 items-center rounded-md border border-transparent bg-white px-6 text-lg font-medium text-gray-900 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            {DetailCardData.button}
            <ChevronRight className="-mr-1 ml-3 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </li>
  );
};

export default DetailCard;
