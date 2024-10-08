import { apiUrl } from "./config";

export async function getData<T>(slug: string) {
  const data = await fetch(`${apiUrl}/${slug}`);
  return (await data.json()) as T;
}
