import type { App } from "@calcom/types/App";

import { LocationType } from "../locations";
import _package from "./package.json";

export const metadata = {
  name: "Microsoft 365/Teams (Requires work/school account)",
  description: _package.description,
  type: "office365_video",
  imageSrc: "/api/app-store/office365video/icon.svg",
  variant: "conferencing",
  logo: "/api/app-store/office365video/icon.svg",
  publisher: "Hiboxscheduler.com",
  url: "https://www.microsoft.com/en-ca/microsoft-teams/group-chat-software",
  verified: true,
  rating: 4.3, // TODO: placeholder for now, pull this from TrustPilot or G2
  reviews: 69, // TODO: placeholder for now, pull this from TrustPilot or G2
  category: "video",
  slug: "msteams",
  title: "MS Teams (Requires work/school account)",
  trending: true,
  email: "support@hibox.co",
  locationType: LocationType.Teams,
  locationLabel: "MS Teams",
} as App;

export default metadata;
