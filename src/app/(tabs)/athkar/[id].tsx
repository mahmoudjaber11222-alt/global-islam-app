import thikrJson from '@/assets/Static Data/Athkar.json';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from 'react-icons/md';

import { FaShareAlt } from 'react-icons/fa';
import { RiResetLeftLine } from 'react-icons/ri';

import { FlatList, Pressable, Share, Text, View } from 'react-native';

export default function QuranSurah() {
  const { id } = useLocalSearchParams();
  const data = Object.values(thikrJson)[Number(id)];
  const adhkar = data['Adhkar'];
  const audio = data['Audio'];

  type Props = {
    content: string;
    targetCount: number;
    reference: string;
  };
  function ThikrCard({ content, targetCount, reference }: Props) {
    const [currentCount, setCurrentCount] = useState(0);
    const progress = Math.min(currentCount / targetCount, 1);
    const [showReference, setShowReference] = useState(false);
    function onReset() {
      setCurrentCount(0);
    }
    function onIncrement() {
      if (currentCount >= targetCount) return;
      setCurrentCount((p) => p + 1);
    }
    const handleShare = async () => {
      try {
        await Share.share({
          message: `${content}${reference ? `\nالمصدر: ${reference}` : ''}`,
        });
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <View className="bg-white px-6 py-8  active:opacity-95 border-b border-gray-200">
        {/* Thikr text (non-interactive) */}
        <View className="">
          <Text
            className="text-center text-lg leading-8 text-gray-800"
            style={{ fontFamily: 'Inter' }}
          >
            {content}
          </Text>
        </View>

        {/* 🔵 Circular counter button */}
        <View className="items-center mt-8">
          <Pressable
            onPress={onIncrement}
            onLongPress={onReset}
            delayLongPress={800}
            className="w-20 h-20 rounded-full items-center justify-center border-4 border-emerald-500 active:scale-95"
          >
            <Text className="text-2xl font-bold text-emerald-600">
              {currentCount}
            </Text>

            <Text className="text-xs text-gray-400">/ {targetCount}</Text>
          </Pressable>
        </View>

        {/* Progress */}
        <View className="mt-6">
          <View className="h-2  bg-gray-100 rounded-full overflow-hidden">
            <View
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: `${progress * 100}%` }}
            />
          </View>

          <Text className="text-center text-xs text-gray-400 mt-2">
            المتبقي {Math.max(targetCount - currentCount, 0)}
          </Text>
        </View>

        {/* Bottom actions */}
        <View className="flex-row justify-center items-center mt-6 gap-6">
          <Pressable
            onPress={() => setShowReference(!showReference)}
            hitSlop={12}
          >
            <View className="items-center flex flex-row gap-2">
              <Text className="text-sm text-gray-500">المرجع</Text>
              <Text className="text-sm text-gray-500">
                {showReference ? (
                  <MdKeyboardDoubleArrowUp />
                ) : (
                  <MdKeyboardDoubleArrowDown />
                )}
              </Text>
            </View>
          </Pressable>

          <View className="w-1 h-1 rounded-full bg-gray-300" />

          <Pressable onPress={onReset} hitSlop={12}>
            <Text className="text-sm text-red-500">
              <RiResetLeftLine />
            </Text>
          </Pressable>

          <View className="w-1 h-1 rounded-full bg-gray-300" />

          <Pressable onPress={handleShare} hitSlop={12}>
            <Text className="text-sm text-gray-500">
              <FaShareAlt />
            </Text>
          </Pressable>
        </View>

        {/* Reference */}
        {showReference && (
          <View className="mt-4 bg-gray-50 rounded-2xl p-4">
            <Text className="text-xs leading-6 text-gray-500 text-center">
              {reference}
            </Text>
          </View>
        )}
      </View>
    );
  }
  function handleThikrClick(item = {}) {
    console.log(item);
  }
  return (
    <>
      <FlatList
        data={adhkar}
        keyExtractor={(item) => item.Text}
        renderItem={({ item }) => (
          <ThikrCard
            reference={item.Reference}
            targetCount={item.Count}
            content={item.Text}

            // refs={item.Reference}
          />
        )}
      />
    </>
  );
}
