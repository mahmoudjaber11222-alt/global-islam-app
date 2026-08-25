// components/AdhanReciterSelector.tsx
import reciters from '@/assets/Static Data/AthanSources.json';
import useStaticText from '@/src/hooks/useStaticText';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  LayoutAnimation,
  Platform,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../../../constants/theme';
import { useAppTheme } from '../../../context/ThemeProvider';

// Enable layout animations on Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ─── Types ─────────────────────────────────────────────

export interface AdhanReciter {
  id: string;
  name: string;
  nameArabic: string;
  description: string;
  country: string;
  city?: string;
  mosque?: string;
  muezzin?: string;
  isFajr: boolean;
  duration: string;
  tags: string[];
  downloadUrl: string;
}

export interface AdhanCollection {
  sunni: AdhanReciter[];
  shia: AdhanReciter[];
}

// ─── Data ─────────────────────────────────────────────

const data: AdhanCollection = reciters;

const CATEGORIES = [
  {
    key: 'sunni',
    title: 'Sunni Reciters',
    titleArabic: 'المؤذنون السنة',
    reciters: data.sunni,
  },
  // {
  //   key: 'shia',
  //   title: 'Shia Reciters',
  //   titleArabic: 'المؤذنون الشيعة',
  //   reciters: data.shia,
  // },
];

const allReciters: AdhanReciter[] = [...data.sunni, ...data.shia];

// ─── Storage Keys ─────────────────────────────────────

const STORAGE_KEYS = {
  SELECTED_RECITER: '@selected_adhan_reciter',
  CACHED_AUDIO_PREFIX: '@cached_adhan_audio_',
  RECITER_METADATA: '@adhan_reciter_metadata',
};

// ─── Helper Functions ─────────────────────────────────

export const getSelectedReciter = async (): Promise<AdhanReciter | null> => {
  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEYS.SELECTED_RECITER);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error reading selected reciter:', error);
    return null;
  }
};

export const setSelectedReciter = async (
  reciter: AdhanReciter,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.SELECTED_RECITER,
      JSON.stringify(reciter),
    );
  } catch (error) {
    console.error('Error saving selected reciter:', error);
  }
};

export const getAudioSource = async (
  reciterId: string,
): Promise<{ uri: string } | null> => {
  try {
    const cachedUri = await AsyncStorage.getItem(
      `${STORAGE_KEYS.CACHED_AUDIO_PREFIX}${reciterId}`,
    );
    if (cachedUri) {
      return { uri: cachedUri };
    }
    const reciter = allReciters.find((r) => r.id === reciterId);
    return reciter ? { uri: reciter.downloadUrl } : null;
  } catch (error) {
    console.error('Error getting audio source:', error);
    return null;
  }
};

// ─── Components ───────────────────────────────────────

interface ReciterCardProps {
  reciter: AdhanReciter;
  isSelected: boolean;
  isExpanded: boolean;
  onSelect: (reciter: AdhanReciter) => void;
  onToggleExpand: () => void;
}

