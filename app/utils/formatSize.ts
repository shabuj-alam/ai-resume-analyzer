/**
 * Convert a byte count into a human-readable string in KB, MB, or GB.
 * - Uses binary (base-1024) units.
 * - Formats with 2 decimal places.
 * - For values under 1 KB, shows in KB with decimals (e.g., 512 bytes -> 0.50 KB).
 *
 * @param bytes Number of bytes.
 * @returns Formatted size string (e.g., "12.34 KB", "5.67 MB", "1.23 GB").
 */
export default function formatSize(bytes: number): string {
  if (typeof bytes !== 'number' || !isFinite(bytes) || isNaN(bytes)) {
    return '0.00 KB';
  }

  const safeBytes = Math.max(0, bytes);
  const kb = safeBytes / 1024;

  if (kb < 1024) {
    return `${kb.toFixed(2)} KB`;
  }

  const mb = kb / 1024;
  if (mb < 1024) {
    return `${mb.toFixed(2)} MB`;
  }

  const gb = mb / 1024;
  return `${gb.toFixed(2)} GB`;
}
