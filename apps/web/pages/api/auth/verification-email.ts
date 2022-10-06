import { VerificationToken } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import { Query } from "react-query";
import { v4 as uuidv4 } from "uuid";

import { sendVerificationEmail } from "@calcom/emails";
import prisma from "@calcom/prisma";

import { getTranslation } from "@server/lib/i18n";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const t = await getTranslation(req.body.language ?? "en", "common");

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const maybeUser = await prisma.user.findUnique({
      where: {
        email: req.body?.email?.toLowerCase(),
      },
      select: {
        id: true,
        name: true,
        identityProvider: true,
        email: true,
      },
    });

    if (!maybeUser) {
      return res.status(400).json({ message: "Couldn't find an account for this email" });
    }
    const uuid = uuidv4();
    const verificationLink = `${process.env.NEXT_PUBLIC_WEBAPP_URL}/auth/email-confirmation?token=${uuid}`;

    await prisma.user.update({
      where: {
        id: maybeUser.id,
      },
      data: {
        emailVerificationToken: uuid,
      },
    });

    await sendVerificationEmail({
      language: t,
      user: maybeUser,
      verificationLink,
    });

    /** So we can test the email verification flow on CI */
    if (process.env.NEXT_PUBLIC_IS_E2E) {
      return res.status(201).json({ message: "Verification Link", verificationLink });
    } else {
      return res.status(201).json({ message: "Reset Requested" });
    }
  } catch (reason) {
    // console.error(reason);
    return res.status(500).json({ message: "Unable to create email verification request" });
  }
}
