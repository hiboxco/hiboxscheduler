import Link from "next/link";
import React from "react";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import SAMLConfiguration from "@ee/components/saml/Configuration";

import { trpc } from "@lib/trpc";

import SettingsShell from "@components/SettingsShell";

export default function Security() {
  const user = trpc.useQuery(["viewer.me"]).data;
  const { t } = useLocale();
  return (
    <SettingsShell heading={t("Github")} subtitle={t("Follow us on Github")}>
      <>
        <div className="space-y-2 divide-y">
          <div className="my-3">
            <h2 className="font-cal text-lg font-medium leading-6 text-gray-900">{t("Github")}</h2>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            <br />
            <Link href="https://github.com/hiboxco/hibox" target="_blank">
              Github Repo (link to https://github.com/hiboxco/hibox)
            </Link>
            <br />
            <br />
            Hibox Scheduler is open source software under the GNU Affero General Public License. This means
            you may download your own copy of the software for your own use. Please read the full license for
            details.
          </p>
        </div>

        <SAMLConfiguration teamsView={false} teamId={null} />
      </>
    </SettingsShell>
  );
}
