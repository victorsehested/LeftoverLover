import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Rating from "../components/Rating";
import Knap from "../components/Knap";

export default function PaprikaProductTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileRow}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/2.jpg" }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Paprika Solstråle</Text>
          <Rating rating={4} />
          <Knap indhold="See profile" NavigateTo="Profile" tabParent="MainTabs" />
        </View>
      </View>
      <Text style={styles.productTitle}>Birthday Cake</Text>
      <Text style={styles.label}>
        Expiration date: <Text style={styles.labelDate}>12/5/2025</Text>
      </Text>
      <Image
        source={{
          uri: "https://lepetitartichaut.wordpress.com/wp-content/uploads/2012/09/cut-the-cake.jpg"
        }}
        style={styles.productImage}
      />
      <Text style={styles.pickupLabel}>Pickup:</Text>
      <Text style={styles.pickupValue}>Amagerbrogade 12</Text>
      
      <TouchableOpacity style={styles.reserveButton} disabled={true}>
        <Text style={styles.reserveButtonText}>Reserve</Text>
      </TouchableOpacity>
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
    //backgroundColor: "#2563eb",
    backgroundColor: "#d0d5dd",
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