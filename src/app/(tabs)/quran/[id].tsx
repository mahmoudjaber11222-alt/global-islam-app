import { useLocalSearchParams } from 'expo-router';
import { FlatList, Pressable, Text, View } from 'react-native';
import quran from '../../../../assets/Static Data/Quran Text.json';
import { SurahId } from './types';

function VerseCard({
  onPress = (): void => {},
  arVerse = '',
  enVerse = '',
  index = 1,
}) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: '#f3f4f6' }}
      className="w-full  px-4 py-6"
    >
      <Text
        className="text-right text-xl leading-10 text-gray-900"
        style={{ writingDirection: 'rtl' }}
      >
        {arVerse}
        {' (' + (index + 1) + ') '}
      </Text>

      <Text className="border-b border-gray-200 mt-4 text-base leading-7 text-gray-600">
        {enVerse}
      </Text>
    </Pressable>
  );
}
export default function QuranSurah() {
  // get passed params
  const { id } = useLocalSearchParams();
  // derived
  const selectedSurah = quran.chapters[id as SurahId];
  const versesContent = Object.values(selectedSurah.verses);
  const { surah_name_ar, surah_name } = selectedSurah;
  function handleVerseClick(verse = {}) {
    console.log(verse);
  }

  return (
    <>
      {/* <Image source={{ uri: quranVerse }} className="w-full h-50" /> */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100 bg-white/50">
        <Text className="text-sm text-gray-500">{surah_name}</Text>

        <Text
          className="text-base font-semibold text-gray-900"
          style={{ writingDirection: 'rtl' }}
        >
          {surah_name_ar}
        </Text>
      </View>
      <FlatList
        data={versesContent}
        renderItem={({ item, index }) => (
          <VerseCard
            onPress={() => {
              handleVerseClick(item);
            }}
            arVerse={item.content}
            enVerse={item.translation_eng}
            key={index}
            index={index}
          />
        )}
      />
    </>
  );
}
