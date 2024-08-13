import React, { useState, useEffect } from "react";
import { View, Text, PermissionsAndroid, Platform, Alert } from "react-native";
import WifiManager from "react-native-wifi-reborn";

const App = () => {
  const [wifiList, setWifiList] = useState([]);
  const [error, setError] = useState(null);

  console.log(WifiManager);

  const loadWifiList = async () => {
    try {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location permission is required for WiFi connections",
            message:
              "This app needs location permission as this is required  " +
              "to scan for wifi networks.",
            buttonNegative: "DENY",
            buttonPositive: "ALLOW",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log(granted === PermissionsAndroid.RESULTS.GRANTED)
        } else {
          setError("Location permission denied");
          return;
        }
      }

      const wifiList = await WifiManager.loadWifiList();
      setWifiList(JSON.parse(wifiList));
    } catch (error) {
      setError(error.message || "Failed to load Wi-Fi list");
    }
  };

  useEffect(() => {
    loadWifiList();
  }, []);

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View>
      {wifiList.length > 0 ? (
        wifiList.map((wifi, index) => (
          <Text key={index}>
            SSID: {wifi.SSID}, BSSID: {wifi.BSSID}, Level: {wifi.level}
          </Text>
        ))
      ) : (
        <Text>No Wi-Fi networks found</Text>
      )}
    </View>
  );
};

export default App;
