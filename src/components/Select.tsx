import React, { useState } from 'react';
import { FlatList, Modal, Pressable, Text, View } from 'react-native';

type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export default function Select({
  label = 'Select',
  value,
  options,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);

  const selectedLabel =
    options.find((o) => o.value === value)?.label || 'Select...';

  return (
    <View className="w-full">
      {/* Label */}
      <Text className="text-gray-600 mb-1 text-sm">{label}</Text>

      {/* Select Box */}
      <Pressable
        onPress={() => setOpen(true)}
        className="border border-gray-300 rounded-xl px-4 py-3 bg-white flex-row justify-between items-center"
      >
        <Text className={`${value ? 'text-black' : 'text-gray-400'}`}>
          {selectedLabel}
        </Text>

        <Text className="text-gray-500">▼</Text>
      </Pressable>

      {/* Dropdown Modal */}
      <Modal visible={open} transparent animationType="fade">
        <Pressable
          className="flex-1 bg-black/40 justify-center px-6"
          onPress={() => setOpen(false)}
        >
          <View className="bg-white rounded-2xl max-h-80 overflow-hidden">
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => {
                const active = item.value === value;

                return (
                  <Pressable
                    onPress={() => {
                      onChange(item.value);
                      setOpen(false);
                    }}
                    className={`px-4 py-3 flex-row justify-between items-center ${
                      active ? 'bg-blue-50' : ''
                    }`}
                  >
                    <Text
                      className={`${
                        active ? 'text-blue-600 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                    </Text>

                    {active && <Text className="text-blue-600">✓</Text>}
                  </Pressable>
                );
              }}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
