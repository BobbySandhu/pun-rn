import { Stack, useGlobalSearchParams } from 'expo-router';

export default function RootLayout() {
  const global = useGlobalSearchParams();

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, headerTitle: 'Jokes' }}
      />
      <Stack.Screen
        name="screens/categoryjokelist"
        options={{ headerTitle: global.headerTitle }}
      />
    </Stack>
  );
}
