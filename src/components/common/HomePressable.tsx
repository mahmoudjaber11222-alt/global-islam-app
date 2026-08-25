import { Colors } from '@/src/constants/theme';
import { useAppTheme } from '@/src/context/ThemeProvider';
import { Ionicons } from '@expo/vector-icons';
import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from 'react-native';

interface HomePressableProps {
  onNavigate: () => void;
  title: string;
  imageUrl?: ImageSourcePropType;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function HomePressable({
  onNavigate,
  title,
  imageUrl,
  icon = 'arrow-forward',
}: HomePressableProps) {
  const { theme } = useAppTheme();
  const c = Colors[theme];

  return (
    <Pressable
      onPress={onNavigate}
      className="w-full h-[180px] overflow-hidden rounded-2xl"
      style={({ pressed }) => ({
        backgroundColor: c.surface,
        borderWidth: 1,
        borderColor: pressed ? c.border2 : c.border,
        opacity: pressed ? 0.92 : 1,

        elevation: theme === 'dark' ? 0 : 3,

        shadowColor: c.accent,
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: theme === 'dark' ? 0.06 : 0.05,
        shadowRadius: 14,
      })}
    >
      <ImageBackground
        source={imageUrl}
        resizeMode="cover"
        className="flex-1 justify-center px-4"
      >
        {/* Image overlay */}
        {
          <View
            className="absolute inset-0"
            style={{
              backgroundColor:
                theme === 'dark' ? 'rgba(7,20,19,0.62)' : 'rgba(16,32,30,0.42)',
            }}
          />
        }

        {/* Decorative circles */}
        {
          <>
            <View
              className="absolute -right-10 -top-10 h-28 w-28 rounded-full"
              style={{
                backgroundColor: c.accentMuted,
              }}
            />

            <View
              className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full"
              style={{
                backgroundColor: c.successMuted,
              }}
            />
          </>
        }

        {/* Content */}
        <View className="px-2 py-6">
          {/* Top row */}
          <View className="flex-row items-center justify-between">
            {/* Icon */}
            <View
              className="h-10 w-10 items-center justify-center rounded-xl"
              style={{
                backgroundColor: imageUrl ? 'rgba(0,0,0,0.28)' : c.accentMuted,
                borderWidth: 1,
                borderColor: imageUrl ? 'rgba(255,255,255,0.18)' : c.border3,
              }}
            >
              <Ionicons name={icon} size={20} color={c.accent} />
            </View>

            {/* Arrow */}
            <View
              className="h-8 w-8 items-center justify-center rounded-full"
              style={{
                backgroundColor: imageUrl ? 'rgba(0,0,0,0.28)' : c.surface2,
                borderWidth: 1,
                borderColor: imageUrl ? 'rgba(255,255,255,0.18)' : c.border,
              }}
            >
              <Ionicons name="chevron-forward" size={16} color={'white'} />
            </View>
          </View>

          {/* Title */}
          <Text
            className="mt-4 text-lg font-bold tracking-wide capitalize"
            style={{
              color: 'white',
              textShadowColor: imageUrl ? 'rgba(0,0,0,0.45)' : 'transparent',
              textShadowOffset: {
                width: 0,
                height: 1,
              },
              textShadowRadius: 4,
            }}
            numberOfLines={2}
          >
            {title}
          </Text>
        </View>

        {/* Bottom accent */}
      </ImageBackground>
    </Pressable>
  );
}
