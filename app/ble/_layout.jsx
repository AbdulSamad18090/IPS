import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const BleLayout = () => {
  return (
    <Stack screenOptions={{ title: "Indoor Positioning", headerTintColor:"purple"}}>
        <Stack.Screen name='index'/>
    </Stack>
  )
}

export default BleLayout