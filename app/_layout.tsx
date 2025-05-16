import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();



export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Lucky: require('../assets/fonts/LuckiestGuy-Regular.ttf'),
    Poppins: require('../assets/fonts/Poppins-Regular.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <ThemeProvider value={DefaultTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(stacks)" />
          </Stack>
        <StatusBar hidden={false}/>
        <StatusBar translucent={true}/>
        <StatusBar backgroundColor='#1e4b6e'/>
        {/* <StatusBar style='inverted'/> */}
        
      </ThemeProvider>
  );
}

//colorScheme === 'dark' ? DarkTheme : 