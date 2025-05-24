import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import PostScreencreen from './PostScreen';
import Knap from '../components/Knap'; 
import { Ionicons } from '@expo/vector-icons';


function CameraPostScreen({ navigation }) {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const photoRef = useRef(null);
  const [permissionResponse, requestMediaPermission] = MediaLibrary.usePermissions();

  async function handlePermissions() {
    if(permissionResponse.status !== 'granted') {
      await requestMediaPermission();
    } if (!permission.granted) {
      await requestPermission();
    }
  }

  if (!permission || !permissionResponse) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={handlePermissions} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
    console.log('Camera facing:', facing);
  }

  async function handleTakePhoto() {
    const photo = photoRef.current?.takePictureAsync();
    console.log(photo);
    await MediaLibrary.saveToLibraryAsync(photo.uri);
  }

  return (
    <View style={styles.container}>
      
      <CameraView style={styles.camera} facing={facing} ref={photoRef}>
        <Text style={styles.message}>Take a picture of your food</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.flipButton]}
            onPress={toggleCameraFacing}
          >
            <Ionicons name="camera-reverse-outline" size={28} color="#fff" />
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.captureButton]}
            onPress={() => {
              navigation.navigate('PostScreen');
              handleTakePhoto();
            }}
          >
            <Ionicons name="camera-outline" size={28} color="#fff" />
            <Text style={styles.text}>Capture</Text>
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
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 50,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
