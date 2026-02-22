import { cookies } from "next/headers";

const ADMIN_COOKIE_NAME = "f2a_admin_session";
const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 24; // 24 hours

export async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const secret = process.env.ADMIN_SECRET;

  if (!secret) {
    return false;
  }

  return token === secret;
}

export async function setAdminSession(): Promise<void> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return;

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: ADMIN_COOKIE_MAX_AGE,
    path: "/",
  });
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
}

export { ADMIN_COOKIE_NAME };
