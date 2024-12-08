import { Stack } from 'expo-router';
import { Text } from 'react-native';
import { Container } from '~/components/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Text>drawer index home</Text>
      </Container>
    </>
  );
}
