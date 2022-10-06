import { LocationType } from "@calcom/core/location";
import type { App } from "@calcom/types/App";

import config from "./config.json";

export const metadata = {
  category: "other",
  // FIXME: Currently for an app to be shown as installed, it must have this variable set. Either hardcoded or if it depends on some env variable, that should be checked here
  installed: false,
  rating: 0,
  reviews: 0,
  trending: false,
  verified: false,
  locationType: LocationType.Around,
  locationLabel: "Around Video",
  ...config,
} as App;

export default metadata;
