import { fetchHadithList } from '../service/hadith';
import { translateText } from '../service/translation';
import useAsync from './useAsync';

export default function useHadith(searchTerm, language) {
  const { run, loading, error } = useAsync(fetchHadithList);

  async function search() {
    const translatedSearch = await translateText(searchTerm, {
      from: language,
      to: 'en',
    });

    const result = await run(translatedSearch, language);

    return result;
  }

  return [search, loading, error];
}
