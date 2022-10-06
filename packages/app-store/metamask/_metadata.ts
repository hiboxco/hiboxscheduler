import type { App } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "MetaMask",
  description: _package.description,
  installed: false,
  category: "web3",
  // If using static next public folder, can then be referenced from the base URL (/).
  imageSrc: "/api/app-store/metamask/icon.svg",
  logo: "/api/app-store/metamask/icon.svg",
  publisher: "Hiboxscheduler.com",
  rating: 5,
  reviews: 69,
  slug: "metamask",
  title: "MetaMask",
  trending: false,
  type: "metamask_web3",
  url: "https://hiboxscheduler.com/",
  variant: "other",
  verified: false,
  email: "support@hibox.co",
} as App;

export default metadata;
