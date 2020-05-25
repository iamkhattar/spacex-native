import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from "react-native";

const LaunchesLanding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logoStyle}
          source={require("../../assets/spacex-logo.png")}
        />
      </View>
      <View style={styles.contentWrapper}>
        <ScrollView style={styles.scrollViewWrapper}>
          <View style={styles.cardStyle}>
            <Text>Hi</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E24",
  },
  logoWrapper: {
    flex: 1,
  },
  contentWrapper: {
    flex: 6,
  },
  logoStyle: {
    resizeMode: "contain",
    width: "100%",
  },
  scrollViewWrapper: {
    flex: 1,
  },
  cardStyle: {
    flex: 1,
    backgroundColor: "grey",
    margin: 7,
    padding: 5,
    borderRadius: 10,
    height: 250,
  },
});

export default LaunchesLanding;
