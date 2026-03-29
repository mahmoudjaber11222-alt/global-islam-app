import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className={'w-full h-80 flex justify-center items-center bg-red-700'}>
      <Text className={'text-white '}>Add a new screen reader.</Text>
    </View>
  );
}
