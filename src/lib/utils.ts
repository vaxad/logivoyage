import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDate(date: string | Date | number) {
  return new Date(date).toLocaleDateString();
}

export const getAvatarFallback = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join("");
};
