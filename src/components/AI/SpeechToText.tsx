import Entypo from '@expo/vector-icons/Entypo';
import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from 'expo-speech-recognition';
import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Colors } from '@/src/constants/theme';
import { useAppTheme } from '@/src/context/ThemeProvider';
import useLanguage from '../../hooks/useLanguage';

const speechLocaleMap: Record<string, string> = {
  en: 'en-US',
  ar: 'ar-SA',
  fr: 'fr-FR',
  es: 'es-ES',
  de: 'de-DE',
  it: 'it-IT',
  pt: 'pt-PT',
  ru: 'ru-RU',
  zh: 'zh-CN',
  ja: 'ja-JP',
  ko: 'ko-KR',
  hi: 'hi-IN',
  tr: 'tr-TR',
  nl: 'nl-NL',
  pl: 'pl-PL',
  sv: 'sv-SE',
  da: 'da-DK',
  fi: 'fi-FI',
  no: 'nb-NO',
  el: 'el-GR',
  he: 'he-IL',
  id: 'id-ID',
  ms: 'ms-MY',
  th: 'th-TH',
  vi: 'vi-VN',
  uk: 'uk-UA',
  cs: 'cs-CZ',
  ro: 'ro-RO',
  hu: 'hu-HU',
  sk: 'sk-SK',
  bg: 'bg-BG',
  hr: 'hr-HR',
  sr: 'sr-RS',
  sl: 'sl-SI',
  et: 'et-EE',
  lv: 'lv-LV',
  lt: 'lt-LT',
};

type SpeechToTextProps = {
  setText: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

function SpeechToText({ setText, setError }: SpeechToTextProps) {
  const [interim, setInterim] = useState('');
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(true);

  const { selectedLanguage } = useLanguage();
  const { theme } = useAppTheme();
  const colors = Colors[theme];

  const recognizeLanguage = speechLocaleMap[selectedLanguage] ?? 'en-US';

  /*
   * Check native speech recognition availability.
   */
  useEffect(() => {
    let mounted = true;

    const checkSupport = async () => {
      try {
        const available =
          await ExpoSpeechRecognitionModule.isRecognitionAvailable();

        if (mounted) {
          setSupported(available);
        }
      } catch (error) {
        console.error('Speech recognition availability error:', error);

        if (mounted) {
          setSupported(false);
        }
      }
    };

    checkSupport();

    return () => {
      mounted = false;
    };
  }, []);

  /*
   * Recognition started.
   */
  useSpeechRecognitionEvent('start', () => {
    setListening(true);
    setError(null);
  });

  /*
   * Recognition results.
   */
  useSpeechRecognitionEvent('result', (event) => {
    const results = event.results;

    if (!results?.length) return;

    const result = results[0];

    const transcript = result?.transcript ?? '';

    if (event.isFinal) {
      if (transcript.trim()) {
        setText((prev) => {
          const separator = prev && !prev.endsWith(' ') ? ' ' : '';
          return prev + separator + transcript.trim();
        });
      }

      setInterim('');
    } else {
      setInterim(transcript);
    }
  });

  /*
   * Recognition ended.
   */
  useSpeechRecognitionEvent('end', () => {
    setListening(false);
    setInterim('');
  });

  /*
   * Native recognition error.
   */
  useSpeechRecognitionEvent('error', (event) => {
    setListening(false);
    setInterim('');

    const errorMessages: Record<string, string> = {
      'no-speech': 'No speech detected. Try speaking louder.',
      'audio-capture': 'No microphone found or microphone error.',
      'not-allowed': 'Microphone permission denied.',
      network: 'Network error. Check your connection.',
      aborted: 'Recording aborted.',
      'service-not-allowed': 'Speech recognition service is not available.',
    };

    setError(
      errorMessages[event.error] ?? `Speech recognition error: ${event.error}`,
    );
  });

  useEffect(() => {
    const diagnose = async () => {
      try {
        const available =
          await ExpoSpeechRecognitionModule.isRecognitionAvailable();

        const services =
          await ExpoSpeechRecognitionModule.getSpeechRecognitionServices();

        const defaultService =
          await ExpoSpeechRecognitionModule.getDefaultRecognitionService();

        const assistant =
          await ExpoSpeechRecognitionModule.getAssistantService();

        console.log('================ SPEECH DEBUG ================');
        console.log('Available:', available);
        console.log('Services:', services);
        console.log('Default:', defaultService);
        console.log('Assistant:', assistant);
        console.log('==============================================');
      } catch (error) {
        console.error('Speech diagnostic failed:', error);
      }
    };

    diagnose();
  }, []);

  const startListening = async () => {
    if (listening) return;

    try {
      setError(null);
      setInterim('');

      const permission =
        await ExpoSpeechRecognitionModule.requestMicrophonePermissionsAsync();

      if (!permission.granted) {
        setError('Microphone permission denied.');
        return;
      }

      await ExpoSpeechRecognitionModule.start({
        lang: recognizeLanguage,
        interimResults: true,
        continuous: false,
      });
    } catch (error) {
      console.error('Speech start error:', error);
      setError('Failed to start speech recognition.');
    }
  };

  const stopListening = () => {
    try {
      console.log('stop pressed');
      ExpoSpeechRecognitionModule.stop();
    } catch (error) {
      console.error('Could not stop speech recognition:', error);
    }
  };

  /*
   * Cleanup when component unmounts.
   */
  useEffect(() => {
    return () => {
      try {
        ExpoSpeechRecognitionModule.stop();
      } catch {}
    };
  }, []);

  if (!supported) {
    return (
      <View
        className="items-center justify-center rounded-lg px-4 py-2"
        style={{
          borderWidth: 1,
          borderColor: colors?.border5,
        }}
      >
        <Text className="text-xs" style={{ color: colors?.error }}>
          🎤 Speech recognition not supported
        </Text>
      </View>
    );
  }

  return (
    <View className="relative items-center">
      <Pressable
        onPress={listening ? stopListening : startListening}
        className="h-10 w-10 items-center justify-center rounded-lg"
        style={{
          backgroundColor: colors?.surface3,

          shadowColor: listening ? colors?.accent : colors?.background,

          shadowOffset: {
            width: 0,
            height: 2,
          },

          shadowOpacity: listening ? 0.6 : 0.25,
          shadowRadius: listening ? 10 : 4,

          elevation: listening ? 8 : 3,
        }}
      >
        {listening && (
          <View
            className="absolute h-10 w-10 rounded-lg"
            style={{
              backgroundColor: colors?.accentMuted,
              opacity: 0.5,
            }}
          />
        )}

        {listening ? (
          <Entypo name="controller-paus" size={18} color={colors?.accent} />
        ) : (
          <Entypo name="mic" size={18} color={colors?.accent} />
        )}

        {listening && (
          <View className="absolute -right-1 -top-1 h-2.5 w-2.5">
            <View
              className="absolute h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: colors?.error,
                opacity: 0.35,
              }}
            />

            <View
              className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: colors?.error,
              }}
            />
          </View>
        )}
      </Pressable>

      {listening && interim ? (
        <View
          className="absolute top-12 z-50 max-w-[220px] rounded-lg px-3 py-2"
          style={{
            backgroundColor: colors?.surface3,
            borderWidth: 1,
            borderColor: colors?.border3,
          }}
        >
          <Text
            className="text-xs"
            style={{
              color: colors?.secondary,
            }}
          >
            {interim}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

export default SpeechToText;
