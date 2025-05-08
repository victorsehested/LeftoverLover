import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import PostScreencreen from './PostScreen';
import Knap from '../components/Knap'; 



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
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              navigation.navigate('PostScreen');
              handleTakePhoto();
            }}
          >
            <Text style={styles.text}>Take Picture</Text>
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
