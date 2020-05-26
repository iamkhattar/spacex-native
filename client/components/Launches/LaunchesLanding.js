import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import LaunchSuccessCard from "./LaunchSuccessCard";
import LaunchFailCard from "./LaunchFailCard";

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
          <LaunchSuccessCard
            uri="https://images2.imgbox.com/40/e3/GypSkayF_o.png"
            mission_name="FalconSatSuccess"
            mission_year="2008"
          />
          <LaunchFailCard
            uri="https://images2.imgbox.com/40/e3/GypSkayF_o.png"
            mission_name="FalconSatFail"
            mission_year="2008"
          />
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
    borderBottomWidth: 2,
    borderColor: "#3A3A3F",
    paddingBottom: 7,
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
    padding: 5,
    borderRadius: 4,
    height: 100,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#3A3A3F",
  },
  cardImageStyle: {
    width: 50,
    height: 50,
  },
  cardHeader: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  cardFooter: { flex: 5, justifyContent: "center" },
  cardFooterTopText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  cardFooterBottomText: {
    color: "white",
    fontSize: 15,
  },
  patchWrapperSuccess: {
    width: 75,
    height: 75,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 255,
    borderColor: "green",
    borderWidth: 5,
  },
  patchWrapperFail: {
    width: 75,
    height: 75,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 255,
    borderColor: "red",
    borderWidth: 5,
  },
});

export default LaunchesLanding;
