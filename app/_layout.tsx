import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useColorScheme } from '@/components/useColorScheme';
import { PaperProvider, useTheme } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import appConfig from '@/app.config';
import { darkTheme, lightTheme } from '@/theme';

import { authStateListener } from '@/firebase-functions/authentication';
import { useRoute } from '@react-navigation/native';

export const queryClient = new QueryClient();
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const theme = useColorScheme() === 'dark' ? darkTheme : lightTheme; // Automatically use the right theme based on device settings

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <RootLayoutNav />
      </PaperProvider>
    </QueryClientProvider>
  );
}

function RootLayoutNav() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const currentRoute = usePathname();
  const theme = useTheme();
  useEffect(() => authStateListener(setIsLoading), []);

  return (
    <Stack
      initialRouteName="(tabs)"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTitleStyle: { color: theme.colors.onBackground },
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        options={{ presentation: 'modal', title: 'Continue with E-mail' }}
      />
      <Stack.Screen
        name="register"
        options={{
          presentation: 'modal',
          title: 'Create Account',
        }}
      />
    </Stack>
  );
}

AppRegistry.registerComponent(appConfig.expo.name, () => RootLayout);
