import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function MapMarkers({ coords, navn, desc, navigate, NavigateTo, }) {
  const navigation = useNavigation();
  return (
    <Marker coordinate={ coords } title={ navn } description={ desc }>
      <Pressable style={styles.pin} onPress={() => {
          navigation.navigate(NavigateTo); 
        }}>
        <Ionicons name="heart" size={30} color="green" />
      </Pressable>
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
