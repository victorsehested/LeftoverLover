import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CameraView } from 'expo-camera';

function CameraPostScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PostScreen')} // Navigate to PostScreen
            >
            <Text style={styles.text}>Take a picture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

export default CameraPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 32,
  },
});