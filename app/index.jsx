import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <TouchableOpacity
          onPress={() => router.push('/ble')}
          className="bg-purple-950 px-4 py-3 rounded-lg"
          activeOpacity={0.6}
        >
          <Text className="text-white text-lg">Go to Main</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
