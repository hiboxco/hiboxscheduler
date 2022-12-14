import type { App } from "@calcom/types/App";

import { LocationType } from "../locations";
import _package from "./package.json";

export const metadata = {
  name: "Cal Video",
  description: _package.description,
  installed: !!process.env.DAILY_API_KEY,
  type: "daily_video",
  imageSrc: "/api/app-store/dailyvideo/icon.svg",
  variant: "conferencing",
  url: "https://daily.co",
  trending: false,
  logo: "/api/app-store/dailyvideo/icon.svg",
  publisher: "Hiboxscheduler.com",
  verified: false,
  rating: 4.3, // TODO: placeholder for now, pull this from TrustPilot or G2
  reviews: 69, // TODO: placeholder for now, pull this from TrustPilot or G2
  category: "video",
  slug: "daily-video",
  title: "Cal Video",
  isGlobal: false,
  email: "support@hibox.co",
  locationType: LocationType.Daily,
  locationLabel: "Cal Video",
  key: { apikey: process.env.DAILY_API_KEY },
} as App;

export default metadata;
