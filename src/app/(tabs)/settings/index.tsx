import { getThemeColors } from '@/src/constants/theme';
import { useAppTheme } from '@/src/context/ThemeProvider';
import useLanguage from '@/src/hooks/useLanguage';
import useStaticText from '@/src/hooks/useStaticText';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  Animated,
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

export default function Settings() {
  const insets = useSafeAreaInsets();
  const { theme: themeValue, setTheme } = useAppTheme();
  const c = getThemeColors(themeValue);
  const isDark = themeValue === 'dark';
  const { translatedText } = useStaticText();
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

  return (
    <ScrollView style={{ backgroundColor: c.background }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      <Animated.View
        style={{ flex: 1, opacity: fadeAnim, paddingTop: insets.top }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        >
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
                selectedReciter?.name ||
                translatedText?.settingsApp?.notSelected
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
                    <Text
                      style={{ color: c.accent, fontSize: 13, marginTop: 2 }}
                    >
                      {selectedReciter.nameArabic}
                    </Text>
                  </View>
                  {isDownloading ? (
                    <Text style={{ color: c.primary }}>
                      {translatedText?.ai?.loading?.label}
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
            <SectionLabel c={c} />
            <SettingsRow
              icon="notifications"
              iconColor="#3b82f6"
              title={translatedText?.settingsApp?.preNot}
              subtitle={translatedText?.settingsApp?.preNotDet}
              isSwitch
              switchValue={preNotification}
              onSwitchChange={setPreNotification}
              c={c}
            />
            {/* <SettingsRow
              icon="vibrate"
              iconColor="#8b5cf6"
              title="Vibration"
              subtitle="Vibrate during adhan"
              isSwitch
              switchValue={vibration}
              onSwitchChange={setVibration}
              c={c}
            /> */}
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

          {/* ─── Audio ─── */}
          {/* <View style={{ marginBottom: 24 }}>
            <SectionLabel text="Audio" c={c} />
            <View
              style={{
                marginHorizontal: 16,
                padding: 16,
                borderRadius: 14,
                backgroundColor: c.surface,
                borderWidth: 1,
                borderColor: c.border,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 12,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons name="volume-medium" size={20} color={c.accent} />
                  <Text
                    style={{
                      color: c.primary,
                      marginLeft: 12,
                      fontWeight: '500',
                      fontSize: 15,
                    }}
                  >
                    Adhan Volume
                  </Text>
                </View>
                <Text style={{ color: c.accent, fontWeight: '600' }}>
                  {volume}%
                </Text>
              </View>

              <View
                style={{
                  height: 6,
                  backgroundColor: c.surface2,
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <View
                  style={{
                    height: '100%',
                    backgroundColor: c.accent,
                    borderRadius: 3,
                    width: `${volume}%`,
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 12,
                }}
              >
                <TouchableOpacity
                  onPress={() => setVolume(Math.max(0, volume - 10))}
                  style={{ padding: 8 }}
                >
                  <Ionicons name="remove" size={20} color={c.quaternary} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setVolume(Math.min(100, volume + 10))}
                  style={{ padding: 8 }}
                >
                  <Ionicons name="add" size={20} color={c.quaternary} />
                </TouchableOpacity>
              </View>
            </View>
          </View> */}

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
            {/* <SettingsRow
              icon="share-social"
              iconColor="#06b6d4"
              title="Share App"
              showArrow={false}
              c={c}
            /> */}
          </View>
        </ScrollView>

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
              <Text
                style={{ color: c.primary, fontWeight: '600', fontSize: 17 }}
              >
                {translatedText?.settingsApp?.selectReciter}
              </Text>
              <View style={{ width: 40 }} />
            </View>
            <AdhanReciterSelector onReciterSelected={handleReciterSelect} />
          </View>
        </Modal>
      </Animated.View>
    </ScrollView>
  );
}

function SectionLabel({ text, c }: { text: string; c: any }) {
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
