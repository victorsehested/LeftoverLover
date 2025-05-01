import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import Rating from "../components/Rating";
import Knap from "../components/Knap";

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/2.jpg" }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Paprika Solstråle</Text>
        <Rating rating={4} />
      </View>

      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
        My Food Posts
      </Text>
      <Card
        title="Banana"
        expiryDate="6/7/1928"
        imageUrl={
          "https://akamai.vgc.no/v2/images/e43f54e7-7777-4cb8-8efa-c1b9eeea3fda?format=auto&w=720&s=37267fa0026033c583469ca44bbe736867a5b1f8"
        }
      />
      <Card
        title="Bithday cake"
        expiryDate="12/5/2025"
        imageUrl={
          "https://lepetitartichaut.wordpress.com/wp-content/uploads/2012/09/cut-the-cake.jpg"
        }
      />
    {/* styling og function mangler */}
      <Knap indhold="jasbd" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  profileSubtitle: {
    fontSize: 14,
    color: "#6B7280", // Gray color
    marginBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3B82F6", // Blue background
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default ProfileScreen;
