import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  Easing,
  Keyboard,
  KeyboardAvoidingView,
  Linking,
  Platform,
  Pressable,
  Animated as RNAnimated,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useLanguage from '../hooks/useLanguage';
import useStaticText from '../hooks/useStaticText';
import { translateText } from '../service/translation';

// ─── SKELETON LOADER ─────────────────────────────────────
function SkeletonLine({
  widthPercent,
  delay = 0,
}: {
  widthPercent: number;
  delay?: number;
}) {
  const opacity = useRef(new RNAnimated.Value(0.3)).current;

  useEffect(() => {
    const anim = RNAnimated.loop(
      RNAnimated.sequence([
        RNAnimated.timing(opacity, {
          toValue: 0.6,
          duration: 800,
          delay,
          useNativeDriver: true,
        }),
        RNAnimated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    );
    anim.start();
    return () => anim.stop();
  }, []);

  return (
    <View
      style={{
        height: 12,
        borderRadius: 6,
        width: `${widthPercent}%`,
        marginBottom: 10,
        overflow: 'hidden',
      }}
    >
      <RNAnimated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 6,
          opacity,
        }}
      />
    </View>
  );
}

// ─── BOUNCING DOTS ───────────────────────────────────────
function BouncingDots() {
  const dots = [
    useRef(new RNAnimated.Value(0)).current,
    useRef(new RNAnimated.Value(0)).current,
    useRef(new RNAnimated.Value(0)).current,
  ];

  useEffect(() => {
    const anims = dots.map((dot, i) =>
      RNAnimated.loop(
        RNAnimated.sequence([
          RNAnimated.timing(dot, {
            toValue: -5,
            duration: 350,
            delay: i * 100,
            useNativeDriver: true,
          }),
          RNAnimated.timing(dot, {
            toValue: 0,
            duration: 350,
            useNativeDriver: true,
          }),
        ]),
      ),
    );
    anims.forEach((a) => a.start());
    return () => anims.forEach((a) => a.stop());
  }, []);

  return (
    <View
      style={{ flexDirection: 'row', gap: 4, alignItems: 'center', height: 18 }}
    >
      {dots.map((dot, i) => (
        <RNAnimated.View
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: 3,
            transform: [{ translateY: dot }],
            opacity: 0.7,
          }}
        />
      ))}
    </View>
  );
}

// ─── HELPERS ─────────────────────────────────────────────
function getDomainFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return 'External reference';
  }
}

function getDisplayTitleFromUrl(url: string, index: number): string {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart && lastPart.length > 2) {
      return lastPart
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase());
    }
    return `${getDomainFromUrl(url)} — Reference ${index + 1}`;
  } catch {
    return `Reference ${index + 1}`;
  }
}

