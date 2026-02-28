/** Base path for the app — set via NEXT_PUBLIC_BASE_PATH at build time (e.g. "/ATCC-new" for GitHub Pages). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public-folder asset path with the base path so it resolves on GitHub Pages. */
export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}
