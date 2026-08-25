import { Colors } from '@/src/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../../context/ThemeProvider';
import useStaticText from '../../hooks/useStaticText';
import Loader from '../common/Loader';
import Toast from '../common/Toast';

const Content = memo(
  ({
    onClick,
    firstSearch,
    hadithLoading,
    networkError,
    selectedLanguage,
    hadithResult,
  }) => {
    const { translatedText } = useStaticText();
    const { theme, isDark } = useAppTheme();
    const isRTL = selectedLanguage === 'ar';
    const c = Colors[theme];

    const containerBase = {
      backgroundColor: isDark ? `${c.surface}50` : `${c.surface4}90`,
      borderColor: isDark ? `${c.border}25` : `${c.border}60`,
    };

    const renderItem = (item) => (
      <Pressable
        className="shadow-md"
        key={item?.id?.toString() || item?.headerData?.ID?.toString()}
        onPress={() => onClick?.(item?.headerData?.ID)}
        style={({ pressed }) => [
          styles.card,
          {
            direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
            backgroundColor: c.surface,
            borderColor: isDark ? `${c.border}35` : `${c.border}50`,
            shadowColor: isDark ? '#000000' : c.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: isDark ? 0.2 : 0.05,
            shadowRadius: 8,
            elevation: isDark ? 4 : 2,
            opacity: pressed ? 0.92 : 1,
            transform: [{ scale: pressed ? 0.985 : 1 }],
            overflow: 'hidden',
          },
        ]}
        android_ripple={{ color: `${c.accent}12`, foreground: true }}
      >
        {/* Reference Badge */}
        {/* <View
          style={[
            styles.badge,
            {
              direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',

              backgroundColor: c.successMuted,
              borderColor: isDark ? `${c.success}25` : `${c.success}20`,
            },
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              {
                color: c.successText,
                direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
              },
            ]}
          >
            {translatedText?.explore?.content.card.reference} • #
            {item?.headerData?.ID}
          </Text>
        </View> */}

        {/* Content Text */}
        <Text
          style={[
            styles.cardText,
            {
              color: c.secondary,
              direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
            },
          ]}
          numberOfLines={5}
        >
          {item?.content}
        </Text>

        {/* Read More Row */}
        <View
          style={[
            styles.readMoreRow,
            {
              direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',

              flexDirection: isRTL ? 'row-reverse' : 'row',
              borderTopColor: isDark ? `${c.border}30` : `${c.border}50`,
            },
          ]}
        >
          <Text
            style={[
              styles.readMoreText,
              {
                color: c.accent,
                direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
              },
            ]}
          >
            {translatedText?.explore?.content.card.readMore}
          </Text>
          <View
            style={[
              styles.arrowContainer,
              {
                backgroundColor: `${c.accent}10`,
                direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
              },
            ]}
          >
            <MaterialCommunityIcons
              name={isRTL ? 'arrow-left' : 'arrow-right'}
              size={18}
              color={c.accent}
            />
          </View>
        </View>
      </Pressable>
    );

    // ── States ──
    if (firstSearch) {
      return (
        <View style={[styles.container, containerBase, styles.centeredState]}>
          <View
            style={[
              styles.stateIconBox,
              { backgroundColor: isDark ? `${c.accent}12` : `${c.accent}10` },
            ]}
          >
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={32}
              color={c.accent}
            />
          </View>
          <Text style={[styles.heroTitle, { color: c.primary }]}>
            {translatedText?.explore?.content.heroTitle}
          </Text>
          {translatedText?.explore?.content.heroSubtitle ? (
            <Text style={[styles.heroSubtitle, { color: c.tertiary }]}>
              {translatedText?.explore?.content.heroSubtitle}
            </Text>
          ) : null}
        </View>
      );
    }

    if (hadithLoading) {
      return (
        <View style={[styles.container, containerBase, styles.centeredState]}>
          <Loader label={translatedText?.explore?.content.loading.label} />
        </View>
      );
    }

    if (networkError) {
      return (
        <View style={[styles.container, containerBase, styles.centeredState]}>
          <View
            style={[styles.stateIconBox, { backgroundColor: c.errorMuted }]}
          >
            <MaterialCommunityIcons name="wifi-off" size={32} color={c.error} />
          </View>
          <Toast
            toastTheme="error"
            title={translatedText?.explore?.content.error.title}
            msg={translatedText?.explore?.content.error.message}
          />
        </View>
      );
    }

    if (hadithResult?.length === 0) {
      return (
        <View style={[styles.container, containerBase, styles.centeredState]}>
          <View
            style={[
              styles.stateIconBox,
              {
                backgroundColor: isDark
                  ? `${c.quaternary}15`
                  : `${c.quaternary}12`,
              },
            ]}
          >
            <MaterialCommunityIcons
              name="text-box-search-outline"
              size={32}
              color={c.quaternary}
            />
          </View>
          <Toast
            allowClose={false}
            title={translatedText?.explore?.content.empty.title}
          />
        </View>
      );
    }

    return (
      <View className="mt-6">
        <View className="flex gap-8">
          {hadithResult?.map((item) => renderItem(item))}
        </View>
      </View>
    );
  },
);

Content.displayName = 'ContentNormal';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 320,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
  },
  centeredState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 64,
    gap: 16,
  },
  stateIconBox: {
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 44,
    letterSpacing: -0.5,
    paddingHorizontal: 12,
  },
  heroSubtitle: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 24,
  },
  listContent: {
    gap: 16,
    paddingBottom: 24,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    gap: 14,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '400',
  },
  readMoreRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  readMoreText: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.2,
    flex: 1,
  },
  arrowContainer: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Content;
