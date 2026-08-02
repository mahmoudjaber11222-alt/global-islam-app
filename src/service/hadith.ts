import { HADITH_URL, SEARCH_HADITH_URL } from './BASE_URLS';
export async function fetchHadithList(query, language, chapters = null) {
  const response = await fetch(`${SEARCH_HADITH_URL}/hadith/`, {
    method: 'POST',
    body: JSON.stringify({ query, language, chapters }),
    headers: {
      'content-type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const result = await response.json();

  return result;
}

export async function fetchHadith(hadithId, language = 'en') {
  const response = await fetch(
    `${HADITH_URL}/api/v1/hadeeths/one/?language=${language}&id=${hadithId}`,
  );
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const result = await response.json();

  return result;
}
