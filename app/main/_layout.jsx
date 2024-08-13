import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerTitle: "Main App",
        headerTintColor: "purple",
        navigationBarColor:"white"
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default MainLayout;
