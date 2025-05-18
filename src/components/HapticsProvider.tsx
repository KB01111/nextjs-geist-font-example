"use client";

import React, { createContext, useContext } from "react";
import * as Haptics from "expo-haptics";

const HapticsContext = createContext({
  impactLight: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
  impactMedium: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
  impactHeavy: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy),
  notificationSuccess: () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success),
  notificationError: () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error),
});

export const HapticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <HapticsContext.Provider value={{
    impactLight: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
    impactMedium: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
    impactHeavy: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy),
    notificationSuccess: () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success),
    notificationError: () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error),
  }}>
    {children}
  </HapticsContext.Provider>;
};

export const useHaptics = () => useContext(HapticsContext);
