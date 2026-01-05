import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formateCurrency(
  value: number,
  currency: string = "USD",
  local: string = "en-US"
) {
  return new Intl.NumberFormat(local, {
    style: "currency",
    currency,
  }).format(value);
}
