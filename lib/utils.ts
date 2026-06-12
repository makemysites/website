import { CONTACT } from './constants';

/** Merge class names (simple utility, no clsx dependency needed) */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/** Format phone number for display */
export function formatPhone(phone: string): string {
  return phone.replace(/(\+91)(\d{5})(\d{5})/, '$1 $2 $3');
}

/** Build WhatsApp URL with custom message */
export function buildWhatsAppURL(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Build WhatsApp URL from form data */
export function buildFormWhatsAppURL(data: Record<string, string | string[]>): string {
  const lines = [
    `Hi Abhinay, I'd like a website for my clinic.`,
    ``,
    `*Name:* ${data.name}`,
    `*Clinic:* ${data.clinic}`,
    `*Specialty:* ${data.specialty}`,
    `*WhatsApp:* ${data.phone}`,
    `*Need:* ${Array.isArray(data.needs) ? data.needs.join(', ') : data.needs}`,
  ];
  if (data.budget) lines.push(`*Budget:* ${data.budget}`);
  if (data.message) lines.push(`*Notes:* ${data.message}`);

  return buildWhatsAppURL(lines.join('\n'));
}

/** Validate Indian mobile number */
export function validatePhone(phone: string): boolean {
  return /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''));
}
