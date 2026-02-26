import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function guessFromBrowser(): "USD" | "INR" {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return /Kolkata/i.test(tz || "") ? "INR" : "USD";
}

export function formatPrice(amount: number, currency: "USD" | "INR"): string {
  if (currency === "INR") {
    const inr = amount * 83;
    return `₹${inr.toLocaleString("en-IN")}`;
  }
  return `$${amount.toLocaleString("en-US")}`;
}
