import type { App } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "HubSpot CRM",
  installed: !!process.env.HUBSPOT_CLIENT_ID,
  description: _package.description,
  type: "hubspot_other_calendar",
  imageSrc: "/api/app-store/hubspotothercalendar/icon.svg",
  variant: "other_calendar",
  logo: "/api/app-store/hubspotothercalendar/icon.svg",
  publisher: "Hiboxscheduler.com",
  url: "https://hubspot.com/",
  verified: true,
  rating: 4.3, // TODO: placeholder for now, pull this from TrustPilot or G2
  reviews: 69, // TODO: placeholder for now, pull this from TrustPilot or G2
  category: "other",
  label: "HubSpot CRM",
  slug: "hubspot",
  title: "HubSpot CRM",
  trending: true,
  email: "support@hibox.co",
} as App;

export default metadata;
