import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const CameraFrame = ({ preview, setPreview }) => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] =
    MediaLibrary.usePermissions();
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    }

    if (!mediaPermission || !mediaPermission.granted) {
      requestMediaPermission();
    }
  }, [permission, mediaPermission]);

  if (!permission || !mediaPermission) {
    return <View />;
  }

  const takePicture = async () => {
    if (preview) {
      setPreview(null);
    }

    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.saveToLibraryAsync(uri);
      setPreview(uri);
    }
  };

  return (
    <TouchableOpacity onPress={takePicture} style={styles.downloadPhotoBtn}>
      {preview ? (
        <View style={styles.preview}>
          <View style={styles.containerCameraIcon}>
            <FontAwesome5 name="camera" size={24} color="#BDBDBD" />
          </View>
          <Image
            source={{ uri: preview }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 8,
            }}
          />
        </View>
      ) : (
        <CameraView style={styles.camera} facing={facing} ref={setCameraRef}>
          <View style={styles.containerCameraIcon}>
            <FontAwesome5 name="camera" size={24} color="#BDBDBD" />
          </View>
        </CameraView>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  downloadPhotoBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 240,
    marginBottom: 8,
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    overflow: 'hidden',
  },
  preview: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  containerCameraIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -30 }],
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 30,
  },
  camera: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default CameraFrame;
