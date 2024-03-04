import { db } from "@/lib/db";

export const getTwoFATokenbyToken = async (token: string) => {
  try {
    const twoFAtoken = await db.twoFAToken.findUnique({
      where: { token },
    });

    return twoFAtoken;
  } catch {
    return null;
  }
};

export const getTwoFATokenbyEmail = async (email: string) => {
  try {
    const twoFAtoken = await db.twoFAToken.findFirst({
      where: { email },
    });
    return twoFAtoken;
  } catch {
    return null;
  }
};
