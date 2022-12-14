import type { App } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "CalDav Server",
  description: _package.description,
  installed: true,
  type: "caldav_calendar",
  title: "CalDav Server",
  imageSrc: "/api/app-store/caldavcalendar/icon.svg",
  variant: "calendar",
  category: "calendar",
  logo: "/api/app-store/caldavcalendar/icon.svg",
  publisher: "Hiboxscheduler.com",
  rating: 5,
  reviews: 69,
  slug: "caldav-calendar",
  trending: false,
  url: "https://hiboxscheduler.com/",
  verified: true,
  email: "support@hibox.co",
} as App;

export * as api from "./api";
export * as components from "./components";
export * as lib from "./lib";
