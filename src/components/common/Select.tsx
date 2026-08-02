import { Ionicons } from '@expo/vector-icons';
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

        <Ionicons name="chevron-down" size={16} color="#6b7280" />
      </Pressable>

      {/* Dropdown Modal */}
      <Modal visible={open} transparent animationType="fade">
        <Pressable
          className="flex-1 bg-black/40 justify-center px-6"
          onPress={() => setOpen(false)}
        >
          <View className="bg-white rounded-2xl max-h-80 overflow-hidden">
            {options.length === 0 ? (
              <View className="px-4 py-6 items-center">
                <Text className="text-gray-400 text-center">
                  No options available
                </Text>
              </View>
            ) : (
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
                          active
                            ? 'text-blue-600 font-semibold'
                            : 'text-gray-700'
                        }`}
                      >
                        {item.label}
                      </Text>

                      {active ? (
                        <Ionicons name="checkmark" size={16} color="#2563eb" />
                      ) : null}
                    </Pressable>
                  );
                }}
              />
            )}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
