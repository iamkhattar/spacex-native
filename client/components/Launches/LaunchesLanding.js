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
import LaunchSuccessCard from "./LaunchSuccessCard";
import LaunchFailCard from "./LaunchFailCard";

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

const LaunchesLanding = () => {
  useEffect(() => {}, []);
  const [selectedCard, setSelectedCard] = useState("");
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

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
              if (currentLaunch.launch_success) {
                return (
                  <TouchableOpacity
                    style={styles.cardStyle}
                    key={currentLaunch.mission_flight_number}
                  >
                    <View style={styles.cardHeader}>
                      <View style={styles.patchWrapperSuccess}>
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
              } else {
                return (
                  <TouchableOpacity
                    style={styles.cardStyle}
                    key={currentLaunch.mission_flight_number}
                  >
                    <View style={styles.cardHeader}>
                      <View style={styles.patchWrapperFail}>
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
              }
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
