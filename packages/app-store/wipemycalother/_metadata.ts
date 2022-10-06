import type { App } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: _package.name,
  description: _package.description,
  installed: false,
  category: "other",
  // If using static next public folder, can then be referenced from the base URL (/).
  imageSrc: "/api/app-store/wipemycalother/icon.svg",
  logo: "/api/app-store/wipemycalother/icon.svg",
  publisher: "Hiboxscheduler.com",
  rating: 0,
  reviews: 0,
  slug: "wipe-my-cal",
  title: "Wipe my cal",
  trending: false,
  type: "wipemycal_other",
  url: "https://cal.com/apps/wipe-my-cal",
  variant: "other",
  verified: false,
  email: "support@hibox.co",
} as App;

export default metadata;
