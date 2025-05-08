import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Login Screen!</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()} // Navigate back to the previous screen
      />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});