// ─── MAIN SCREEN ─────────────────────────────────────────
export default function AIScreen() {
  const { theme, isDark } = useAppTheme();
  const c = getThemeColors(theme);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [resources, setResources] = useState<string[]>([]);
  const [ip, setIp] = useState<string | null>(null);
  const [inputFocused, setInputFocused] = useState(false);
  const { translatedText: tr } = useStaticText();
  const { selectedLanguage } = useLanguage();
  const languages = [{ code: 'en', name: 'English' }];
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const disabled = loading || !searchValue.trim();
  const scrollRef = useRef<ScrollView>(null);
  const inputRef = useRef<TextInput>(null);
  useEffect(() => {
    console.log(keyboardVisible);
  }, [keyboardVisible]);
  useEffect(() => {
    async function getUserLocation() {
      try {
        const data = { ip: '127.0.0.1' };
        if (data?.ip) setIp(data.ip);
      } catch (err) {
        console.log(err);
      }
    }
    getUserLocation();
  }, []);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);
  useEffect(() => {
    if (!searchValue.trim()) {
      setError('');
      setAnswer('');
      setResources([]);
    }
  }, [searchValue]);

  const handleSuggestionClick = useCallback((text: string) => {
    setSearchValue(text);
    inputRef.current?.focus();
  }, []);

  const handleOpenLink = useCallback(async (url: string) => {
    if (!url?.trim()) return;
    const supported = await Linking.canOpenURL(url);
    if (supported) await Linking.openURL(url);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!searchValue.trim()) return;

    Keyboard.dismiss();
    setLoading(true);
    setError('');
    setAnswer('');
    setResources([]);

    scrollRef.current?.scrollTo({ y: 0, animated: true });

    try {
      let translatedValue = '';
      if (selectedLanguage !== 'en') {
        translatedValue = await translateText(searchValue, {
          from: selectedLanguage,
          to: 'en',
        });
      }

      const response = await fetch(
        'https://global-islam5-islam-g-5.hf.space/fatwa/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `[${selectedLanguage}][${translatedValue || searchValue}]`,
            user_ip: ip,
          }),
        },
      );

      const result = await response.json();
      if (!response.ok) {
        setError(result?.detail || 'Something went wrong. Please try again.');
        return;
      }

      const { data } = result;
      setAnswer(data?.text || '');
      if (data?.text?.length > 350 && Array.isArray(data?.resources)) {
        setResources(
          data.resources.filter(
            (r: any) => typeof r === 'string' && r.trim() !== '',
          ),
        );
      }
    } catch (err) {
      console.error('Submit error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [searchValue, ip, selectedLanguage]);

  // ─── RENDER: HEADER ────────────────────────────────────
  const renderHeader = () => (
    <Animated.View
      entering={FadeInDown.duration(400)}
      className="items-center pt-4 pb-5"
    >
      <View
        className="flex-row items-center gap-1.5 px-3.5 py-1 rounded-full mb-4"
        style={{
          borderWidth: 1,
          borderColor: c.border3,
          backgroundColor: c.surface3,
        }}
      >
        <Ionicons name="sparkles" size={12} color={c.accent} />
        <Text
          className="text-[11px] font-bold tracking-wider uppercase"
          style={{ color: c.accent }}
        >
          {tr?.navbar?.routes?.aiAssistant}
        </Text>
      </View>

      <Text
        className="text-2xl font-semibold text-center tracking-tight leading-8"
        style={{ color: c.primary }}
      >
        {tr?.ai?.header?.title || 'Islamic AI Assistant'}
      </Text>

      {!answer && (
        <Text
          className="mt-2 text-sm leading-5 text-center max-w-[280px]"
          style={{ color: c.tertiary }}
        >
          {tr?.ai?.header?.subtitle ||
            'Ask questions about Islamic jurisprudence, beliefs, and practices'}
        </Text>
      )}
    </Animated.View>
  );

  // ─── RENDER: SUGGESTIONS ───────────────────────────────
  const renderSuggestions = () => (
    <Animated.View
      entering={FadeInUp.duration(350).delay(80)}
      className="gap-2.5 max-w-[400px] self-center w-full"
    >
      {(
        tr?.ai?.suggestions || [
          'What is the ruling on fasting while traveling?',
          'How to perform Wudu correctly?',
          'Rules of Zakat on savings',
          'Is cryptocurrency halal?',
        ]
      )
        .slice(1)
        .map((item: string, i: number) => (
          <Animated.View
            key={i}
            entering={FadeInUp.duration(300).delay(120 + i * 60)}
            style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}
          >
            <Pressable
              onPress={() => handleSuggestionClick(item)}
              className="flex-row items-center gap-3 px-4 py-3.5 rounded-2xl border active:opacity-70"
              style={{
                borderColor: c.border,
                backgroundColor: c.surface,
              }}
            >
              <View
                className="w-7 h-7 rounded-lg items-center justify-center"
                style={{ backgroundColor: c.surface2 }}
              >
                <Ionicons
                  name="help-circle-outline"
                  size={15}
                  color={c.quaternary}
                />
              </View>

              <Text
                className="flex-1 text-[13.5px] font-normal leading-5"
                style={{
                  color: c.primary,
                  direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
                }}
                numberOfLines={2}
              >
                {item}
              </Text>

              <Ionicons name="chevron-forward" size={14} color={c.quinary} />
            </Pressable>
          </Animated.View>
        ))}
    </Animated.View>
  );

  // ─── RENDER: LOADING ───────────────────────────────────
  const renderLoading = () => (
    <Animated.View entering={FadeIn.duration(400)} className="pt-4 px-1">
      <View
        className="max-w-[400px] self-center w-full rounded-3xl border p-8 items-center"
        style={{
          borderColor: c.border,
          backgroundColor: c.surface,
          shadowColor: c.primary,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.04,
          shadowRadius: 20,
          elevation: 2,
        }}
      >
        <PulsingCore colors={c} />

        <View className="flex-row items-center mb-8">
          <Text
            className="text-[13px] font-medium tracking-wide"
            style={{ color: c.tertiary }}
          >
            {tr?.ai?.loading?.label || 'Consulting scholarly sources'}
          </Text>
          <TypingDots color={c.tertiary} />
        </View>

        <View className="w-full gap-3">
          <ShimmerLine
            widthPercent={100}
            delay={0}
            colors={c}
            isDark={isDark}
          />
          <ShimmerLine
            widthPercent={92}
            delay={120}
            colors={c}
            isDark={isDark}
          />
          <ShimmerLine
            widthPercent={85}
            delay={240}
            colors={c}
            isDark={isDark}
          />
          <ShimmerLine
            widthPercent={70}
            delay={360}
            colors={c}
            isDark={isDark}
          />
          <ShimmerLine
            widthPercent={55}
            delay={480}
            colors={c}
            isDark={isDark}
          />
        </View>
      </View>
    </Animated.View>
  );
  function ShimmerLine({
    widthPercent,
    delay = 0,
    colors,
    isDark,
  }: {
    widthPercent: number;
    delay?: number;
    colors: any;
    isDark: boolean;
  }) {
    const shimmer = useRef(new RNAnimated.Value(-1)).current;

    useEffect(() => {
      const anim = RNAnimated.loop(
        RNAnimated.timing(shimmer, {
          toValue: 1,
          duration: 2000,
          delay,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      );
      anim.start();
      return () => anim.stop();
    }, [delay]);

    const translateX = shimmer.interpolate({
      inputRange: [-1, 1],
      outputRange: [-180, 380],
    });

    return (
      <View
        className="h-3 rounded-lg overflow-hidden"
        style={{
          width: `${widthPercent}%`,
          backgroundColor: colors.surface2,
        }}
      >
        <RNAnimated.View
          className="h-full w-1/3 rounded-lg"
          style={{
            transform: [{ translateX }],
            backgroundColor: isDark
              ? 'rgba(255,255,255,0.07)'
              : 'rgba(0,0,0,0.04)',
          }}
        />
      </View>
    );
  }
  function PulsingCore({ colors }: { colors: any }) {
    const ring1 = useRef(new RNAnimated.Value(0)).current;
    const ring2 = useRef(new RNAnimated.Value(0)).current;
    const core = useRef(new RNAnimated.Value(1)).current;

    useEffect(() => {
      const sonar = (val: RNAnimated.Value, delay: number) =>
        RNAnimated.loop(
          RNAnimated.sequence([
            RNAnimated.timing(val, {
              toValue: 1,
              duration: 2200,
              delay,
              useNativeDriver: true,
              easing: Easing.out(Easing.ease),
            }),
            RNAnimated.timing(val, {
              toValue: 0,
              duration: 0,
              useNativeDriver: true,
            }),
          ]),
        );

      const pulse = RNAnimated.loop(
        RNAnimated.sequence([
          RNAnimated.timing(core, {
            toValue: 1.15,
            duration: 1400,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
          RNAnimated.timing(core, {
            toValue: 1,
            duration: 1400,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
        ]),
      );

      const r1 = sonar(ring1, 0);
      const r2 = sonar(ring2, 800);
      r1.start();
      r2.start();
      pulse.start();

      return () => {
        r1.stop();
        r2.stop();
        pulse.stop();
      };
    }, []);

    return (
      <View className="items-center justify-center w-20 h-20 mb-6">
        {/* Expanding Ring 1 */}
        <RNAnimated.View
          className="absolute rounded-full"
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            borderWidth: 1.5,
            borderColor: colors.accent,
            opacity: ring1.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 0],
            }),
            transform: [
              {
                scale: ring1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 2.4],
                }),
              },
            ],
          }}
        />
        {/* Expanding Ring 2 */}
        <RNAnimated.View
          className="absolute rounded-full"
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            borderWidth: 1.5,
            borderColor: colors.accent,
            opacity: ring2.interpolate({
              inputRange: [0, 1],
              outputRange: [0.35, 0],
            }),
            transform: [
              {
                scale: ring2.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 2.4],
                }),
              },
            ],
          }}
        />
        {/* Glowing Core */}
        <RNAnimated.View
          className="w-14 h-14 rounded-full items-center justify-center"
          style={{
            backgroundColor: colors.accentMuted,
            transform: [{ scale: core }],
            shadowColor: colors.accent,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.3,
            shadowRadius: 16,
            elevation: 6,
          }}
        >
          <Ionicons name="sparkles" size={24} color={colors.accent} />
        </RNAnimated.View>
      </View>
    );
  }
  function TypingDots({ color }: { color: string }) {
    const dots = [
      useRef(new RNAnimated.Value(0)).current,
      useRef(new RNAnimated.Value(0)).current,
      useRef(new RNAnimated.Value(0)).current,
    ];

    useEffect(() => {
      const anims = dots.map((dot, i) =>
        RNAnimated.loop(
          RNAnimated.sequence([
            RNAnimated.timing(dot, {
              toValue: 1,
              duration: 500,
              delay: i * 120,
              useNativeDriver: true,
            }),
            RNAnimated.timing(dot, {
              toValue: 0.25,
              duration: 500,
              useNativeDriver: true,
            }),
          ]),
        ),
      );
      anims.forEach((a) => a.start());
      return () => anims.forEach((a) => a.stop());
    }, []);

    return (
      <View className="flex-row ml-1.5 gap-[3px] mt-0.5">
        {dots.map((dot, i) => (
          <RNAnimated.View
            key={i}
            className="w-[5px] h-[5px] rounded-full"
            style={{ backgroundColor: color, opacity: dot }}
          />
        ))}
      </View>
    );
  }
  // ─── RENDER: ERROR ─────────────────────────────────────
  const renderError = () => (
    <Animated.View entering={FadeInUp.duration(300)} className="pt-2">
      <View
        className="max-w-[400px] self-center w-full rounded-2xl border p-4 flex-row items-start gap-2.5"
        style={{
          borderColor: c.border5,
          backgroundColor: c.surface6,
        }}
      >
        <Ionicons
          name="alert-circle"
          size={20}
          color={c.error}
          className="mt-0.5"
        />
        <View className="flex-1">
          <Text
            className="text-sm font-semibold mb-0.5"
            style={{ color: c.error }}
          >
            {tr?.ai?.error?.title || 'Error'}
          </Text>
          <Text
            className="text-[13px] leading-[18px]"
            style={{ color: c.error, opacity: 0.75 }}
          >
            {error}
          </Text>
        </View>
      </View>
    </Animated.View>
  );

  // ─── RENDER: ANSWER ────────────────────────────────────
  const renderAnswer = () => (
    <Animated.View entering={FadeInUp.duration(400)} className="gap-3 pt-1">
      {/* Answer Card */}
      <View
        className="rounded-2xl border overflow-hidden"
        style={{ borderColor: c.border, backgroundColor: c.surface }}
      >
        <View
          className="flex-row items-center gap-2 px-4 py-3"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: c.border,
          }}
        >
          <View
            className="w-6.5 h-6.5 rounded-lg items-center justify-center"
            style={{
              backgroundColor: c.accentMuted,
              direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
            }}
          >
            <Ionicons name="sparkles" size={13} color={c.accent} />
          </View>
          <Text
            className="text-[11px] font-bold tracking-wider uppercase"
            style={{ color: c.accent }}
          >
            {tr?.aiApp?.answer}
          </Text>
        </View>

        <View className="p-4">
          <Text
            className="text-[14.5px] leading-6"
            style={{
              color: c.primary,
              textAlign: selectedLanguage === 'ar' ? 'right' : 'left',
              writingDirection: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
            }}
          >
            {answer}
          </Text>
        </View>
      </View>

      {/* Sources Card */}
      {resources.length > 0 && (
        <Animated.View entering={FadeInUp.duration(400).delay(150)}>
          <View
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: c.border, backgroundColor: c.surface }}
          >
            <View
              className="flex-row items-center justify-between px-4 py-3"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: c.border,
              }}
            >
              <View className="flex-row items-center gap-2">
                <View
                  className="w-6.5 h-6.5 rounded-lg items-center justify-center"
                  style={{ backgroundColor: c.successMuted }}
                >
                  <Ionicons name="book-outline" size={13} color={c.success} />
                </View>
                <Text
                  className="text-[11px] font-bold tracking-wider uppercase"
                  style={{ color: c.success }}
                >
                  {tr?.ai?.sources?.title || 'Sources'}
                </Text>
              </View>

              <View
                className="px-2.5 py-0.5 rounded-md"
                style={{ backgroundColor: c.surface2 }}
              >
                <Text
                  className="text-[11px] font-semibold"
                  style={{ color: c.quaternary }}
                >
                  {resources.length}{' '}
                  {tr?.contentNormal?.hadithCard?.header?.referenceLabel}
                </Text>
              </View>
            </View>

            <View className="py-1">
              {resources.map((url, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleOpenLink(url)}
                  className="flex-row items-center justify-between px-3.5 py-3 mx-2 my-0.5 rounded-xl active:opacity-70"
                  style={({ pressed }) => ({
                    backgroundColor: pressed ? c.surface2 : 'transparent',
                  })}
                >
                  <View className="flex-1 mr-2.5">
                    <Text
                      className="text-[13.5px] font-medium leading-[18px]"
                      style={{ color: c.primary }}
                      numberOfLines={1}
                    >
                      {getDisplayTitleFromUrl(url, index)}
                    </Text>
                    <Text
                      className="text-[11.5px] mt-0.5"
                      style={{ color: c.quaternary }}
                      numberOfLines={1}
                    >
                      {getDomainFromUrl(url)}
                    </Text>
                  </View>

                  <View
                    className="w-7 h-7 rounded-lg items-center justify-center"
                    style={{ backgroundColor: c.surface2 }}
                  >
                    <Ionicons
                      name="arrow-up-forward"
                      size={13}
                      color={c.quaternary}
                    />
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );

  // ─── MAIN RENDER ───────────────────────────────────────
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: c.background }}
      edges={['top']}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        {/* Scrollable Content */}
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          contentContainerClassName="px-4 pt-2 pb-4"
        >
          {renderHeader()}

          {loading
            ? renderLoading()
            : error
              ? renderError()
              : answer
                ? renderAnswer()
                : !inputFocused && renderSuggestions()}
        </ScrollView>

        {/* Bottom Input Bar */}
        <View
          className="px-3.5 pt-2.5"
          style={{
            backgroundColor: c.background,
            borderTopWidth: 1,
            borderTopColor: c.border,
            paddingBottom: Platform.OS === 'ios' ? 12 : 12,
          }}
        >
          <View
            className="flex-row items-end gap-2 rounded-[20px] border px-3 py-2"
            style={{
              borderWidth: 1.5,
              marginBottom: keyboardVisible ? 200 : 0,
              borderColor: keyboardVisible ? c.border3 : c.border2,
              backgroundColor: c.surface,
            }}
          >
            <View
              className="w-8 h-8 rounded-xl items-center justify-center mb-0.5"
              style={{ backgroundColor: c.accentMuted }}
            >
              <Ionicons name="sparkles" size={16} color={c.accent} />
            </View>

            <TextInput
              ref={inputRef}
              value={searchValue}

              onChangeText={setSearchValue}
              // onFocus={() => {
              //   setInputFocused(true);
              //   setTimeout(() => {
              //     scrollRef.current?.scrollToEnd({ animated: true });
              //   }, 150);
              // }}
              onBlur={() => setInputFocused(false)}
              placeholder={tr?.ai?.input?.placeholder || 'Ask a question...'}
              placeholderTextColor={c.quaternary}
              multiline
              maxLength={500}
              // textAlign={selectedLanguage === 'ar' ? 'left' : 'right'}
              className="flex-1 text-[15px] leading-5 py-1.5 px-1"

              style={{
                writingDirection: 'auto',
                color: c.primary,
                maxHeight: 100,
                textAlignVertical: 'center',
              }}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />

            <Pressable
              onPress={handleSubmit}
              disabled={disabled}
              className="w-9 h-9 rounded-xl items-center justify-center mb-0.5 active:opacity-80"
              style={{
                backgroundColor: disabled ? c.surface2 : c.accent,
              }}
            >
              <Ionicons
                name="arrow-up"
                size={20}
                color={disabled ? c.quaternary : '#ffffff'}
              />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
