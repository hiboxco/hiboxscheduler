import type { App } from "@calcom/types/App";

import { LocationType } from "../locations";
import _package from "./package.json";

export const metadata = {
  name: "Jitsi Video",
  description: _package.description,
  installed: false,
  type: "jitsi_video",
  imageSrc: "/api/app-store/jitsivideo/icon.svg",
  variant: "conferencing",
  logo: "/api/app-store/jitsivideo/icon.svg",
  publisher: "Hiboxscheduler.com",
  url: "https://jitsi.org/",
  verified: false,
  rating: 0, // TODO: placeholder for now, pull this from TrustPilot or G2
  reviews: 0, // TODO: placeholder for now, pull this from TrustPilot or G2
  category: "video",
  slug: "jitsi",
  title: "Jitsi Meet",
  trending: false,
  isGlobal: false,
  email: "support@hibox.co",
  locationType: LocationType.Jitsi,
  locationLabel: "Jitsi Video",
} as App;

export default metadata;
