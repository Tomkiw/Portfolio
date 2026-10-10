/** Zero-pads a number for display: padNumber(3) → "03", padNumber(7, 3) → "007". */
export function padNumber(value: number, length = 2): string {
  return String(value).padStart(length, "0");
}
