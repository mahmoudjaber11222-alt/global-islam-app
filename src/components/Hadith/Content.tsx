import { Colors } from '@/src/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { memo } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../../context/ThemeProvider';
import useStaticText from '../../hooks/useStaticText';
import Loader from '../common/Loader';
import Toast from '../common/Toast';
const Content = memo(
  ({
    onClick, // rename to onPress in parent if desired
    firstSearch,
    hadithLoading,
    networkError,
    selectedLanguage,
    hadithResult,
  }) => {
    const { translatedText } = useStaticText();
    const { theme, isDark } = useAppTheme();
    const isRTL = selectedLanguage === 'ar';

    const renderItem = ({ item }) => (
      <Pressable
        onPress={() => onClick?.(item?.headerData?.ID)}
        style={({ pressed }) => [
          styles.card,
          {
            backgroundColor: Colors[theme].surface,
            borderColor: isDark
              ? `${Colors[theme].border}40`
              : `${Colors[theme].border}60`,
            opacity: pressed ? 0.9 : 1,
            transform: [{ scale: pressed ? 0.98 : 1 }],
          },
        ]}
      >
        {/* Reference Badge */}
        <View
          style={[
            styles.badge,
            {
              backgroundColor: isDark
                ? `${Colors[theme].success}20`
                : `${Colors[theme].success}15`,
              borderColor: isDark
                ? `${Colors[theme].success}30`
                : `${Colors[theme].success}20`,
            },
          ]}
        >
          <Text
            style={[styles.badgeText, { color: Colors[theme].successText }]}
          >
            {translatedText?.explore?.content.card.reference} • #
            {item?.headerData?.ID}
          </Text>
        </View>

        {/* Content Text */}
        <Text
          style={[styles.cardText, { color: Colors[theme].secondary }]}
          numberOfLines={5}
        >
          {item?.content}
        </Text>

        {/* Read More Row */}
        <View
          style={[
            styles.readMoreRow,
            { flexDirection: isRTL ? 'row-reverse' : 'row' },
          ]}
        >
          <Text style={{ color: Colors[theme].tertiary, fontSize: 13 }}>
            {translatedText?.explore?.content.card.readMore}
          </Text>
          <MaterialCommunityIcons
            name={isRTL ? 'arrow-left' : 'arrow-right'}
            size={16}
            color={Colors[theme].accent}
          />
        </View>
      </Pressable>
    );

    // ── States ──
    if (firstSearch) {
      return (
        <View
          style={[
            styles.container,
            {
              backgroundColor: isDark
                ? `${Colors[theme].surface}40`
                : `${Colors[theme].surface}60`,
              borderColor: isDark
                ? `${Colors[theme].border}20`
                : `${Colors[theme].border}40`,
            },
          ]}
        >
          <Text style={[styles.heroTitle, { color: Colors[theme].primary }]}>
            {translatedText?.explore?.content.heroTitle}
          </Text>
        </View>
      );
    }

    if (hadithLoading) {
      return (
        <View
          style={[
            styles.container,
            {
              backgroundColor: isDark
                ? `${Colors[theme].surface}40`
                : `${Colors[theme].surface}60`,
              borderColor: isDark
                ? `${Colors[theme].border}20`
                : `${Colors[theme].border}40`,
            },
          ]}
        >
          <Loader label={translatedText?.explore?.content.loading.label} />
        </View>
      );
    }

    if (networkError) {
      return (
        <View
          style={[
            styles.container,
            {
              backgroundColor: isDark
                ? `${Colors[theme].surface}40`
                : `${Colors[theme].surface}60`,
              borderColor: isDark
                ? `${Colors[theme].border}20`
                : `${Colors[theme].border}40`,
            },
          ]}
        >
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
        <View
          style={[
            styles.container,
            {
              backgroundColor: isDark
                ? `${Colors[theme].surface}40`
                : `${Colors[theme].surface}60`,
              borderColor: isDark
                ? `${Colors[theme].border}20`
                : `${Colors[theme].border}40`,
            },
          ]}
        >
          <Toast
            allowClose={false}
            title={translatedText?.explore?.content.empty.title}
          />
        </View>
      );
    }

    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDark
              ? `${Colors[theme].surface}40`
              : `${Colors[theme].surface}60`,
            borderColor: isDark
              ? `${Colors[theme].border}20`
              : `${Colors[theme].border}40`,
          },
        ]}
      >
        <FlatList
          data={hadithResult}
          keyExtractor={(item, i) => item?.id?.toString() || i.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  },
);
Content.displayName = 'ContentNormal';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 300,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 38,
    marginTop: 80,
    marginBottom: 80,
    paddingHorizontal: 20,
  },
  listContent: {
    gap: 12,
    paddingBottom: 20,
  },
  card: {
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    gap: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  cardText: {
    fontSize: 15,
    lineHeight: 26,
  },
  readMoreRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
});

export default Content;
