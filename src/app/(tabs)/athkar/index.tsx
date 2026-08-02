import { data } from '@/assets/mentions_categories';
import useLanguage from '@/src/hooks/useLanguage';
import useStaticText from '@/src/hooks/useStaticText';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import { useCallback, useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import athkar from '../../../../assets/Static Data/Athkar.json';
import { getThemeColors } from '../../../constants/theme';
import { useAppTheme } from '../../../context/ThemeProvider';
import stripTashkil from '../../utils/removeTashkil';

const athkarKeys = Object.keys(athkar);

/* ─── Icon Mapping ─── */
const CATEGORY_ICONS: Record<string, string> = {
  'أذكار الصباح': 'sunny-outline',
  'أذكار المساء': 'moon-outline',
  'أذكار بعد السلام من الصلاة المفروضة': 'hand-left-outline',
  تسابيح: 'sparkles-outline',
  'أذكار النوم': 'bed-outline',
  'أذكار الاستيقاظ': 'alarm-outline',
  'آية الكرسي': 'shield-outline',
  'سورة الإخلاص والمعوذتين': 'book-outline',
  'أذكار الآذان': 'volume-high-outline',
  'الدعاء عند دخول المنزل': 'home-outline',
  'الدعاء عند الخروج من المنزل': 'exit-outline',
  'الدعاء عند دخول المسجد': 'enter-outline',
  'الدعاء عند الخروج من المسجد': 'exit-outline',
  'الدعاء قبل الوضوء': 'water-outline',
  'الدعاء بعد الوضوء': 'water-outline',
  'الدعاء عند الذهاب إلى المسجد': 'walk-outline',
  'الدعاء داخل المسجد': 'people-outline',
  'دعاء الاستفتاح': 'key-outline',
  'دعاء الركوع': 'arrow-down-outline',
  'دعاء السجود': 'arrow-down-circle-outline',
  'دعاء الجلسة بين السجدتين': 'ellipsis-horizontal-outline',
  'الدعاء بعد التشهد الأخير وقبل السلام': 'chatbubble-outline',
  'الدعاء بعد السلام': 'chatbubbles-outline',
  'الدعاء عند سماع صياح الديك': 'mic-outline',
  'دعاء نزول المطر': 'rainy-outline',
  'دعاء رؤية الهلال': 'moon-outline',
  'الدعاء عند الفزع في النوم': 'alert-outline',
  'دعاء الفرح': 'happy-outline',
  'دعاء السفر': 'airplane-outline',
  'دعاء دخول السوق': 'cart-outline',
  'دعاء دخول الخلاء': 'man-outline',
  'دعاء الخروج من الخلاء': 'woman-outline',
  'دعاء الطعام': 'restaurant-outline',
  'دعاء بعد الطعام': 'cafe-outline',
  'دعاء الضيف': 'people-circle-outline',
  'دعاء الرعد': 'thunderstorm-outline',
  'دعاء العطاس': 'medical-outline',
  'دعاء لبس الثوب الجديد': 'shirt-outline',
  'دعاء الكرب': 'sad-outline',
  'دعاء زيارة القبور': 'flower-outline',
  'دعاء ريح': 'leaf-outline',
  'دعاء المريض': 'heart-outline',
  'دعاء من أصابه بلاء': 'bandage-outline',
  'دعاء الهم والحزن': 'cloud-outline',
  'دعاء الكسل': 'battery-dead-outline',
  'دعاء الدين': 'cash-outline',
  'دعاء الرياء': 'eye-off-outline',
  'الدعاء عند إغماض الميت': 'close-circle-outline',
  'الدعاء للمتوفي': 'rose-outline',
  'دعاء صلاة الاستخارة': 'git-branch-outline',
  'دعاء قنوت الوتر': 'star-outline',
  'دعاء الخوف من الشرك': 'warning-outline',
  'دعاء الخوف من الشيء': 'eye-outline',
  'دعاء الرضا': 'thumbs-up-outline',
  'دعاء الزحام': 'people-outline',
  'دعاء الريح والعاصف': 'cloudy-night-outline',
  'دعاء نزول الغيث': 'water-outline',
};

function getCategoryIcon(name: string): string {
  return CATEGORY_ICONS[stripTashkil(name)] || 'document-text-outline';
}

/* ─── Animated AthkarCard ─── */
interface AthkarCardProps {
  index: number;
  name: string;
  onPress: () => void;
}

function AthkarCard({ index = 0, name = '', onPress }: AthkarCardProps) {
  const { theme, isDark } = useAppTheme();
  const c = getThemeColors(theme);
  const icon = getCategoryIcon(name);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(16)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const delay = index * 40;
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 350,
        delay,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        delay,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
    ]).start();
  }, [fadeAnim, slideAnim, index]);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      useNativeDriver: true,
      friction: 8,
      tension: 300,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 5,
      tension: 300,
    }).start();
  };

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
      }}
    >
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        className="flex-row-reverse items-center px-3.5 py-3 rounded-md border-b-[1px] border-[#A9A9A9]  mb-2"
        style={({ pressed }) => ({
          backgroundColor: c.surface,
          shadowColor: c.primary,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.04,
          shadowRadius: 8,
          elevation: 1,
        })}
        accessibilityRole="button"
        accessibilityLabel={name}
      >
        {/* Compact Icon */}
        <View
          className="w-[34px] h-[34px] rounded-[10px] items-center justify-center border"
          style={{
            backgroundColor: c.surface2,
            borderColor: c.border2,
          }}
        >
          <Ionicons name={icon as any} size={16} color={c.accent} />
        </View>

        {/* Text Content */}
        <View className="flex-1 mx-3 items-end">
          <Text
            className="text-[16px] font-normal text-right leading-5"
            style={{ color: c.primary, writingDirection: 'rtl' }}
            numberOfLines={1}
          >
            {name}
          </Text>
        </View>

        {/* Subtle Indicator Dot */}
        <View
          className="w-1 h-1 rounded-full"
          style={{ backgroundColor: c.accentMuted }}
        />
      </Pressable>
    </Animated.View>
  );
}

