import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from 'react';
import { Animated, Dimensions, ScrollView, View } from 'react-native';
// import { View } from '';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

import { router } from 'expo-router';
import HomeItem from '../components/Home/HomeItem';

import IconList from '../components/Home/IconList';
import ShortcutsButton from '../components/Home/ShortcutsButton';
import { ThikrSection } from '../components/Home/ThikrSection';

import { Colors, getThemeColors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useLanguage from '../hooks/useLanguage';
import useStaticText from '../hooks/useStaticText';
import NewsRSSNative from './NewsRSSNative';
const { width } = Dimensions.get('window');

interface HomeScreenProps {
  nextPrayer: {
    name: string;
    time: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  qiblaDirection: number;
  onNavigateQibla: () => void;
  onNavigateAthkar: (type: 'morning' | 'evening') => void;
  verse: {
    arabic: string;
    translation: string;
    surah: string;
    ayah: number;
  };
  hadith: {
    arabic: string;
    text: string;
    narrator: string;
    source: string;
    grade: string;
  };
  rssNews: { id: string; title: string; source: string }[];
  onRefresh?: () => void;
  refreshing?: boolean;
}

export default function HomeScreen({
  nextPrayer,
  qiblaDirection,
  onNavigateQibla,
  onNavigateAthkar,
  verse,
  hadith,
  rssNews,
  onRefresh,
  refreshing = false,
}: HomeScreenProps) {
  const { theme, isDark } = useAppTheme();
  const c = getThemeColors(theme);
  const { selectedLanguage } = useLanguage();
  const { translatedText } = useStaticText();
  const [showIconList, setShowIconList] = useState(false);
  function onShortcutButtonPress() {
    setShowIconList((p) => !p);
  }
  const iconSize = 24;

  const compassColor = '#4FC3F7';
  const hadithColor = '#C084FC';
  const quranColor = '#34D399';
  const aiColor = '#FBBF24';

  if (true) {
    return (
      <>
        <NewsRSSNative selectedLanguage={selectedLanguage} />
        <ScrollView className="w-full  h-full py-4">
          <HomeItem
            icon={<Entypo name="controller-next" size={24} color="white" />}
            featured
            imageUrl="https://www.egypttoursplus.com/wp-content/uploads/2025/07/Blue-mosque-in-glorius-sunset-Istanbul-Sultanahmet-park.-The-biggest-mosque-in-Istanbul-of-Sultan-Ahmed-Ottoman-Empire.jpg"
            theme={theme}
            title={`${translatedText?.prayerApp?.upcoming} - ${nextPrayer.name}`}
            description={`${nextPrayer.hours}:${nextPrayer.minutes}:${nextPrayer.seconds}`}
          />
          <ThikrSection onNavigate={onNavigateAthkar} />

          {showIconList && (
            <View className={' rounded-md py-1 '}>
              <IconList
                iconList={[
                  {
                    icon: (
                      <Animated.View
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 16,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(79, 195, 247, 0.12)',
                          borderWidth: 1,
                          borderColor: 'rgba(79, 195, 247, 0.25)',
                        }}
                      >
                        <FontAwesome5
                          name="compass"
                          size={iconSize}
                          color={compassColor}
                        />
                      </Animated.View>
                    ),
                    onPress() {
                      router.push('/(tabs)/qibla');
                    },
                    name: 'Compass',
                  },

                  {
                    icon: (
                      <Animated.View
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 16,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(192, 132, 252, 0.12)',
                          borderWidth: 1,
                          borderColor: 'rgba(192, 132, 252, 0.25)',
                        }}
                      >
                        <AntDesign
                          name="read"
                          size={iconSize}
                          color={hadithColor}
                        />
                      </Animated.View>
                    ),
                    onPress() {
                      router.push('/(tabs)/hadith');
                    },
                    name: 'Hadith Collections',
                  },

                  {
                    icon: (
                      <Animated.View
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 16,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(52, 211, 153, 0.12)',
                          borderWidth: 1,
                          borderColor: 'rgba(52, 211, 153, 0.25)',
                        }}
                      >
                        <FontAwesome5
                          name="quran"
                          size={iconSize}
                          color={quranColor}
                        />
                      </Animated.View>
                    ),
                    onPress() {
                      router.push('/(tabs)/quran');
                    },
                    name: 'Quran',
                  },

                  {
                    icon: (
                      <Animated.View
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 16,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(251, 191, 36, 0.12)',
                          borderWidth: 1,
                          borderColor: 'rgba(251, 191, 36, 0.25)',
                        }}
                      >
                        <Ionicons
                          name="flash"
                          size={iconSize}
                          color={aiColor}
                        />
                      </Animated.View>
                    ),
                    onPress() {
                      router.push('/(tabs)/ai');
                    },
                    name: 'AI Assistant',
                  },
                ]}
              />
            </View>
          )}
        </ScrollView>
        <View
          className="absolute bottom-0 mb-8 w-25 h-25 self-center items-center justify-center rounded-full"
          style={{}}
        >
          <View
            className=" rounded-full items-center justify-center "
            style={{
              width: 50,
              height: 50,
              backgroundColor: Colors[theme].surface3,
              borderWidth: 4,
              borderColor: `${Colors[theme].primary}20`,
            }}
          >
            <ShortcutsButton
              Icon={
                showIconList ? (
                  <Ionicons
                    name="close"
                    size={22}
                    color={Colors[theme].primary}
                  />
                ) : (
                  <Entypo name="grid" size={22} color={Colors[theme].primary} />
                )
              }
              onPress={onShortcutButtonPress}
            />
          </View>
        </View>
      </>
    );
    // return (
    //   <View className="w-full gap-4 h-full">
    //     <NewsRSSNative selectedLanguage={selectedLanguage} />

    //     <ScrollView
    //       showsVerticalScrollIndicator={false}
    //       // contentContainerStyle={{ paddingBottom: 32 }}
    //     >

    //       <View
    //         className="mb-6"
    //         style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}
    //       >
    //         <Text
    //           className="text-[11px] font-bold tracking-[2.5px] uppercase mb-1"
    //           style={{ color: c.tertiary }}
    //         >
    //           {translatedText?.homeApp?.greet}
    //         </Text>
    //         <Text
    //           className="text-2xl font-light tracking-wide"
    //           style={{ color: c.primary }}
    //         >
    //           {translatedText?.homeApp?.welcome}
    //         </Text>
    //       </View>

    //       <View className="w-full gap-3">
    //         <NextPrayerCountdown prayer={nextPrayer} />
    //         {/* <View className=""> */}
    //         {/* </View> */}

    //         <RandomVerse />
    //         <DailyHadith />

    //         <HomePressable
    //           title={translatedText?.compareRelg?.staticText?.navbar}
    //           imageUrl={require('@/assets/images/relg.jpg')}
    //           onNavigate={() => {
    //             router.navigate('/(tabs)/compare');
    //           }}
    //         />
    //         <HomePressable
    //           imageUrl={require('@/assets/images/learn.jpg')}
    //           title={translatedText?.navbar?.routes?.learn}
    //           onNavigate={() => {
    //             router.navigate('/(tabs)/learn');
    //           }}
    //         />
    //         <HomePressable
    //           imageUrl={require('@/assets/images/compass.jpg')}
    //           title={translatedText?.home?.qibla?.title}
    //           onNavigate={() => {
    //             router.navigate('/(tabs)/qibla');
    //           }}
    //         />

    //         {/* <QiblaDirection
    //       onNavigate={() => {
    //         router.push('/(tabs)/qibla');
    //         }}
    //         /> */}
    //         <ThikrSection onNavigate={onNavigateAthkar} />
    //       </View>
    //     </ScrollView>
    //   </View>
    // );
  }
}
