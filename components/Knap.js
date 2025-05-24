import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Knap({indhold, navigate, NavigateTo, tabParent}) {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonRow}>
      <Pressable style={styles.pressableButton} onPress={() => {
          if (tabParent) {
            // Tab navigator
            navigation.navigate(tabParent, { screen: NavigateTo });
          } else {
            // Stack screen
            navigation.navigate(NavigateTo);
          }
        }}>
        <Text style={styles.buttonText}>{indhold}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
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
