/** Reads an environment variable the forgiving way: trimmed, and without quotes wrapped around the whole
    value. Quotes belong in a .env.local file; Vercel's dashboard keeps them as part of the value, so a value
    pasted there with quotes would otherwise break (for example an invalid "From" address). */
export function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim().replace(/^(["'])([\s\S]*)\1$/, "$2").trim();
  return value || undefined;
}
