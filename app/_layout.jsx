import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Home from "./index";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarColor: "black",
        navigationBarHidden: true,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
