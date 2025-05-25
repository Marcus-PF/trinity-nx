/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃            Trinity – QR Code Generator              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Generates base64 QR codes for URLs, secrets, or tokens.
 */

import qrcode from 'qrcode';

/**
 * Generate a base64-encoded QR code for any string data.
 *
 * @param data - The text to encode in the QR code
 * @returns A Promise resolving to a base64 PNG image as a data URL
 */
export async function generateQRCode(data: string): Promise<string> {
  return await qrcode.toDataURL(data);
}
