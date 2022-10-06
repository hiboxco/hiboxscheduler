import { TFunction } from "next-i18next";

import { renderEmail } from "..";
import BaseEmail from "./_base-email";

export type EmailVerification = {
  language: TFunction;
  user: {
    name?: string | null;
    email: string;
  };
  verificationLink: string;
};


export default class VerificationEmail extends BaseEmail {
  emailVerificationTmp: EmailVerification;

  constructor(emailVerificationTmp: EmailVerification) {
    super();
    this.name = "SEND_VERIFICATION_EMAIL";
    this.emailVerificationTmp = emailVerificationTmp;
  }

  protected getNodeMailerPayload(): Record<string, unknown> {
    return {
      to: `${this.emailVerificationTmp.user.name} <${this.emailVerificationTmp.user.email}>`,
      from: `hiboxscheduler.com <${this.getMailerOptions().from}>`,
      subject: this.emailVerificationTmp.language("verification_email_subject"),
      html: renderEmail("VerificationEmail", this.emailVerificationTmp),
      text: this.getTextBody(),
    };
  }

  protected getTextBody(): string {
    return `
${this.emailVerificationTmp.language("verification_email_subject")}
${this.emailVerificationTmp.language("hi_user_name", { name: this.emailVerificationTmp.user.name })},
${this.emailVerificationTmp.language("Please click the link below to verify your account!")}
${this.emailVerificationTmp.language("Verify")}: ${this.emailVerificationTmp.verificationLink}
${this.emailVerificationTmp.language("password_reset_instructions")}
${this.emailVerificationTmp.language("have_any_questions")} ${this.emailVerificationTmp.language(
      "contact_our_support_team"
    )}
`.replace(/(<([^>]+)>)/gi, "");
  }
}
