import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Rating from "../components/Rating";
import Knap from "../components/Knap";

export default function LarsProductScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileRow}>
        <Image
          source={{ uri: "https://i.imgur.com/AmdFgdX.jpeg" }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Lars Wahlberg</Text>
          <Rating rating={5} />
          <Knap indhold="See profile" NavigateTo="Home" tabParent="MainTabs"/>
        </View>
      </View>
      <Text style={styles.productTitle}>Beef</Text>
      <Text style={styles.label}>
        Expiration date: <Text style={styles.labelDate}>6/7/2026</Text>
      </Text>
      <Image
        source={{
          uri: "https://www.aforkstale.com/wp-content/uploads/wagyu-steak-2.jpg"
        }}
        style={styles.productImage}
      />
      <Text style={styles.pickupLabel}>Pickup:</Text>
      <Text style={styles.pickupValue}>Tietgenkollegiet</Text>
      
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