/**
 * Public contact channels. One file, on purpose.
 *
 * TODO: email — Jael's public address. Leave "" until it is chosen.
 * TODO: whatsapp — digits only, country code, no plus and no spaces.
 *       Shape: 9725XXXXXXXX. Leave "" until it is chosen.
 * TODO: calendly — full https URL of the scheduling page. Leave "" until it exists.
 *
 * An empty string is deliberate. The contact page then says the link will be
 * added, instead of sending people to a dead address. Do not invent one.
 */
export const contact = {
  email: "",
  whatsapp: "",
  calendly: "",
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const whatsappPattern = /^[1-9]\d{7,14}$/;

export function contactLinks() {
  const email = emailPattern.test(contact.email) ? contact.email : "";
  const whatsapp = whatsappPattern.test(contact.whatsapp) ? contact.whatsapp : "";
  const calendly = contact.calendly.startsWith("https://") ? contact.calendly : "";
  return {
    email,
    whatsapp,
    calendly,
    mailto: email ? `mailto:${email}` : "",
    whatsappHref: whatsapp ? `https://wa.me/${whatsapp}` : "",
  };
}
