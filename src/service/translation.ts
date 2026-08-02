const translateCache = new Map();

export async function translateText(text, { from = 'ar', to = 'en' } = {}) {
  // 1. Return cached result if exists
  const cacheKey = `${from}:${to}:${text}`;
  if (translateCache.has(cacheKey)) {
    return translateCache.get(cacheKey);
  }

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(
      text,
    )}`;

    const res = await fetch(url);

    if (!res.ok) throw new Error('Network response not ok');

    const data = await res.json();

    // 2. Safe extraction (Google response is nested & unstable)
    const translated = data?.[0]?.map((part) => part?.[0])?.join('') || text;

    // 3. Cache only valid string results
    const finalResult =
      typeof translated === 'string' && translated.trim() ? translated : text;

    translateCache.set(cacheKey, finalResult);

    return finalResult;
  } catch (err) {
    // 4. Fallback: always return original text
    return text;
  }
}
