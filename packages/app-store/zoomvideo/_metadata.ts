import type { App } from "@calcom/types/App";

import { LocationType } from "../locations";
import _package from "./package.json";

export const metadata = {
  name: "Zoom Video",
  trending: true,
  isGlobal: false,
  installed: true,
  description: _package.description,
  type: "zoom_video",
  imageSrc: "/api/app-store/zoomvideo/icon.svg",
  variant: "conferencing",
  logo: "/api/app-store/zoomvideo/icon.svg",
  publisher: "HiboxScheduler",
  url: "https://zoom.us/",
  verified: true,
  rating: 4.3, // TODO: placeholder for now, pull this from TrustPilot or G2
  reviews: 69, // TODO: placeholder for now, pull this from TrustPilot or G2
  category: "video",
  slug: "zoom",
  title: "Zoom Video",
  email: "support@hibox.co",
  locationType: LocationType.Zoom,
  locationLabel: "Zoom Video",
} as App;

export default metadata;
