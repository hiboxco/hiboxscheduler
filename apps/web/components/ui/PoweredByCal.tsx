import Link from "next/link";

import { useIsEmbed } from "@calcom/embed-core/embed-iframe";
//import { POWERED_BY_URL } from "@calcom/lib/constants";
import { useLocale } from "@calcom/lib/hooks/useLocale";

const powered_by_url = "https://hibox.co";
const PoweredByCal = () => {
  const { t } = useLocale();
  const isEmbed = useIsEmbed();
  return (
    <div className={"p-1 text-center sm:text-right" + (isEmbed ? " max-w-3xl" : "")}>
      <Link href={powered_by_url}>
        <a target="_blank" className="text-bookinglight opacity-50 hover:opacity-100 dark:text-white">
          {t("powered_by")}{" "}
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="relative -mt-px inline h-[18px] w-auto dark:hidden"
              src="/hibox-logo.png"
              alt="Hibox Scheduler Logo"
            />
          }
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="relativ -mt-px hidden h-[18px] w-auto dark:inline"
              src="/hibox-logo.png"
              alt="Hibox Scheduler Logo"
            />
          }
        </a>
      </Link>
    </div>
  );
};

export default PoweredByCal;
