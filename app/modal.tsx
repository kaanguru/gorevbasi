import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Text } from 'react-native';

export default function Modal() {
  return (
    <>
      <Text>Modal</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
