import { router } from 'expo-router';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import surahs from '../../../../assets/Static Data/Surahs Names';

const MACAIAN_IMG_URL =
  'https://travilia.com/uploads/0000/8/2024/09/26/hajj-rituals-makkah-accorhotels.jpg';
const MADANIAN_IMG_URL =
  'https://arab-j.net/uploads/images/2021/12/21/AR22.JPG';

function SurahCard({
  startsPage = 0,
  onPress = (): void => {},
  uri = '',
  enName = '',
  arName = '',
  index = '',
  verses = 0,
}) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center justify-between px-4 py-3 bg-white  border border-gray-100 shadow-sm"
    >
      {/* Left: Number */}
      <Text className="w-10 text-center text-gray-500 font-semibold">
        {startsPage}
      </Text>

      {/* Middle: Main content */}
      <View className="flex-1 flex-row items-center gap-3">
        {/* Icon */}
        <Image source={{ uri }} className="w-10 h-10 rounded-full" />

        {/* Text block */}
        <View className="flex-1">
          <Text className="text-gray-900 font-semibold">{enName}</Text>
          <Text className="text-gray-500 text-xs">{verses} verses</Text>
        </View>

        {/* Arabic name */}
        <Text className="text-gray-700 font-arabic text-right">{arName}</Text>
      </View>

      {/* Right: Index */}
      <Text className="w-12 text-right text-gray-400 text-xs">{index}</Text>
    </Pressable>
  );
}
function handleSurahClick(item = { number: 0 }): void {
  console.log(item);
  router.push(`/quran/${item?.number}`);
}
export default function QuranSurah() {
  return (
    <>
      <FlatList
        data={surahs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SurahCard
            uri={
              item.revelation === 'Meccan' ? MACAIAN_IMG_URL : MADANIAN_IMG_URL
            }
            onPress={() => {
              handleSurahClick(item);
            }}
            arName={item.arabicName}
            enName={item.name}
            index={item.id}
            verses={item.verses}
            startsPage={item.startsPage}
          />
        )}
      />
      {/* <Text className="text-red-600">Quran Screen</Text> */}
    </>
  );
}
