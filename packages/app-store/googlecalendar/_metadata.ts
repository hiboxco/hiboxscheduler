import { validJson } from "@calcom/lib/jsonUtils";
import type { App } from "@calcom/types/App";

import { LocationType } from "../locations";
import _package from "./package.json";

export const metadata = {
  name: "Google Calendar",
  description: _package.description,
  installed: !!(process.env.GOOGLE_API_CREDENTIALS && validJson(process.env.GOOGLE_API_CREDENTIALS)),
  isGlobal: false,
  type: "google_calendar",
  title: "Google Calendar",
  imageSrc: "/api/app-store/googlecalendar/icon.svg",
  variant: "calendar",
  category: "calendar",
  logo: "/api/app-store/googlecalendar/icon.svg",
  publisher: "Hiboxscheduler.com",
  rating: 5,
  reviews: 69,
  slug: "google-calendar",
  trending: true,
  url: "https://hiboxscheduler.com/",
  verified: true,
  email: "support@hibox.co",
} as App;

export default metadata;