/* ─── Animated SectionHeader ─── */
function SectionHeader() {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { translatedText } = useStaticText();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-12)).current;
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <Animated.View
      className="px-5 pt-4 pb-3.5"
      style={{
        direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
      }}
    >
      <View className="flex-row items-center mb-2.5">
        <View
          className="px-2.5 py-1 rounded-full"
          style={{ backgroundColor: c.accentMuted }}
        >
          <Text
            className="text-[9px] font-bold tracking-[1.8px] uppercase"
            style={{ color: c.accent }}
          >
            {translatedText?.athkarApp?.remmember}
          </Text>
        </View>
      </View>

      <Text
        className="text-[22px] font-light tracking-tight leading-7 mb-1"
        style={{ color: c.primary }}
      >
        {translatedText?.athkarApp?.athkar}
      </Text>

      <Text
        className="text-[11px] font-semibold tracking-wide leading-4"
        style={{ color: c.tertiary, writingDirection: 'rtl' }}
      >
        {athkarKeys.length} {translatedText?.athkarApp?.cat}
      </Text>
    </Animated.View>
  );
}

function handleThikrClick(index = ''): void {
  router.push(`/athkar/${index}`);
}

/* ─── Main Screen ─── */
export default function Athkar() {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const cat = data;
  const { translatedText } = useStaticText();
  const { selectedLanguage } = useLanguage();

  const catKeys = Object.keys(cat);

  const [fontsLoaded] = useFonts({
    CairoSemiBold: require('@/assets/Static Data/Fonts/to use/Inter_18pt-Black.ttf'),
  });

  useEffect(() => {
    if (!fontsLoaded) console.log('Font not loaded !');
  }, [fontsLoaded]);

  const renderItem: ListRenderItem<string> = useCallback(
    ({ item, index }) => (
      <AthkarCard
        onPress={() => handleThikrClick(stripTashkil(item))}
        name={selectedLanguage === 'ar' ? item : cat[item][selectedLanguage]}
        index={index}
      />
    ),
    [selectedLanguage, cat],
  );

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: c.background }}
      edges={['top']}
    >
      {/* Header */}
      <SectionHeader />

      {/* Subheader */}
      <View
        className="flex-row-reverse items-center justify-between px-5 pb-2.5 mb-1"
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: c.border,
        }}
      >
        <Text
          className="text-[9px] font-bold tracking-[1.8px] uppercase text-right"
          style={{ color: c.tertiary, writingDirection: 'rtl' }}
        >
          {translatedText?.athkarApp?.category}
        </Text>

        <View
          className="px-2 py-0.5 rounded-[10px] min-w-[24px] items-center justify-center"
          style={{ backgroundColor: c.surface2 }}
        >
          <Text
            className="text-[9px] font-bold tracking-[1.8px] uppercase"
            style={{ color: c.secondary }}
          >
            {catKeys.length}
          </Text>
        </View>
      </View>

      {/* List */}
      <FlatList
        data={catKeys}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="p-4 pb-10"
        renderItem={renderItem}
        initialNumToRender={12}
        maxToRenderPerBatch={8}
        windowSize={10}
      />
    </SafeAreaView>
  );
}
