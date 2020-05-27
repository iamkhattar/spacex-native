import React, { useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const Rocket = ({ route, navigation }) => {
  const { rocket_id } = route.params;

  const ROCKET_QUERY = gql`
    {
      rocket(rocket_id: ${JSON.stringify(rocket_id)}) {
        rocket_name
        rocket_type
        first_flight
        description
        wikipedia
      }
    }
  `;
  const { loading, error, data } = useQuery(ROCKET_QUERY);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logoStyle}
          source={require("../../assets/spacex-logo.png")}
        />
      </View>
      <View style={styles.contentWrapper}>
        {!error && !loading && (
          <View style={styles.scrollViewWrapper}>
            <View style={styles.cardStyle}>
              <View style={styles.cardHeader}>
                <View style={styles.patchWrapper}>
                  <Image
                    style={styles.cardImageStyle}
                    source={require("../../assets/spacex-logo-black.png")}
                  />
                </View>
              </View>
              <View style={styles.cardFooter}>
                <Text style={styles.cardFooterTopText}>
                  {data.rocket.rocket_name}
                </Text>
                <Text style={styles.cardFooterBottomText}>
                  {new Date(data.rocket.first_flight).getFullYear()}
                </Text>
              </View>
              <View style={styles.descriptionWrapper}>
                <Text style={styles.descriptionText}>
                  {data.rocket.description}
                </Text>
              </View>
              <View style={styles.linksWrapper}>
                <TouchableOpacity
                  style={styles.wikipediaWrapper}
                  onPress={() => Linking.openURL(data.rocket.wikipedia)}
                >
                  <Image
                    style={styles.linkLogoStyle}
                    source={require("../../assets/wikipedia-logo.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
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
    borderBottomWidth: 2,
    borderColor: "#3A3A3F",
  },
  cardImageStyle: {
    width: 125,
    height: 125,
    resizeMode: "contain",
  },
  cardHeader: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  cardFooter: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 15,
  },
  cardFooterTopText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  cardFooterBottomText: {
    color: "white",
    fontSize: 15,
  },
  cardFooterCostText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  patchWrapper: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 255,
    borderColor: "grey",
    borderWidth: 5,
  },
  linksWrapper: {
    flex: 2,
    padding: 5,
    paddingBottom: 10,
  },
  youtubeWrapper: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  wikipediaWrapper: {
    flex: 1,
  },
  linkLogoStyle: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  descriptionText: {
    color: "white",
    fontSize: 14,
    textAlign: "justify",
  },
  descriptionWrapper: {
    flex: 2,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Rocket;
