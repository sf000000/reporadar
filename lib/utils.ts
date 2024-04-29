import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const colors = ["blue", "red", "green", "purple", "yellow"];

// Get random tailwind gradient
// bg-gradient-to-tr from-yellow-100 via-yellow-50 to-yellow-200
export function randomGradient() {
  const from = colors[Math.floor(Math.random() * colors.length)];
  const via = colors[Math.floor(Math.random() * colors.length)];
  const to = colors[Math.floor(Math.random() * colors.length)];

  return `bg-gradient-to-tr from-${from}-100 via-${via}-50 to-${to}-200`;
}
