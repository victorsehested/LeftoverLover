import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Rating from "../components/Rating";
import Knap from "../components/Knap";
import MapScreen from "./MapScreen";

export default function UlrikProductScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileRow}>
        <Image
          source={{ uri: "https://res.cloudinary.com/youandx/image/upload/c_fill,g_auto,w_800,h_450/Ulrik-Wilbek-Realmaeglerne-foredrag-foto-af-Nicolai-Vesthammer-2018-1632_1632418881960.jpg" }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Ulrik Wilbek</Text>
          <Rating rating={3} />
          <Knap indhold="See profile" NavigateTo="MapScreen" tabParent="MainTabs"/>
        </View>
      </View>
      <Text style={styles.productTitle}>Spring onion pancakes</Text>
      <Text style={styles.label}>
        Expiration date: <Text style={styles.labelDate}>30/5/2025</Text>
      </Text>
      <Image
        source={{
          uri: "https://i.ytimg.com/vi/VLB_TJLDbVk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCIp97-RzOLKqvePhXkQSRPj6Xzng"
        }}
        style={styles.productImage}
      />
      <Text style={styles.pickupLabel}>Pickup:</Text>
      <Text style={styles.pickupValue}>DR Byen</Text>
      
      {/* <TouchableOpacity style={styles.reserveButton}>
        <Text style={styles.reserveButtonText}>Reserve</Text>
      </TouchableOpacity> */}
      <Knap indhold="Reserve food" NavigateTo="Home" tabParent="MainTabs" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 28,
    paddingTop: 40,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 14,
  },
  profileInfo: {
    justifyContent: "left",
    alignItems: "flex-start",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  productTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4B5563",
    marginVertical: 18,
  },
  label: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 10,
  },
  labelDate: {
    fontWeight: "bold",
    color: "#374151",
  },
  productImage: {
    width: "100%",
    height: 180,
    borderRadius: 18,
    marginBottom: 28,
    marginTop: 8,
    resizeMode: "cover",
  },
  pickupLabel: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4B5563",
    marginTop: 10,
    marginBottom: 2,
  },
  pickupValue: {
    fontSize: 18,
    color: "#4B5563",
    marginBottom: 30,
  },
  reserveButton: {
    backgroundColor: "#2563eb",
    //backgroundColor: "#d0d5dd",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  reserveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});