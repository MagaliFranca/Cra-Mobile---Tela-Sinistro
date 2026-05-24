import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="cycle" options={{ headerShown: false }} />
      <Stack.Screen name="sinistro" options={{ headerShown: false }} />
    </Stack>
  );
}