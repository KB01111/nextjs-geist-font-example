"use client";

import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme, createTamagui } from "tamagui";
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot, Tabs } from "expo-router";
import { ConvexProvider } from "convex/react";
import { tokens, theme } from "packages/ui/tokens";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HapticsProvider } from "../components/HapticsProvider";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const tamaguiConfig = createTamagui({
  theme,
  tokens,
  // Add other Tamagui config here if needed
});

export default function Layout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    // Handle prefersReducedMotion fallback here if needed
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ConvexProvider client={{ url: "https://your-convex-app-url" }}>
        <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme}>
          <Theme name={colorScheme}>
            <SafeAreaProvider>
              <HapticsProvider>
                <Tabs
                  screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: tokens.colors.primary,
                    tabBarInactiveTintColor: tokens.colors.gray,
                    tabBarStyle: { backgroundColor: tokens.colors.background },
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarHideOnKeyboard: true,
                  }}
                >
                  <Tabs.Screen name="(dashboard)/index" options={{ title: "Dashboard" }} />
                  <Tabs.Screen name="(knowledge)/index" options={{ title: "Knowledge" }} />
                  <Tabs.Screen name="(documents)/[id]" options={{ title: "Documents" }} />
                  <Tabs.Screen name="(agents)/index" options={{ title: "Agents" }} />
                  <Tabs.Screen name="(workflows)/index" options={{ title: "Workflows" }} />
                  <Tabs.Screen name="(settings)/index" options={{ title: "Settings" }} />
                </Tabs>
                <Slot />
              </HapticsProvider>
            </SafeAreaProvider>
          </Theme>
        </TamaguiProvider>
      </ConvexProvider>
    </GestureHandlerRootView>
  );
}
