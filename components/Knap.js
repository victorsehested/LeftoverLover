import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

export default function Knap({indhold}) {
  return (
    <View style={styles.buttonRow}>
      <Pressable style={styles.pressableButton}>
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
