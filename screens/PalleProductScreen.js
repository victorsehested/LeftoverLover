import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import Rating from "../components/Rating";
import Knap from "../components/Knap";

export default function PalleProductScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileRow}>
        <Image
          source={{ uri: "https://www.fck.dk/sites/default/files/styles/article_full/public/media/migrate/2013/pallepredak.jpg?itok=j57uWrf5  " }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Palle Plankeværk</Text>
          <Rating rating={1} />
          <Knap indhold="See profile" NavigateTo="Home" tabParent="MainTabs" />
        </View>
      </View>
      <Text style={styles.productTitle}>3 Apples</Text>
      <Text style={styles.label}>
        Expiration date: <Text style={styles.labelDate}>Soon</Text>
      </Text>
      <Image
        source={{
          uri: "https://media.newyorker.com/photos/5edea68678f16c53f05b7109/16:9/w_2559,h_1439,c_limit/Rosner-RottenApples.jpg"
        }}
        style={styles.productImage}
      />
      <Text style={styles.pickupLabel}>Pickup:</Text>
      <Text style={styles.pickupValue}>Amagerfælledvej 59</Text>
      
      <Knap indhold="Reserve food" NavigateTo="Home" tabParent="MainTabs"/>
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