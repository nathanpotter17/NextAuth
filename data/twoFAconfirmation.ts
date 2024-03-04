import { db } from "@/lib/db";

export const getTwoFAByUserId = async (userId: string) => {
  try {
    const twoFAconf = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    });
    return twoFAconf;
  } catch {
    return null;
  }
};
