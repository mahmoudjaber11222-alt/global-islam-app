import { getThemeColors } from '@/src/constants/theme';
import { useAppTheme } from '@/src/context/ThemeProvider';
import useLanguage from '@/src/hooks/useLanguage';
import useStaticText from '@/src/hooks/useStaticText';
import { cacheLanguage } from '@/src/utils/cache';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useContext, useState } from 'react';
import {
  Animated,
  FlatList,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSettings } from '../../../context/SettingsProvider';
import { AdhanReciterSelector } from './AdhanReciterSelector';
import { SettingsRow } from './SettingsRow';

// Adjust these imports according to your project structure
// import { LANGUAGES } from '../hooks/useLanguage';
import { nextPrayerContext } from '../../../context/NextPrayerProvider'; // <-- IMPORT CONTEXT HERE

// Assuming these exist in your project

const LANGUAGES = [
  { code: 'en', name: 'English', nameLocal: 'English' },
  { code: 'ar', name: 'Arabic', nameLocal: 'العربية' },
  { code: 'fr', name: 'French', nameLocal: 'Français' },
  { code: 'es', name: 'Spanish', nameLocal: 'Español' },
  { code: 'de', name: 'German', nameLocal: 'Deutsch' },
  { code: 'it', name: 'Italian', nameLocal: 'Italiano' },
  { code: 'pt', name: 'Portuguese', nameLocal: 'Português' },
  { code: 'ru', name: 'Russian', nameLocal: 'Русский' },
  { code: 'zh', name: 'Chinese', nameLocal: '中文' },
  { code: 'ja', name: 'Japanese', nameLocal: '日本語' },
  { code: 'ko', name: 'Korean', nameLocal: '한국어' },
  { code: 'hi', name: 'Hindi', nameLocal: 'हिन्दी' },
  { code: 'tr', name: 'Turkish', nameLocal: 'Türkçe' },
  { code: 'nl', name: 'Dutch', nameLocal: 'Nederlands' },
  { code: 'pl', name: 'Polish', nameLocal: 'Polski' },
  { code: 'sv', name: 'Swedish', nameLocal: 'Svenska' },
  { code: 'da', name: 'Danish', nameLocal: 'Dansk' },
  { code: 'fi', name: 'Finnish', nameLocal: 'Suomi' },
  { code: 'no', name: 'Norwegian', nameLocal: 'Norsk' },
  { code: 'el', name: 'Greek', nameLocal: 'Ελληνικά' },
  { code: 'he', name: 'Hebrew', nameLocal: 'עברית' },
  { code: 'id', name: 'Indonesian', nameLocal: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Malay', nameLocal: 'Bahasa Melayu' },
  { code: 'th', name: 'Thai', nameLocal: 'ไทย' },
  { code: 'vi', name: 'Vietnamese', nameLocal: 'Tiếng Việt' },
  { code: 'uk', name: 'Ukrainian', nameLocal: 'Українська' },
  { code: 'cs', name: 'Czech', nameLocal: 'Čeština' },
  { code: 'ro', name: 'Romanian', nameLocal: 'Română' },
  { code: 'hu', name: 'Hungarian', nameLocal: 'Magyar' },
  { code: 'sk', name: 'Slovak', nameLocal: 'Slovenčina' },
  { code: 'bg', name: 'Bulgarian', nameLocal: 'Български' },
  { code: 'hr', name: 'Croatian', nameLocal: 'Hrvatski' },
  { code: 'sr', name: 'Serbian', nameLocal: 'Српски' },
  { code: 'sl', name: 'Slovenian', nameLocal: 'Slovenščina' },
  { code: 'et', name: 'Estonian', nameLocal: 'Eesti' },
  { code: 'lv', name: 'Latvian', nameLocal: 'Latviešu' },
  { code: 'lt', name: 'Lithuanian', nameLocal: 'Lietuvių' },
];

export default function Settings() {
  const insets = useSafeAreaInsets();
  const { theme: themeValue, setTheme } = useAppTheme();
  const c = getThemeColors(themeValue);
  const isDark = themeValue === 'dark';
  const { translatedText } = useStaticText();
  const { selectedLanguage, handleLanguage } = useLanguage();
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const {
    showReciterModal,
    setShowReciterModal,
    selectedReciter,
    handleReciterSelect,
    vibration,
    setVibration,
    preNotification,
    setPreNotification,
    volume,
    setVolume,
    isPlaying,
    playPreview,
    stopPreview,
    fadeAnim,
    isDownloading,
    refreshSettings,
  } = useSettings();

  // 1. Consume the prayer context
  const prayerContext = useContext(nextPrayerContext);

  // 2. Notification states
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isScheduling, setIsScheduling] = useState(false);

  const currentLang = LANGUAGES.find((l) => l.code === selectedLanguage);

  useFocusEffect(
    useCallback(() => {
      refreshSettings();
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }, [refreshSettings, fadeAnim]),
  );

  const handleThemeChange = (dark: boolean) => {
    setTheme(dark ? 'dark' : 'light');
  };

  const handleLanguageSelect = (code: string) => {
    handleLanguage(code);
    cacheLanguage(code);
    setShowLanguageModal(false);
  };

  // 3. Toggle handler with loading state
  const handleToggleNotifications = async (value: boolean) => {
    setNotificationsEnabled(value);
    setIsScheduling(true);

    try {
      if (prayerContext) {
        if (value) {
          await prayerContext.schedulePrayerNotifications();
        } else {
          await prayerContext.cancelPrayerNotifications();
        }
      }
    } catch (error) {
      console.error('Failed to toggle notifications:', error);
      // Revert if it fails
      setNotificationsEnabled(!value);
    } finally {
      setIsScheduling(false);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: c.background }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
      >
        {/* ─── Language ─── */}
        <View style={{ marginBottom: 24 }}>
          <SectionLabel
            text={
              selectedLanguage === 'en'
                ? translatedText?.other?.theLanguage.split(' ')[1]
                : translatedText?.other?.theLanguage
            }
            c={c}
          />
          <SettingsRow
            icon="language"
            iconColor={c.accent}
            title={
              selectedLanguage === 'en'
                ? translatedText?.other?.theLanguage.split(' ')[1]
                : translatedText?.other?.theLanguage
            }
            subtitle={currentLang?.nameLocal || selectedLanguage}
            value={currentLang?.nameLocal || selectedLanguage}
            onPress={() => setShowLanguageModal(true)}
            c={c}
          />
        </View>

        {/* ─── Adhan Reciter ─── */}
        <View style={{ marginBottom: 24 }}>
          <SectionLabel
            text={translatedText?.settingsApp?.reciterTitle}
            c={c}
          />
          <SettingsRow
            icon="musical-notes"
            iconColor={c.accent}
            title={translatedText?.settingsApp?.reciterTitle}
            subtitle={
              selectedReciter?.description ||
              translatedText?.settingsApp?.reciterSub
            }
            value={
              selectedReciter?.name || translatedText?.settingsApp?.notSelected
            }
            onPress={() => setShowReciterModal(true)}
            c={c}
          />

          {selectedReciter && (
            <View
              style={{
                marginHorizontal: 16,
                marginTop: 8,
                padding: 16,
                borderRadius: 14,
                backgroundColor: c.surface3,
                borderWidth: 1,
                borderColor: c.border3,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: c.accentMuted,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Ionicons name="volume-high" size={18} color={c.accent} />
                </View>
                <View style={{ marginLeft: 12, flex: 1 }}>
                  <Text
                    style={{
                      color: c.primary,
                      fontWeight: '500',
                      fontSize: 15,
                    }}
                  >
                    {selectedReciter.name}
                  </Text>
                  <Text style={{ color: c.accent, fontSize: 13, marginTop: 2 }}>
                    {selectedReciter.nameArabic}
                  </Text>
                </View>
                {isDownloading ? (
                  <Text style={{ color: c.primary }}>
                    {translatedText?.ai?.loading?.label || 'Loading...'}
                  </Text>
                ) : (
                  <TouchableOpacity
                    onPress={playPreview}
                    activeOpacity={0.7}
                    style={{
                      paddingHorizontal: 12,
                      paddingVertical: 6,
                      borderRadius: 20,
                      backgroundColor: c.accentMuted,
                    }}
                  >
                    <Text
                      style={{
                        color: c.accent,
                        fontSize: 12,
                        fontWeight: '500',
                      }}
                    >
                      {translatedText?.settingsApp?.preview}
                    </Text>
                  </TouchableOpacity>
                )}
                {isPlaying && (
                  <TouchableOpacity
                    onPress={stopPreview}
                    activeOpacity={0.7}
                    style={{
                      paddingHorizontal: 12,
                      paddingVertical: 6,
                      borderRadius: 20,
                      backgroundColor: c.accentMuted,
                      marginLeft: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: c.error,
                        fontSize: 15,
                        fontWeight: '500',
                      }}
                    >
                      {translatedText?.settingsApp?.cancel}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              {selectedReciter.muezzin && (
                <Text
                  style={{
                    color: c.tertiary,
                    fontSize: 12,
                    marginTop: 8,
                    marginLeft: 52,
                  }}
                >
                  {translatedText?.settingsApp?.muezzin}:
                  {selectedReciter.muezzin}
                </Text>
              )}
            </View>
          )}
        </View>

        {/* ─── Notifications ─── */}
        <View style={{ marginBottom: 24 }}>
          <SectionLabel
            text={translatedText?.settingsApp?.notifications || 'Notifications'}
            c={c}
          />

          {/* Master Notification Toggle */}
          <SettingsRow
            icon={notificationsEnabled ? 'notifications' : 'notifications-off'}
            iconColor="#3b82f6"
            title={
              translatedText?.settingsApp?.notifications ||
              'Enable Notifications'
            }
            subtitle={
              isScheduling
                ? translatedText?.ai?.loading?.label || 'Updating...'
                : notificationsEnabled
                  ? 'Prayers are scheduled'
                  : 'Prayers are muted'
            }
            isSwitch
            switchValue={notificationsEnabled}
            onSwitchChange={handleToggleNotifications}
            disabled={isScheduling}
            c={c}
          />

          <SettingsRow
            icon="time"
            iconColor="#3b82f6"
            title={translatedText?.settingsApp?.preNot}
            subtitle={translatedText?.settingsApp?.preNotDet}
            isSwitch
            switchValue={preNotification}
            onSwitchChange={setPreNotification}
            c={c}
          />
          <SettingsRow
            icon={isDark ? 'moon' : 'sunny'}
            iconColor={c.accent}
            title={translatedText?.settingsApp?.theme}
            subtitle={
              isDark
                ? translatedText?.settingsApp?.dark
                : translatedText?.settingsApp?.light
            }
            isSwitch
            switchValue={isDark}
            onSwitchChange={handleThemeChange}
            c={c}
          />
        </View>

        {/* ─── About ─── */}
        <View style={{ marginBottom: 24 }}>
          <SectionLabel text={translatedText?.settingsApp?.about} c={c} />
          <SettingsRow
            icon="information-circle"
            iconColor="#10b981"
            title={translatedText?.settingsApp?.about}
            subtitle={translatedText?.splash?.version + ' 1.0.0'}
            showArrow={false}
            c={c}
          />
        </View>
      </ScrollView>

      {/* ─── Language Modal ─── */}
      <Modal
        visible={showLanguageModal}
        animationType="slide"
        presentationStyle="fullScreen"
        statusBarTranslucent
      >
        <View style={{ flex: 1, backgroundColor: c.background }}>
          <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderBottomColor: c.border,
              paddingTop: insets.top,
            }}
          >
            <TouchableOpacity
              onPress={() => setShowLanguageModal(false)}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: c.surface2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="close" size={22} color={c.primary} />
            </TouchableOpacity>
            <Text style={{ color: c.primary, fontWeight: '600', fontSize: 17 }}>
              {translatedText?.settingsApp?.selectLanguage || 'Select Language'}
            </Text>
            <View style={{ width: 40 }} />
          </View>

          <FlatList
            data={LANGUAGES}
            keyExtractor={(item) => item.code}
            contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
            renderItem={({ item }) => {
              const isSelected = item.code === selectedLanguage;
              return (
                <TouchableOpacity
                  onPress={() => handleLanguageSelect(item.code)}
                  activeOpacity={0.7}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    borderBottomWidth: 1,
                    borderBottomColor: c.border,
                    backgroundColor: isSelected ? c.accentMuted : 'transparent',
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: c.primary,
                        fontSize: 16,
                        fontWeight: isSelected ? '600' : '400',
                      }}
                    >
                      {item.nameLocal}
                    </Text>
                    <Text
                      style={{ color: c.tertiary, fontSize: 13, marginTop: 2 }}
                    >
                      {item.name}
                    </Text>
                  </View>
                  {isSelected && (
                    <Ionicons name="checkmark" size={22} color={c.accent} />
                  )}
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Modal>

      {/* ─── Reciter Modal ─── */}
      <Modal
        visible={showReciterModal}
        animationType="slide"
        presentationStyle="fullScreen"
        statusBarTranslucent
      >
        <View style={{ flex: 1, backgroundColor: c.background }}>
          <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderBottomColor: c.border,
              paddingTop: insets.top,
            }}
          >
            <TouchableOpacity
              onPress={() => setShowReciterModal(false)}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: c.surface2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="close" size={22} color={c.primary} />
            </TouchableOpacity>
            <Text style={{ color: c.primary, fontWeight: '600', fontSize: 17 }}>
              {translatedText?.settingsApp?.selectReciter}
            </Text>
            <View style={{ width: 40 }} />
          </View>
          <AdhanReciterSelector onReciterSelected={handleReciterSelect} />
        </View>
      </Modal>
    </ScrollView>
  );
}

function SectionLabel({ text, c }: { text?: string; c: any }) {
  const { selectedLanguage } = useLanguage();
  return (
    <View style={{ paddingHorizontal: 16, marginBottom: 8 }}>
      <Text
        style={{
          direction: selectedLanguage !== 'ar' ? 'ltr' : 'rtl',
          color: c.accent,
          fontSize: 11,
          fontWeight: '700',
          letterSpacing: 2,
          textTransform: 'uppercase',
          opacity: 0.7,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
