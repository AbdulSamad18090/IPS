import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Accelerometer, Gyroscope } from "expo-sensors";

const MainApp = () => {
  const [accelerometerData, setAccelerometerData] = useState({});
  const [gyroscopeData, setGyroscopeData] = useState({});
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const accelerometerSubscription = Accelerometer.addListener((data) => {
      setAccelerometerData(data);

      // Calculate new position based on accelerometer data
      setPosition((prevPosition) => ({
        x: prevPosition.x + data.x * 10, // Adjust the multiplier to control sensitivity
        y: prevPosition.y + data.y * 10,
      }));
    });

    Accelerometer.setUpdateInterval(100); // Update every 100ms

    return () => {
      accelerometerSubscription && accelerometerSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.dot,
          {
            transform: [
              { translateX: position.x },
              { translateY: position.y },
            ],
          },
        ]}
      />
      <View style={styles.dataContainer}>
        <Text>Accelerometer Data</Text>
        <Text>x: {accelerometerData.x?.toFixed(2)}</Text>
        <Text>y: {accelerometerData.y?.toFixed(2)}</Text>
        <Text>z: {accelerometerData.z?.toFixed(2)}</Text>
        <Text>Gyroscope Data</Text>
        <Text>x: {gyroscopeData.x?.toFixed(2)}</Text>
        <Text>y: {gyroscopeData.y?.toFixed(2)}</Text>
        <Text>z: {gyroscopeData.z?.toFixed(2)}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "red",
    position: "absolute",
  },
  dataContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
});

export default MainApp;
