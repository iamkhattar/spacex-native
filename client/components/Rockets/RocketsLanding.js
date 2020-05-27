import React, { useEffect } from "react";
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

const ROCKETS_QUERY = gql`
  {
    rockets {
      rocket_id
      rocket_name
      first_flight
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

const RocketsLanding = ({ navigation }) => {
  const { loading, error, data } = useQuery(ROCKETS_QUERY);

  const handleOnPress = (rocket_id) => {
    return navigation.navigate("Rocket", { rocket_id });
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
          {!error &&
            !loading &&
            data.rockets.map((currentRocket) => (
              <TouchableOpacity
                style={styles.cardStyle}
                key={uuidv4()}
                onPress={(e) => handleOnPress(currentRocket.rocket_id)}
              >
                <View style={styles.cardHeader}>
                  <View style={styles.patchWrapper}>
                    <Image
                      style={styles.cardImageStyle}
                      source={require("../../assets/spacex-logo-black.png")}
                    />
                  </View>
                </View>
                <View style={styles.cardFooter}>
                  <View>
                    <Text style={styles.cardFooterTopText}>
                      {currentRocket.rocket_name}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.cardFooterBottomText}>
                      {new Date(currentRocket.first_flight).getFullYear()}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
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
    resizeMode: "contain",
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
  patchWrapper: {
    width: 75,
    height: 75,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 255,
    borderColor: "grey",
    borderWidth: 5,
  },
});

export default RocketsLanding;
