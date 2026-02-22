const FINGERPRINT_KEY = "f2a_user_fingerprint";

export function getOrCreateFingerprint(): string {
  if (typeof window === "undefined") return "";
  try {
    let fp = localStorage.getItem(FINGERPRINT_KEY);
    if (!fp) {
      fp = crypto.randomUUID();
      localStorage.setItem(FINGERPRINT_KEY, fp);
    }
    return fp;
  } catch {
    return crypto.randomUUID();
  }
}
