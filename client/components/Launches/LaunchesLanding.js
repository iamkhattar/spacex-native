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
          <TouchableOpacity style={styles.cardStyle}>
            <View style={styles.cardHeader}>
              <View style={styles.patchWrapper}>
                <Image
                  style={styles.cardImageStyle}
                  source={{
                    uri: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
                  }}
                />
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>Falcon 9</Text>
            </View>
          </TouchableOpacity>
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
    margin: 7,
    padding: 5,
    borderRadius: 4,
    height: 100,
    flexDirection: "row",
    borderTopWidth: 2,
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
  cardFooterText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  patchWrapper: {
    width: 75,
    height: 75,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 255,
    borderColor: "green",
    borderWidth: 5,
  },
});

export default LaunchesLanding;
