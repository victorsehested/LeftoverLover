import React from "react";
import { View, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

export default function MapMarkers({ coords, navn, desc }) {
  return (
    <Marker coordinate={ coords } title={ navn } description={ desc }>
      <View style={styles.pin}>
        <Ionicons name="heart" size={30} color="green" />
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pin: {
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
  },
});
