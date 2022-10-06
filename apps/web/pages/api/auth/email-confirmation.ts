import { now } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

import { hashPassword } from "@lib/auth";
import prisma from "@lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // return res.status(400).json({ message: "Error: Request with blank token!" });
  if (req.method !== "POST") {
    return res.status(400).json({ message: "" });
  }

  try {
    const token = req.body?.token;
    //const rawRequestId = req.body?.requestId;

    if (!token) {
      return res.status(400).json({ message: "Error: Request with blank token!" });
    }

    const maybeUser = await prisma.user.findFirst({
      where: {
        emailVerificationToken: token as string,
      },
    });

    if (!maybeUser) {
      return res.status(400).json({ message: "Invalid Token: Couldn't find the token for this request" });
    }

    await prisma.user.update({
      where: {
        id: maybeUser.id,
      },
      data: {
        emailVerified: new Date(),
        verified: true,
        emailVerificationToken: "",
      },
    });

    return res.status(201).json({ message: "Congratulations! Your account has been verified" });
  } catch (reason) {
    console.error(reason);
    return res.status(500).json({ message: "Unable to create password reset request" });
  }
}
