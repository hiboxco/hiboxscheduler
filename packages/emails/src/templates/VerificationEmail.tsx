import type { TFunction } from "next-i18next";

import { BaseEmailHtml, CallToAction } from "../components";

export type VerifyEmail = {
  language: TFunction;
  user: {
    name?: string | null;
    email: string;
  };
  verificationLink: string;
};
export const VerificationEmail = (
  props: VerifyEmail & Partial<React.ComponentProps<typeof BaseEmailHtml>>
) => {
  return (
    <BaseEmailHtml subject={props.language("verification_email_subject")}>
      <p>
        <>{props.language("hi_user_name", { name: props.user.name })}!</>
      </p>
      <p style={{ fontWeight: 400, lineHeight: "24px" }}>
        <>{props.language("verification_message_body")}</>
      </p>
      <CallToAction label={props.language("verify_now")} href={props.verificationLink} />

      <div style={{ lineHeight: "6px" }}>
        <p style={{ fontWeight: 400, lineHeight: "24px" }}>
          <>
            {props.language("have_any_questions")}{" "}
            <a href="mailto:support@hiboxscheduler.com" style={{ color: "#3E3E3E" }} target="_blank" rel="noreferrer">
              <>{props.language("contact_our_support_team")}</>
            </a>
          </>
        </p>
      </div>
    </BaseEmailHtml>
  );
};
