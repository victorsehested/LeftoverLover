import React from "react";
import { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet, Image, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import Favicon from "../assets/favicon.png";
import MapMarkers from "../components/MapMarkers";

function MapScreen({ navigation }) {
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function handleRequestPermission() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    }
    handleRequestPermission();
  }, []);

  const CAPITAL_REGION = {
    latitude: 55.6600747398742,
    longitude: 12.590989334477465,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const ITU = {
    latitude: 55.6600747398742,
    longitude: 12.590989334477465,
  };
  const PAPRIKA = {
    latitude: 55.6606334,
    longitude: 12.5898479,
  };
  const ULRIK = {
    latitude: 55.662011,
    longitude: 12.5951199,
  };
  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={CAPITAL_REGION}
        showsUserLocation={true}
      >
        <Marker
          coordinate={ITU}
          title="ITU"
          description="International IT University"
          onPress={() => {
            Alert.alert(
              "ITU", // Title of the alert
              "International IT University", // Message of the alert
              [
                { text: "OK", onPress: () => console.log("OK Pressed") }, // Button
              ]
            );
          }}
        />

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Ionicons name="heart" size={30} color="green" />
        </View>

        <MapMarkers
          coords={ULRIK}
          navn="Ulrik Wilbek"
          desc="Mælk, Laks, forårsløg"
        />
        <MapMarkers
          coords={PAPRIKA}
          navn="Paprika Solstråle"
          desc="Bananer, Oksekød, Yoghurt"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