const ReciterCard: React.FC<ReciterCardProps> = ({
  reciter,
  isSelected,
  isExpanded,
  onSelect,
  onToggleExpand,
}) => {
  const { theme } = useAppTheme();
  const colors = getThemeColors(theme);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.97,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    onSelect(reciter);
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        className="mx-4 mb-3 rounded-2xl overflow-hidden"
        style={{
          backgroundColor: isSelected ? colors.accentMuted : colors.surface,
          borderWidth: 1,
          borderColor: isSelected
            ? theme === 'dark'
              ? 'rgba(212,168,83,0.4)'
              : 'rgba(184,134,11,0.35)'
            : colors.border,
        }}
      >
        <View className="p-4">
          <View className="flex-row items-center justify-between">
            {/* Left: Icon + Info */}
            <View className="flex-row items-center flex-1">
              <View
                className="w-12 h-12 rounded-xl items-center justify-center"
                style={{
                  backgroundColor: isSelected
                    ? theme === 'dark'
                      ? 'rgba(212,168,83,0.2)'
                      : 'rgba(184,134,11,0.15)'
                    : colors.surface2,
                }}
              >
                <Ionicons
                  name={isSelected ? 'volume-high' : 'volume-medium'}
                  size={22}
                  color={isSelected ? colors.accent : colors.quaternary}
                />
              </View>

              <View className="ml-3 flex-1">
                <Text
                  className="font-semibold text-base"
                  style={{ color: colors.primary }}
                >
                  {reciter.name}
                </Text>
                <Text
                  className="text-sm mt-0.5"
                  style={{
                    color: colors.accent,
                    opacity: 0.8,
                  }}
                >
                  {reciter.nameArabic}
                </Text>
              </View>
            </View>

            {/* Right: Selection indicator */}
            <View className="ml-3">
              {isSelected ? (
                <View
                  className="w-7 h-7 rounded-full items-center justify-center"
                  style={{ backgroundColor: colors.accent }}
                >
                  <Ionicons
                    name="checkmark"
                    size={16}
                    color={colors.background}
                  />
                </View>
              ) : (
                <View
                  className="w-7 h-7 rounded-full"
                  style={{
                    borderWidth: 2,
                    borderColor: colors.quinary,
                  }}
                />
              )}
            </View>
          </View>

          {/* Expandable Details */}
          <TouchableOpacity
            onPress={onToggleExpand}
            activeOpacity={0.7}
            className="mt-3 pt-3"
            style={{ borderTopWidth: 1, borderTopColor: colors.border }}
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-xs" style={{ color: colors.quaternary }}>
                {reciter.country} {reciter.city ? `· ${reciter.city}` : ''}
              </Text>
              <Ionicons
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={16}
                color={colors.quaternary}
              />
            </View>

            {isExpanded && (
              <View className="mt-3">
                <Text
                  className="text-sm leading-5"
                  style={{ color: colors.secondary }}
                >
                  {reciter.description}
                </Text>
                {reciter.muezzin && (
                  <Text
                    className="text-xs mt-2"
                    style={{ color: colors.accent, opacity: 0.7 }}
                  >
                    Muezzin: {reciter.muezzin}
                  </Text>
                )}
                {reciter.mosque && (
                  <Text
                    className="text-xs mt-1"
                    style={{ color: colors.quaternary }}
                  >
                    {reciter.mosque}
                  </Text>
                )}
                <View className="flex-row flex-wrap mt-3 gap-2">
                  {reciter.tags.map((tag) => (
                    <View
                      key={tag}
                      className="px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: colors.surface2 }}
                    >
                      <Text
                        className="text-xs capitalize"
                        style={{ color: colors.quaternary }}
                      >
                        {tag}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

// ─── Category Section Component ─────────────────────────

interface CategorySectionProps {
  category: {
    key: string;
    title: string;
    titleArabic: string;
    reciters: AdhanReciter[];
  };
  selectedId: string | null;
  expandedId: string | null;
  onSelect: (reciter: AdhanReciter) => void;
  onToggleExpand: (id: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  selectedId,
  expandedId,
  onSelect,
  onToggleExpand,
}) => {
  const { theme } = useAppTheme();
  const colors = getThemeColors(theme);

  return (
    <View className="mb-6">
      {/* Category Header */}
      <View className="px-4 mb-3 flex-row items-center justify-between">
        <View>
          <Text
            className="font-semibold text-lg"
            style={{ color: colors.primary }}
          >
            {category.title}
          </Text>
          <Text
            className="text-sm mt-0.5"
            style={{ color: colors.accent, opacity: 0.7 }}
          >
            {category.titleArabic}
          </Text>
        </View>
        <View
          className="px-3 py-1 rounded-full"
          style={{ backgroundColor: colors.surface2 }}
        >
          <Text className="text-xs" style={{ color: colors.quaternary }}>
            {category.reciters.length}
          </Text>
        </View>
      </View>

      {/* Reciter Cards */}
      {category.reciters.map((reciter) => (
        <ReciterCard
          key={reciter.id}
          reciter={reciter}
          isSelected={selectedId === reciter.id}
          isExpanded={expandedId === reciter.id}
          onSelect={onSelect}
          onToggleExpand={() => onToggleExpand(reciter.id)}
        />
      ))}
    </View>
  );
};

// ─── Main Selector Component ───────────────────────────

interface AdhanReciterSelectorProps {
  onReciterSelected?: (reciter: AdhanReciter) => void;
}
export const AdhanReciterSelector: React.FC<AdhanReciterSelectorProps> = ({
  onReciterSelected,
}) => {
  const { translatedText } = useStaticText();
  const { theme } = useAppTheme();
  const colors = getThemeColors(theme);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadSavedReciter = async () => {
      const saved = await getSelectedReciter();
      if (saved) {
        setSelectedId(saved.id);
      }
      setLoading(false);
    };
    loadSavedReciter();
  }, []);

  const handleSelect = async (reciter: AdhanReciter) => {
    if (selectedId === reciter.id) return;

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSaving(true);

    try {
      await setSelectedReciter(reciter);
      setSelectedId(reciter.id);
      onReciterSelected?.(reciter);
    } catch (error) {
      console.error('Error saving reciter:', error);
    } finally {
      setSaving(false);
    }
  };
  // useEffect(() => {
  //   async function se() {
  //     await handleSelect(CATEGORIES[0].reciters[0]);
  //   }
  //   se();
  // }, []);
  const handleToggleExpand = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return (
      <View
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: colors.background }}
      >
        <ActivityIndicator size="large" color={colors.accent} />
        <Text className="mt-3 text-sm" style={{ color: colors.tertiary }}>
          {translatedText?.ai?.loading?.label}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header */}
      <View className="px-4 pt-2 pb-4">
        <Text className="text-sm" style={{ color: colors.secondary }}>
          Choose your preferred adhan voice
        </Text>
        <Text className="text-xs mt-1" style={{ color: colors.tertiary }}>
          Selection will be cached for offline use
        </Text>
      </View>

      {/* Saving indicator */}
      {saving && (
        <View
          className="absolute top-0 left-0 right-0 z-10 py-2 items-center"
          style={{ backgroundColor: colors.accentMuted }}
        >
          <Text
            className="text-xs font-medium"
            style={{ color: colors.accent }}
          >
            Saving selection...
          </Text>
        </View>
      )}

      {/* Reciter List by Category */}
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: category }) => (
          <CategorySection
            category={category}
            selectedId={selectedId}
            expandedId={expandedId}
            onSelect={handleSelect}
            onToggleExpand={handleToggleExpand}
          />
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </SafeAreaView>
  );
};

// export default AdhanReciterSelector;
