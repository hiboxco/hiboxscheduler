import type { App } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Stripe",
  description: _package.description,
  installed: !!(
    process.env.STRIPE_CLIENT_ID &&
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY &&
    process.env.STRIPE_PRIVATE_KEY
  ),
  slug: "stripe",
  category: "payment",
  logo: "/api/app-store/stripepayment/icon.svg",
  rating: 4.6,
  trending: false,
  reviews: 69,
  imageSrc: "/api/app-store/stripepayment/icon.svg",
  publisher: "Hiboxscheduler.com",
  title: "Stripe",
  type: "stripe_payment",
  url: "https://hiboxscheduler.com/",
  docsUrl: "https://stripe.com/docs",
  variant: "payment",
  verified: false,
  email: "support@hibox.co",
} as App;

export default metadata;
