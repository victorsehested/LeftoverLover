import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapScreen from "./MapScreen";
import Knap from "../components/Knap";


export default function PostScreen({ navigation }) {
  const [expirationDate, setExpirationDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePost = () => {
    console.log("Opret opslag med data:", {
      expirationDate,
      location,
      description,
    });
    // Her kan du fx navigere tilbage eller sende data til en server.
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Opret nyt opslag</Text>
      </View>

      {/* Indholdssektion med ScrollView, hvis der er meget indhold */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.inputSection}>
          <Image
            source={require("../assets/oksekødPic.webp")}
            style={{ width: 250, height: 200 }}
          />
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.label}>Food expiration date</Text>
          <TextInput
            style={styles.input}
            placeholder="dd/mm/yyyy"
            value={expirationDate}
            onChangeText={setExpirationDate}
          />
        </View>

        {/* Skal måske slettes og erstattes af at den vælger din lokation */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>Pickup location</Text>
          <TextInput
            style={styles.input}
            placeholder="Indtast lokation"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <View style={[styles.inputSection, styles.descriptionSection]}>
          <Text style={styles.label}>Write a short description</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Kort beskrivelse..."
            multiline
            value={description}
            onChangeText={setDescription}
          />
        </View>
      </ScrollView>


      <Knap indhold="Create Post" NavigateTo="Home" tabParent="MainTabs"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    margin: 10,
  },
  header: {
    alignItems: "center",
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  contentContainer: {
    paddingVertical: 12,
  },
  inputSection: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
  },
  descriptionSection: {
    flex: 1,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    height: 100,
    textAlignVertical: "top",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
  },
  pressableButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
