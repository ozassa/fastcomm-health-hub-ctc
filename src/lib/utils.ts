import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a phone number with Brazilian mask
 * @param value - The raw phone number string
 * @returns Formatted phone number
 */
export function formatPhoneNumber(value: string): string {
  // Remove all non-numeric characters
  const digits = value.replace(/\D/g, '');
  
  // Apply mask based on length
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  
  // For 11 digits (mobile with 9th digit)
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

/**
 * Removes phone mask and returns only digits
 * @param maskedValue - The masked phone number
 * @returns Clean digits only
 */
export function cleanPhoneNumber(maskedValue: string): string {
  return maskedValue.replace(/\D/g, '');
}
