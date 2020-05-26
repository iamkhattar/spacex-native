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

import YoutubePlayer from "react-native-youtube-iframe";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const Launch = ({ route, navigation }) => {
  const { flight_number } = route.params;

  const LAUNCH_QUERY = gql`
  {
    launch(flight_number: ${flight_number}) {
      mission_name
      launch_year
      launch_success
      links {
        mission_patch_small
        wikipedia
        article_link
        youtube_id
      }
    }
  }
`;

  const { loading, error, data } = useQuery(LAUNCH_QUERY);

  // Youtube Related States
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
      {!loading && !error && (
        <View style={styles.contentWrapper}>
          <View style={styles.scrollViewWrapper}>
            <View style={styles.cardStyle}>
              <View style={styles.cardHeader}>
                <View
                  style={
                    data.launch.launch_success
                      ? styles.patchWrapperSuccess
                      : styles.patchWrapperFail
                  }
                >
                  {data.launch.links.mission_patch_small === null ? (
                    <Image
                      style={styles.cardImageStyle}
                      source={require("../../assets/spacex-logo-black.png")}
                    />
                  ) : (
                    <Image
                      style={styles.cardImageStyle}
                      source={{
                        uri: data.launch.links.mission_patch_small,
                      }}
                    />
                  )}
                </View>
              </View>
              <View style={styles.cardFooter}>
                <Text style={styles.cardFooterTopText}>
                  {data.launch.mission_name}
                </Text>
                <Text style={styles.cardFooterBottomText}>
                  {data.launch.launch_year}
                </Text>
              </View>
              <View style={styles.linksWrapper}>
                <View style={styles.otherLinksWrapper}>
                  <TouchableOpacity
                    style={styles.wikipediaWrapper}
                    onPress={() => Linking.openURL(data.launch.links.wikipedia)}
                  >
                    <Image
                      style={styles.linkLogoStyle}
                      source={require("../../assets/wikipedia-logo.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.articleWrapper}
                    onPress={() =>
                      Linking.openURL(data.launch.links.article_link)
                    }
                  >
                    <Image
                      style={styles.linkLogoStyle}
                      source={require("../../assets/article-logo.png")}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.youtubeWrapper}>
                  <YoutubePlayer
                    style={styles.playerStyle}
                    ref={playerRef}
                    height={"95%"}
                    width={"95%"}
                    videoId={data.launch.links.youtube_id}
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
      )}
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
  playerStyle: {
    flex: 1,
    alignSelf: "center",
  },
});
export default Launch;
