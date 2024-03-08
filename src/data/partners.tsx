import { CamelStudioLogo } from "~/svg/partner/CamelStudio";
import { CleverCloudLogo } from "~/svg/partner/clevercloud";
import { CodeursEnSeineLogo } from "~/svg/partner/codeurs-en-seine";
import ForkItLogo from "~/svg/partner/ForkIt";
import { TraveledMapLogo } from "~/svg/partner/traveled-map";
import { WebvertLogo } from "~/svg/partner/webvert";
export const partners = [
  {
    name: "Clever Cloud",
    description:
      "Clever Cloud is a new generation hosting service that manages and secures your environments.",
    imageUrl: "/images/partners/clevercloud-background.png",
    twitterUrl: "https://twitter.com/clever_cloud",
    githubUrl: "https://github.com/CleverCloud",
    linkedinUrl: "https://www.linkedin.com/company/clever-cloud/",
    projectLogo: <CleverCloudLogo />,
    button: "Visit website",
    buttonUrl: "https://www.clever-cloud.com/fr/",
  },
  {
    name: "Fork it! Community",
    description:
      "Events for real people in tech around the world to share real-life experiences.",
    imageUrl: "/images/partners/Forkit-background.png",
    twitterUrl: "https://twitter.com/ForkitCommunity",
    githubUrl: "https://github.com/Fork-It-Community",
    linkedinUrl: "https://www.linkedin.com/company/fork-it-community",
    projectLogo: <ForkItLogo />,
    button: "Visit website",
    buttonUrl: "https://www.forkit.community/",
  },
  {
    name: "Codeurs En Seine",
    description:
      "The Codeurs en Seine team offers a full day of conferences Web, Devops, UX, Security.",
    imageUrl: "/images/partners/codeurs-en-seine-background.png",
    twitterUrl: "https://twitter.com/codeursenseine",
    githubUrl: "https://github.com/CodeursEnSeine/",
    twitchUrl: "https://www.twitch.tv/codeursenseine/",
    projectLogo: <CodeursEnSeineLogo />,
    button: "Visit website",
    buttonUrl: "https://www.codeursenseine.com",
  },
  {
    name: "Webvert",
    description:
      "In order to be able to repair sites with hundreds or even thousands of pages and images.",
    imageUrl: "/images/partners/webvert-background.png",
    twitterUrl: "https://twitter.com/lewebvert",
    linkedinUrl: "https://www.linkedin.com/company/lewebvert/",
    projectLogo: <WebvertLogo />,
    button: "Visit website",
    buttonUrl: "https://www.lewebvert.fr/",
  },
  {
    name: "Traveled Map",
    description:
      "Create, draw and illustrate your personal or professional trips and itineraries with photos, from a very simple interface.",
    imageUrl: "/images/partners/traveled-map-background.png",
    twitterUrl: "https://twitter.com/qlerebours_",
    linkedinUrl: "https://www.linkedin.com/company/traveledmap/",
    projectLogo: <TraveledMapLogo />,
    button: "Visit website",
    buttonUrl: "https://www.traveledmap.com/",
  },
  {
    name: "CamelStudio",
    description:
      "Web and mobile development studio based in Tunis which supports you in your projects, whether for one-off support or a complete design.",
    imageUrl: "/images/partners/CamelStudio-background.png",
    linkedinUrl: "https://www.linkedin.com/company/camelstudio/",
    projectLogo: <CamelStudioLogo />,
    button: "Visit website",
    buttonUrl: "https://camel-studio-website.vercel.app/",
  },
];
