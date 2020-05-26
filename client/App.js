import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import BottomTab from "./navigation/tab-navigator/BottomTab";

import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <BottomTab />
        </SafeAreaView>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E24",
  },
});
