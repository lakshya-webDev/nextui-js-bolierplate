export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const APP_URL = process.env.NEST_PUBLIC_APP_URL;

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
