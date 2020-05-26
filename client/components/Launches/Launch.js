import React, { useRef, useState } from "react";
import { SafeAreaView, Image, View, StyleSheet, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const Launch = ({ route, navigation }) => {
  const { flight_number } = route.params;
  const patchWrapperStyle = styles.patchWrapperSuccess;
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logoStyle}
          source={require("../../assets/spacex-logo.png")}
        />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.scrollViewWrapper}>
          <View style={styles.cardStyle}>
            <View style={styles.cardHeader}>
              <View style={patchWrapperStyle}>
                <Image
                  style={styles.cardImageStyle}
                  source={{
                    uri: "https://images2.imgbox.com/2b/8e/MYyHbnd2_o.png",
                  }}
                />
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterTopText}>mission_name</Text>
              <Text style={styles.cardFooterBottomText}>launch_year</Text>
            </View>
            <View style={styles.linksWrapper}>
              <View style={styles.otherLinksWrapper}>
                <View style={styles.wikipediaWrapper}>
                  <Image
                    style={styles.linkLogoStyle}
                    source={require("../../assets/wikipedia-logo.png")}
                  />
                </View>
                <View style={styles.articleWrapper}>
                  <Image
                    style={styles.linkLogoStyle}
                    source={require("../../assets/article-logo.png")}
                  />
                </View>
              </View>
              <View style={styles.youtubeWrapper}>
                <YoutubePlayer
                  ref={playerRef}
                  height={"100%"}
                  width={"100%"}
                  videoId={"AVAc1gYLZK0"}
                  play={playing}
                  volume={50}
                  playbackRate={1}
                  playerParams={{
                    cc_lang_pref: "us",
                    showClosedCaptions: true,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
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
  },
  cardHeader: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  cardFooter: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
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
    width: 150,
    height: 150,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 255,
    borderColor: "green",
    borderWidth: 5,
  },
  patchWrapperFail: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 255,
    borderColor: "red",
    borderWidth: 5,
  },
  linksWrapper: {
    flex: 4,
    padding: 5,
    paddingBottom: 10,
  },
  youtubeWrapper: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  otherLinksWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  wikipediaWrapper: {
    flex: 1,
  },
  articleWrapper: {
    flex: 1,
  },
  linkLogoStyle: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
export default Launch;
