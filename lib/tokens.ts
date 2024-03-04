import { getVerificationTokenByEmail } from "@/data/verificationToken";
import crypto from "crypto";
import { getTwoFATokenbyEmail } from "@/data/twoFAtoken";
import { v4 as uuidv4 } from "uuid";
import { db } from "./db";
import { getPasswordResetTokenByEmail } from "@/data/resetToken";

export const generateTwoFAToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();
  //ten minute expiry
  const expires = new Date(new Date().getTime() + 600 * 1000);

  const existingToken = await getTwoFATokenbyEmail(email);

  if (existingToken) {
    await db.twoFAToken.delete({
      where: { id: existingToken.id },
    });
  }

  const twoFAtoken = await db.twoFAToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return twoFAtoken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return passwordResetToken;
};

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const exisitingToken = await getVerificationTokenByEmail(email);

  if (exisitingToken) {
    await db.verificationToken.delete({
      where: {
        id: exisitingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};
