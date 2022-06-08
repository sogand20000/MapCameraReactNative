import React, {useRef, useEffect} from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import RNFetchBlob from 'rn-fetch-blob';

const PhotoScreen = () => {
  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    console.log('cameraPermission: ', cameraPermission);

    if (cameraPermission !== 'authorized') {
      const newCameraPermission = await Camera.requestCameraPermission();
      console.log('newCameraPermission: ', newCameraPermission);
    }
  };

  const camera = useRef<Camera>(null);

  const photo = async () => {
    const photoData = await camera?.current?.takePhoto({
      flash: 'on',
    });
    const path = `${RNFetchBlob.fs.dirs.CacheDir}/text.png`;
    console.log('photoData: ', path);
    try {
      RNFetchBlob.fs.writeFile(path, photoData.path);
    } catch (er) {
      console.log(er);
    }
  };

  const snapshot = async () => {
    const snapshotData = await camera.current.takeSnapshot({
      quality: 85,
      skipMetadata: true,
    });
    console.log('snapshotData: ', snapshotData);
  };
  const devices = useCameraDevices();
  const device = devices.back;
  if (device == null)
    return (
      <View>
        <Text>ggg</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />

      <TouchableOpacity onPress={() => photo()}>
        <Text>Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => snapshot()}>
        <Text>Snap</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PhotoScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
