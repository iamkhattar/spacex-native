import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const LaunchSuccessCard = ({
  uri,
  mission_name,
  mission_year,
  setSelectedCard,
}) => {
  return (
    <TouchableOpacity
      style={styles.cardStyle}
      onPress={() => setSelectedCard("S")}
    >
      <View style={styles.cardHeader}>
        <View style={styles.patchWrapper}>
          <Image
            style={styles.cardImageStyle}
            source={{
              uri,
            }}
          />
        </View>
      </View>
      <View style={styles.cardFooter}>
        <View>
          <Text style={styles.cardFooterTopText}>{mission_name}</Text>
        </View>
        <View>
          <Text style={styles.cardFooterBottomText}>{mission_year}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default LaunchSuccessCard;
