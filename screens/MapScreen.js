import React from "react";
import { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet, Image, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import Favicon from "../assets/favicon.png";
import MapMarkers from "../components/MapMarkers";
import { useNavigation } from "@react-navigation/native";

import PaprikaProductScreen from "./PaprikaProductScreen";

function MapScreen({ navigation }) {
  const [errorMsg, setErrorMsg] = useState(null);

  // Requesting location permissions
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

  // Getting the user's current location
  const CAPITAL_REGION = {
    latitude: 55.6600747398742,
    longitude: 12.590989334477465,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  // Coordinates for the various posts
  const LARS = {
    latitude: 55.6606334,
    longitude: 12.5898479,
  };
  const PALLE = {
    latitude: 55.6604785,
    longitude: 12.5939628,
  };
  const ULRIK = {
    latitude: 55.6582591,
    longitude: 12.5906724,
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
    
        <MapMarkers
          coords={ULRIK}
          navn="Ulrik Wilbek"
          desc="Milk & Spring onions"
          NavigateTo="UlrikProductScreen"
        />
        <MapMarkers
          coords={LARS}
          navn="Lars Wahlberg"
          desc="Beef"
          NavigateTo="LarsProductScreen"
        />
        <MapMarkers
          coords={PALLE}
          navn="Palle Plankeværk"
          desc="Apple"
          NavigateTo="PalleProductScreen"
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
