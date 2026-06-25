import logo from '@/assets/images/logo.png';
import { useFonts } from 'expo-font';

import { router } from 'expo-router';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import athkar from '../../../../assets/Static Data/Athkar.json';

const athkarKeys = Object.keys(athkar);

function AthkarCard({
  index = 0,
  name = '',
  count = 0,
  uri = '',
  onPress = (): void => {},
}) {
  const [fontsLoaded] = useFonts({
    CairoSemiBold: require('@/assets/Static Data/Fonts/to use/Inter_18pt-Black.ttf'),
  });
  if (!fontsLoaded) console.log('Font not loaded !');
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: '#f3f4f6' }}
      className="flex-row-reverse items-center bg-white px-4 py-3 border-b border-gray-100"
    >
      {/* Image */}
      {uri ? (
        <Image
          source={{ uri }}
          className="w-12 h-12 rounded-full "
          resizeMode="contain"
        />
      ) : (
        <View className="w-12 h-12 rounded-xl bg-gray-200 " />
      )}

      {/* Name */}
      <Text
        style={{ fontFamily: 'Inter' }}
        numberOfLines={1}
        className="flex-1 mx-4 text-lg text-right font-arabic text-gray-800"
      >
        {name}
      </Text>

      {/* Count Badge */}
      <View className="min-w-[36px] h-9 px-3 rounded-md bg-emerald-100 items-center justify-center">
        <Text className="font-semibold text-[12px] text-emerald-700">
          {count}
        </Text>
      </View>
    </Pressable>
  );
}
function handleThikrClick(index = 0): void {
  router.push(`/athkar/${index}`);
}
export default function Athkar() {
  return (
    <>
      <FlatList
        data={athkarKeys}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <AthkarCard
            onPress={() => {
              handleThikrClick(index);
            }}
            uri={logo.uri}
            name={item}
            count={Object.values(athkar[item]['Adhkar'])?.length}
            index={index}
          />
        )}
      />
      {/* <Text className="text-red-600">Quran Screen</Text> */}
    </>
  );
}
