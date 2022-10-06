import type { App } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Apple Calendar",
  description: _package.description,
  installed: true,
  type: "apple_calendar",
  title: "Apple Calendar",
  imageSrc: "/api/app-store/applecalendar/icon.svg",
  variant: "calendar",
  category: "calendar",
  logo: "/api/app-store/applecalendar/icon.svg",
  publisher: "Hiboxscheduler.com",
  rating: 5,
  reviews: 69,
  slug: "apple-calendar",
  trending: false,
  url: "https://hiboxscheduler.com/",
  verified: true,
  email: "support@hibox.co",
} as App;

export default metadata;
