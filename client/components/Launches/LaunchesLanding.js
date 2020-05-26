import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LAUNCHES_QUERY = gql`
  {
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
      links {
        mission_patch_small
      }
    }
  }
`;

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const LaunchesLanding = ({ navigation }) => {
  useEffect(() => {}, []);
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  const handleOnPress = (flight_number) => {
    return navigation.navigate("Launch", { flight_number });
  };

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
          {!loading &&
            !error &&
            data.launches.map((currentLaunch) => {
              const patchWrapperStyle = currentLaunch.launch_success
                ? styles.patchWrapperSuccess
                : styles.patchWrapperFail;
              return (
                <TouchableOpacity
                  style={styles.cardStyle}
                  key={uuidv4()}
                  onPress={(e) => handleOnPress(currentLaunch.flight_number)}
                >
                  <View style={styles.cardHeader}>
                    <View style={patchWrapperStyle}>
                      {currentLaunch.links.mission_patch_small && (
                        <Image
                          style={styles.cardImageStyle}
                          source={{
                            uri: currentLaunch.links.mission_patch_small,
                          }}
                        />
                      )}
                    </View>
                  </View>
                  <View style={styles.cardFooter}>
                    <View>
                      <Text style={styles.cardFooterTopText}>
                        {currentLaunch.mission_name}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.cardFooterBottomText}>
                        {currentLaunch.launch_year}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
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
