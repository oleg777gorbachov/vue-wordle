import { words } from "./words";

export function getWord(length: number): string {
  const filtered = words.filter((e) => e.length === length);
  const index = Math.round(Math.random() * filtered.length);
  return filtered[index];
}
