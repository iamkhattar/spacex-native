import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import BottomTab from "./navigation/tab-navigator/BottomTab";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <BottomTab />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E24",
  },
});
