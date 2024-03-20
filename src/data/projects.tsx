import FicusUILogo from "~/svg/project/ficusUI";
import { FormizLogo } from "~/svg/project/formiz";
import { StartUILogo } from "~/svg/project/start-ui";
import { TwitchLogo } from "~/svg/project/twitch";
export const projects = [
  {
    name: "Formiz",
    description:
      "Multi steps form logic available out of the box! No more pain to build perfect UX for complex forms.",
    imageUrl: "/images/projects/formiz-background.png",
    githubUrl: "https://github.com/BearStudio/formiz",
    projectLogo: <FormizLogo />,
    button: "Visit website",
    buttonUrl: "https://formiz-react.com/",
  },

  {
    name: "Start UI",
    description:
      "UI starters for web, mobile and design, which lets you easily bootstrap new UI projects.",
    imageUrl: "/images/projects/start-ui-background.png",
    twitterUrl: "https://twitter.com/startui_",
    githubUrl: "https://github.com/BearStudio/start-ui-web",
    projectLogo: <StartUILogo />,
    button: "Go to Start UI",
    buttonUrl: "https://start-ui.com/",
  },
  {
    name: "BS Live",
    description:
      "Bearstudio offers you stream sessions to share their knowledge and experience in a friendly atmosphere!",
    imageUrl: "/images/projects/stream-background.png",
    youtubeUrl:
      "https://www.youtube.com/channel/UC-2hpnhKgU2C_OFucjEN0IA/videos",
    projectLogo: <TwitchLogo />,
    button: "Check out channel",
    buttonUrl: "https://www.twitch.tv/bearstudiolive",
  },
  {
    name: "Ficus UI",
    description:
      "React Native UI library forked from Magnus UI and inspired by Chakra UI.",
    imageUrl: "/images/projects/ficusUi-background.png",
    githubUrl: "https://github.com/BearStudio/react-native-ficus-ui",
    projectLogo: <FicusUILogo />,
    button: "Visit website",
    buttonUrl: "https://ficus-ui.com/",
  },
];
