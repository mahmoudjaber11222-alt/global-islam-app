/**
 * Removes Arabic diacritical marks (tashkil) from a string.
 *
 * Removes:
 *   • Fatha, Damma, Kasra, Sukun, Shadda, Tanween
 *   • Maddah, Hamza above/below
 *   • Dagger Alif (superscript alef)
 *   • Tatweel (Kashida) — optional letter extension
 *
 * @param text - Arabic text possibly containing tashkil
 * @returns Clean Arabic text without diacritics
 */
export default function stripTashkil(text: string): string {
  if (!text) return text;

  // \u0640  = Tatweel (Kashida) — letter extension, not a diacritic
  //           but usually stripped alongside tashkil.
  // \u064B-\u065F = Arabic diacritic block (fatha, damma, kasra, etc.)
  // \u0670  = Dagger Alif (superscript alef)
  return text.replace(/[\u0640\u064B-\u065F\u0670]/g, '');
}
