// lib/utils.ts
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cn(...inputs: any[]) {
    return twMerge(clsx(inputs))
}


export const formatINR = (v: number) => {
    return v.toLocaleString("en-IN", { style: "currency", currency: "INR" });
};