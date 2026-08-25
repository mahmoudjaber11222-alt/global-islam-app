import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import useHadith from './useHadith';
import useLanguage from './useLanguage';
// import useQuran from "../../../hooks/useQuran";

import { router } from 'expo-router';
import { getTranslationFile } from '../utils/filter';

// MaterialCommunityIcons name strings (was lucide-react components)
const categoriesD = [
  { label: 'Worship', key: 'worship', icon: 'heart', theme: 'emerald' },
  {
    label: 'Prayer',
    key: 'prayer',
    icon: 'white-balance-sunny',
    theme: 'ocean',
  },
  { label: 'Fasting', key: 'fasting', icon: 'moon-full', theme: 'midnight' },
  { label: 'Zakat', key: 'zakat', icon: 'hand-heart', theme: 'amber' },
  { label: 'Hajj', key: 'hajj', icon: 'bank', theme: 'slate' },
  { label: "Du'a", key: 'supplication', icon: 'sparkles', theme: 'violet' },
  { label: 'Purification', key: 'purification', icon: 'water', theme: 'teal' },
  { label: 'Family', key: 'family', icon: 'account-group', theme: 'rose' },
  { label: 'Ethics', key: 'ethics', icon: 'feather', theme: 'lime' },
  { label: 'Transactions', key: 'transactions', icon: 'cart', theme: 'sunset' },
  {
    label: 'Knowledge',
    key: 'knowledge',
    icon: 'graduation-cap',
    theme: 'indigo',
  },
  {
    label: 'Spirituality',
    key: 'spirituality',
    icon: 'sparkles',
    theme: 'violet',
  },
  { label: 'Justice', key: 'justice', icon: 'scale-balance', theme: 'slate' },
  {
    label: 'End Times',
    key: 'day of judgment',
    icon: 'alert',
    theme: 'midnight',
  },
];

export default function useExplore() {
  const { selectedLanguage } = useLanguage();

  /**  component's state  **/
  const [categories, setCategories] = useState(categoriesD);

  useEffect(() => {
    async function seGetPlaylist() {
      const res = await getTranslationFile(
        selectedLanguage,
        'filter_categories',
      );
      const needed = categories.map((item) => {
        const getItem = res?.default?.find((i) => i?.key === item?.key);
        return { ...item, label: getItem?.label };
      });

      setCategories(needed);
    }
    seGetPlaylist();
  }, [selectedLanguage]);

  const [searchValue, handleChange] = useState('');
  const [firstSearch, setFirstSearch] = useState(true);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const [hadithResult, setHadithResult] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const [hadithSearch, hadithLoading, hadithError] = useHadith(
    selectedCategory || searchValue,
    selectedLanguage,
  );

  /**  derived state  **/
  const networkError = Boolean(hadithError);

  /**  handlers  **/
  function handleHadithResult(hadithData) {
    setHadithResult(hadithData);
  }

  function handleCategoryChange(key) {
    if (key === selectedCategory) {
      setSelectedCategory(null);
    } else setSelectedCategory(key);
  }

  function handleFirstSearch() {
    setFirstSearch(false);
  }

  function handleError(err) {
    setError(err);
  }

  async function handleHadithSearch() {
    try {
      let errMsg = null;
      if (!selectedCategory && !searchValue) {
        errMsg = 'Select category OR by topic';
      } else if (!selectedCategory && searchValue.length < 5) {
        errMsg = 'search topic cant be less than 5 characteres';
      }
      if (errMsg) {
        throw new Error(errMsg);
      }
      handleFirstSearch();

      const { data } = await hadithSearch(selectedCategory, selectedLanguage);

      const { result } = data;
      const formatedData = result?.map((item) => {
        return { content: item.title, headerData: { ID: item.hadith_id } };
      });
      setHadithResult(formatedData);
    } catch (err) {
      console.log(err?.message);
      handleError(err?.message);
    }
  }

  function handleHadithClick(id) {
    router.navigate(`/hadith/${id}`);
  }

  // useEffect hooks
  useEffect(() => {
    if (selectedCategory || searchValue) handleError('');
  }, [searchValue, selectedCategory]);

  return {
    errors: { networkError, error },
    handleres: {
      handleChange,
      handleHadithResult,
      handleCategoryChange,
      handleFirstSearch,
      handleHadithSearch,
      handleHadithClick,
    },
    data: {
      categories,
      hadithResult,
      firstSearch,
      selectedCategory,
      selectedLanguage,
      searchValue,
    },
    loaderes: { hadithLoading },
  };
}
