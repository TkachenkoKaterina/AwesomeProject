import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const LoadImg = ({ image, onImageLoad }) => {
  const [internalImage, setInternalImage] = useState(image);

  useEffect(() => {
    setInternalImage(image);
  }, [image]);

  const onLoadImg = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Permission to access gallery is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setInternalImage(imageUri);
      onImageLoad(imageUri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleCameraFacing}
        style={styles.imgContainer}
      >
        {image ? (
          <Image source={{ uri: image }} style={styles.img} />
        ) : (
          <FontAwesome5 name="camera" size={24} color="black" />
        )}
      </TouchableOpacity>
      <Text style={styles.text}>
        {image ? 'Редагувати фото' : 'Завантажте фото'}
      </Text>
    </View>
  );
};

export default LoadImg;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    resizeMode: 'cover',
  },
  imgContainer: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 8,
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },
});
