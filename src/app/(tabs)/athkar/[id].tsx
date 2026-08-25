import useLanguage from '@/src/hooks/useLanguage';
import useStaticText from '@/src/hooks/useStaticText';
import { getTranslationFile } from '@/src/utils/filter';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  FlatList,
  ListRenderItem,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getThemeColors } from '../../../constants/theme';
import { useAppTheme } from '../../../context/ThemeProvider';
import stripTashkil from '../../utils/removeTashkil';

interface ThikrItem {
  Text: string;
  Count: number;
  Reference: string;
}

interface ThikrCardProps {
  content: string;
  targetCount: number;
  reference: string;
  index: number;
  total: number;
}

/* ─── Animated ThikrCard ─── */
function ThikrCard({
  content,
  targetCount,
  reference,
  index,
  total,
}: ThikrCardProps) {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { translatedText } = useStaticText();

  const [currentCount, setCurrentCount] = useState(0);
  const [showReference, setShowReference] = useState(false);
  const [completed, setCompleted] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(16)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const refOpacity = useRef(new Animated.Value(0)).current;
  const refTranslate = useRef(new Animated.Value(-8)).current;

  // Staggered entry
  useEffect(() => {
    const delay = index * 60;
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        delay,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 450,
        delay,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
    ]).start();
  }, [fadeAnim, slideAnim, index]);

  // Reference expand animation
  useEffect(() => {
    Animated.parallel([
      Animated.timing(refOpacity, {
        toValue: showReference ? 1 : 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(refTranslate, {
        toValue: showReference ? 0 : -8,
        duration: 250,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
    ]).start();
  }, [showReference, refOpacity, refTranslate]);

  const progress = Math.min(currentCount / targetCount, 1);
  const remaining = Math.max(targetCount - currentCount, 0);

  function animatePress() {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        tension: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function onReset() {
    setCurrentCount(0);
    setCompleted(false);
  }

  function onIncrement() {
    if (currentCount >= targetCount) return;
    animatePress();
    const next = currentCount + 1;
    setCurrentCount(next);
    if (next >= targetCount) setCompleted(true);
  }

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${content}${
          reference
            ? `\n${translatedText?.contentNormal?.hadithCard?.header?.referenceLabel}: ${reference}`
            : ''
        }`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Animated.View
      className="mx-4 mb-3 rounded-2xl p-5"
      style={{
        backgroundColor: c.surface,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: c.border,
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
        shadowColor: c.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 10,
        elevation: 1,
      }}
    >
      {/* Top Row: Index + Status */}
      <View className="flex-row justify-between items-center mb-4">
        <View
          className="rounded-lg px-2.5 py-1"
          style={{
            backgroundColor: c.surface2,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: c.border2,
          }}
        >
          <Text
            className="text-[10px] font-bold tracking-[1.5px] uppercase"
            style={{ color: c.tertiary }}
          >
            {index + 1} / {total}
          </Text>
        </View>

        {completed && (
          <View
            className="rounded-lg px-2.5 py-1 flex-row items-center gap-1"
            style={{
              backgroundColor: c.successMuted,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: c.border4,
            }}
          >
            <Ionicons name="checkmark-circle" size={11} color={c.success} />
            <Text
              className="text-[16px] font-bold tracking-[1px] uppercase"
              style={{ color: c.successText }}
            >
              {translatedText?.athkarApp?.completed}
            </Text>
          </View>
        )}
      </View>

      {/* Thikr Content */}
      <View className="mb-5">
        <Text
          className="text-center text-[16px] leading-8 font-light"
          style={{ writingDirection: 'rtl', color: c.primary }}
        >
          {content}
        </Text>
      </View>

      {/* Counter Button */}
      <View className="items-center">
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Pressable
            onPress={onIncrement}
            onLongPress={onReset}
            delayLongPress={700}
            className="items-center justify-center"
            style={{
              width: 76,
              height: 76,
              borderRadius: 38,
              borderWidth: 3,
              borderColor: completed ? c.success : c.accent,
              backgroundColor: completed ? c.successMuted : c.accentMuted,
            }}
          >
            <Text
              className="text-[24px] font-extralight tabular-nums"
              style={{ color: completed ? c.success : c.accent }}
            >
              {currentCount}
            </Text>
            <Text
              className="text-[10px] mt-0.5 tracking-wider font-medium"
              style={{ color: c.tertiary }}
            >
              / {targetCount}
            </Text>
          </Pressable>
        </Animated.View>
      </View>

      {/* Progress Bar */}
      <View className="mt-5">
        <View
          className="h-[2px] rounded-full overflow-hidden"
          style={{ backgroundColor: c.surface2 }}
        >
          <Animated.View
            className="h-full rounded-full"
            style={{
              width: `${progress * 100}%`,
              backgroundColor: completed ? c.success : c.accent,
            }}
          />
        </View>

        <Text
          className="text-center text-[10px] mt-2.5 tracking-wider font-medium"
          style={{ color: c.tertiary }}
        >
          {remaining > 0
            ? `${remaining} ${translatedText?.athkarApp?.remaining}`
            : translatedText?.athkarApp?.completed}
        </Text>
      </View>

      {/* Action Row */}
      <View className="flex-row justify-center items-center mt-5 gap-5">
        <Pressable
          onPress={() => setShowReference(!showReference)}
          hitSlop={10}
          className="flex-row items-center gap-1.5"
        >
          <Ionicons
            name={showReference ? 'chevron-up' : 'chevron-down'}
            size={12}
            color={c.tertiary}
          />
          <Text
            className="text-[11px] tracking-wide font-medium"
            style={{ color: c.tertiary }}
          >
            {translatedText?.contentNormal?.hadithCard?.header?.referenceLabel}
          </Text>
        </Pressable>

        <View
          className="w-[3px] h-[3px] rounded-full"
          style={{ backgroundColor: c.border2 }}
        />

        <Pressable
          onPress={onReset}
          hitSlop={10}
          className="flex-row items-center gap-1"
        >
          <Ionicons name="refresh" size={12} color={c.error} />
          <Text
            className="text-[11px] tracking-wide font-medium"
            style={{ color: c.error }}
          >
            {translatedText?.athkarApp?.reset}
          </Text>
        </Pressable>

        <View
          className="w-[3px] h-[3px] rounded-full"
          style={{ backgroundColor: c.border2 }}
        />

        <Pressable
          onPress={handleShare}
          hitSlop={10}
          className="flex-row items-center gap-1"
        >
          <Ionicons name="share-outline" size={12} color={c.tertiary} />
          <Text
            className="text-[11px] tracking-wide font-medium"
            style={{ color: c.tertiary }}
          >
            {translatedText?.splash?.share}
          </Text>
        </Pressable>
      </View>

      {/* Reference Panel */}
      {showReference && (
        <Animated.View
          className="mt-4 rounded-xl p-4"
          style={{
            backgroundColor: c.surface2,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: c.border,
            opacity: refOpacity,
            transform: [{ translateY: refTranslate }],
          }}
        >
          <View className="flex-row items-center gap-2 mb-2">
            <Ionicons name="bookmark-outline" size={11} color={c.accent} />
            <Text
              className="text-[10px] font-bold tracking-[1.5px] uppercase"
              style={{ color: c.accent }}
            >
              {
                translatedText?.contentNormal?.hadithCard?.header
                  ?.referenceLabel
              }
            </Text>
          </View>
          <Text
            className="text-[12px] leading-6 text-center tracking-wide font-normal"
            style={{ writingDirection: 'rtl', color: c.secondary }}
          >
            {reference || '—'}
          </Text>
        </Animated.View>
      )}
    </Animated.View>
  );
}

/* ─── Main Screen ─── */
export default function ThikrDetail() {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { id } = useLocalSearchParams<{ id: string }>();
  const { translatedText } = useStaticText();
  const { selectedLanguage } = useLanguage();

  const [res, setRes] = useState<Record<string, any>>({});
  const dataA = res[id];
  const adhkar = dataA ? (dataA['Adhkar'] as ThikrItem[]) : null;

  // Header animation
  const headerFade = useRef(new Animated.Value(0)).current;
  const headerSlide = useRef(new Animated.Value(-12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(headerFade, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(headerSlide, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
    ]).start();
  }, [headerFade, headerSlide]);

  useEffect(() => {
    async function loadTranslations() {
      const result = await getTranslationFile(
        selectedLanguage,
        'mentions_translations',
      );
      const temp = result?.default;
      if (!temp) return;

      const keys = Object.keys(temp);
      const newRes: Record<string, any> = {};

      keys.forEach((item) => {
        const newItem = stripTashkil(item);
        newRes[newItem] = temp[item];
      });

      setRes(newRes);
    }
    loadTranslations();
  }, [selectedLanguage]);

  const renderItem: ListRenderItem<ThikrItem> = useCallback(
    ({ item, index }) => (
      <ThikrCard
        content={item?.Text}
        targetCount={item?.Count}
        reference={item?.Reference}
        index={index}
        total={adhkar?.length ?? 0}
      />
    ),
    [adhkar?.length],
  );

  return (
    <View className="flex-1" style={{ backgroundColor: c.background }}>
      {/* Header with Icon Back Button */}
      <Animated.View
        className="px-5 pt-3 pb-4"
        style={{
          backgroundColor: c.surface,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: c.border,
          opacity: headerFade,
          transform: [{ translateY: headerSlide }],
        }}
      >
        <View className="flex-row items-center justify-between">
          {/* Back Button — Icon Only */}
          <Pressable
            onPress={() => router.back()}
            hitSlop={12}
            className="w-9 h-9 items-center justify-center rounded-xl active:opacity-70"
            style={{ backgroundColor: c.surface2 }}
          >
            <Ionicons name="chevron-back" size={20} color={c.primary} />
          </Pressable>

          {/* Center Label */}
          <View className="flex-row items-center gap-1.5">
            <Ionicons name="document-text-outline" size={14} color={c.accent} />
            <Text
              className="text-[10px] font-bold tracking-[2px] uppercase"
              style={{ color: c.accent }}
            >
              {translatedText?.athkarApp?.athkar}
            </Text>
          </View>

          {/* Count Badge */}
          <View
            className="rounded-lg px-2.5 py-1"
            style={{
              backgroundColor: c.surface2,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: c.border2,
            }}
          >
            <Text
              className="text-[10px] font-bold tracking-[1px]"
              style={{ color: c.tertiary }}
            >
              {adhkar?.length ?? 0} {translatedText?.athkarApp?.mention}
            </Text>
          </View>
        </View>
      </Animated.View>

      {/* List */}
      {adhkar && adhkar.length > 0 ? (
        <FlatList
          data={adhkar}
          keyExtractor={(item, idx) => `${item.Text}-${idx}`}
          showsVerticalScrollIndicator={false}
          contentContainerClassName="pt-2 pb-10"
          renderItem={renderItem}
          initialNumToRender={6}
          maxToRenderPerBatch={4}
          windowSize={5}
        />
      ) : (
        <View className="flex-1 items-center justify-center">
          <View
            className="w-12 h-12 rounded-full items-center justify-center mb-3"
            style={{ backgroundColor: c.surface2 }}
          >
            <Ionicons
              name="document-text-outline"
              size={20}
              color={c.tertiary}
            />
          </View>
          <Text
            className="text-[13px] tracking-wide"
            style={{ color: c.tertiary }}
          >
            {translatedText?.ai?.loading?.label}
          </Text>
        </View>
      )}
    </View>
  );
}
