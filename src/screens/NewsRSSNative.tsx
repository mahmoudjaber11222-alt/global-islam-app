import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  Linking,
  Pressable,
  Text,
  View,
} from 'react-native';
import { getThemeColors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useLanguage from '../hooks/useLanguage';
import { translateText } from '../service/translation';

interface Article {
  title: string;
  link: string;
}

export default function NewsRSSNative() {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { selectedLanguage } = useLanguage();

  const [articles, setArticles] = useState<Article[]>([]);
  const [translatedTitles, setTranslatedTitles] = useState<
    Record<string, string>
  >({});
  const [translationsReady, setTranslationsReady] = useState(true);
  const [titleLabel, setTitleLabel] = useState('Muslims News');
  const [loading, setLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const opacity = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const ISLAMIC_EVENTS: Article[] = [
    {
      title: 'Muslims worldwide preparing for Hajj season in Makkah',
      link: '#',
    },
    { title: 'Ramadan community initiatives across countries', link: '#' },
    { title: 'Eid celebrations and global Muslim gatherings', link: '#' },
    { title: 'Islamic New Year community events worldwide', link: '#' },
  ];

  const RSS_FEEDS = [
    'https://www.aljazeera.com/xml/rss/all.xml',
    'https://feeds.bbci.co.uk/news/world/middle_east/rss.xml',
    'https://feeds.skynews.com/feeds/rss/world.xml',
    'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',
  ];

  /* ─── FETCH ─── */
  useEffect(() => {
    const fetchRSS = async () => {
      try {
        setLoading(true);
        const allArticles: Article[] = [...ISLAMIC_EVENTS];

        for (const rssUrl of RSS_FEEDS) {
          try {
            const response = await fetch(
              `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`,
            );
            const data = await response.json();
            if (data.items) {
              allArticles.push(
                ...data.items.map((item: any) => ({
                  title: item.title,
                  link: item.link,
                })),
              );
            }
          } catch (err) {
            console.error('Feed failed:', rssUrl);
          }
        }

        const uniqueArticles = allArticles.filter(
          (article, index, self) =>
            index === self?.findIndex((a) => a.title === article.title),
        );

        setArticles(uniqueArticles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRSS();
    const interval = setInterval(fetchRSS, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  /* ─── TRANSLATE ─── */
  useEffect(() => {
    const runTranslation = async () => {
      setTranslationsReady(false);

      if (selectedLanguage === 'en') {
        setTranslatedTitles({});
        setTitleLabel('Muslims News');
        setTranslationsReady(true);
        return;
      }

      const translations: Record<string, string> = {};

      await Promise.all(
        articles.map(async (article) => {
          try {
            const translated = await translateText(article.title, {
              from: 'en',
              to: selectedLanguage,
            });
            translations[article.link] = translated;
          } catch {
            translations[article.link] = article.title;
          }
        }),
      );

      try {
        const label = await translateText('Muslims News', {
          from: 'en',
          to: selectedLanguage,
        });
        setTitleLabel(label);
      } catch {
        setTitleLabel('Muslims News');
      }

      setTranslatedTitles(translations);
      setTranslationsReady(true);
    };

    if (articles.length > 0) {
      runTranslation();
    }
  }, [selectedLanguage, articles]);

  /* ─── CAROUSEL ROTATION ─── */
  useEffect(() => {
    if (articles.length <= 1) return;

    const interval = setInterval(() => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -8,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setCurrentIndex((prev) => (prev + 1) % articles.length);
        translateY.setValue(8);

        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [articles, opacity, translateY]);

  /* ─── BREATHE ANIMATION ─── */
  const breatheAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const breathing = Animated.loop(
      Animated.sequence([
        Animated.timing(breatheAnim, {
          toValue: 1,
          duration: 2500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(breatheAnim, {
          toValue: 0,
          duration: 2500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    );
    breathing.start();
    return () => breathing.stop();
  }, []);

  const opacityTitle = breatheAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.25, 0.85],
  });

  const scale = breatheAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.96, 1.04],
  });

  /* ─── HELPERS ─── */
  const getDisplayTitle = (article: Article) => {
    if (selectedLanguage === 'en') return article.title;
    return translatedTitles[article.link] || article.title;
  };

  const loadingText =
    selectedLanguage === 'ar' ? 'جاري تحميل الأخبار...' : 'Loading news...';

  if (loading) {
    return (
      <View
        className="border-b py-3 px-5"
        style={{ backgroundColor: c.surface, borderColor: c.border }}
      >
        <ActivityIndicator size="small" color={c.accent} />
        <Text
          className="text-[12px] text-center mt-2 tracking-wide"
          style={{ color: c.tertiary }}
        >
          {loadingText}
        </Text>
      </View>
    );
  }

  const currentArticle = articles[currentIndex];
  const displayTitle = currentArticle ? getDisplayTitle(currentArticle) : '';

  return (
    <View
      className="border-b overflow-hidden"
      style={{ backgroundColor: c.surface, borderColor: c.border }}
    >
      <View className="flex-row items-center h-[48px]">
        {/* Title Badge */}
        <View
          className="px-4 h-full items-center justify-center shrink-0"
          style={{ backgroundColor: c.accent }}
        >
          <Animated.Text
            className="text-[11px] font-bold tracking-[1.5px] uppercase"
            style={{
              color: c.background,
              opacity: opacityTitle,
              transform: [{ scale }],
            }}
          >
            {titleLabel}
          </Animated.Text>
        </View>

        {/* Scrolling news line */}
        <View className="flex-1 overflow-hidden">
          <Pressable
            className="py-4 px-2"
            onPress={() =>
              currentArticle?.link &&
              currentArticle.link !== '#' &&
              Linking.openURL(currentArticle.link)
            }
          >
            <Animated.Text
              numberOfLines={1}
              className="text-[13px] tracking-wide"
              style={{
                color: c.secondary,
                opacity,
                transform: [{ translateY }],
                textAlign: selectedLanguage === 'ar' ? 'right' : 'left',
                writingDirection: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
              }}
            >
              {displayTitle.length > 55
                ? displayTitle.substring(0, 55).concat('...')
                : displayTitle}
            </Animated.Text>
          </Pressable>
        </View>

        {/* Optional: small dot indicator when translating */}
        {!translationsReady && (
          <View className="px-2">
            <ActivityIndicator size="small" color={c.accent} />
          </View>
        )}
      </View>
    </View>
  );
}
