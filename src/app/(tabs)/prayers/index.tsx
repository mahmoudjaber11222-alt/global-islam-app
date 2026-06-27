import countries from '@/assets/Static Data/countries.json';
import Select from '@/src/components/Select';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { getLocation } from '../../../service/Location';

export default function Prayers() {
  const [granted, setGranted] = useState<
    Location.LocationObject | null | false
  >(null);
  const [countrySelected, setCountrySelected] = useState<boolean | null>(null);
  const [value, setValue] = useState<string>('');
  const [cityValue, setCityValue] = useState('');
  const [error, setError] = useState<string>('');
  async function handleLocationServiceDisabled() {
    // request enabling it .
  }
  useEffect(() => {
    async function se() {
      requestLocation();
    }
    se();
  }, []);
  useEffect(() => {
    console.log(error);
  }, [error]);

  function onChange(item: string): void {
    setValue(item);
    setCountrySelected(true);
  }
  function onCityChange(item: string) {
    setCityValue(item);
  }
  async function requestLocation() {
    try {
      const result = await getLocation();
      console.log(result);
      if (!result.ok) {
        throw new Error(result.error);
      }
      setGranted(result.location);
    } catch (err: any) {
      console.log(err);
      setError(err.message);
      setGranted(false);
    }
  }
  return (
    <View className="w-full h-full px-4 flex flex-col gap-4  ">
      <View className="w-full bg-green-600 h-full">
        <Text>Prayer List</Text>
        {granted === false && (
          <>
            <View className="relative ">
              <Select
                options={countries}
                onChange={onChange}
                value={value}
                label="Select country"
              />
            </View>
            {countrySelected && (
              <View className="">
                <Select
                  options={[]}
                  onChange={onCityChange}
                  value={cityValue}
                  label="Select city"
                />
              </View>
            )}
          </>
        )}
        <Pressable
          onPress={requestLocation}
          className="bg-emerald-600 rounded-xl py-3 px-5 items-center active:opacity-80"
        >
          <Text className="text-white font-semibold text-base">
            Get Location Again
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
