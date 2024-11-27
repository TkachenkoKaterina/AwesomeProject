import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

import InputForCreatePost from '../components/InputForCreatePost';
import { ButtonCustom } from '../components/ButtonCustom';
import CameraFrame from '../components/CameraFrame';

const CreatePostsScreen = () => {
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [location, setLocation] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const navigation = useNavigation();
  const isButtonActive = name && place && preview;

  const handlePublish = async () => {
    if (isButtonActive) {
      let locationData = null;
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          locationData = await Location.getCurrentPositionAsync({});
        } else {
          setErrorMsg('Permission to access location was denied');
        }
      } catch (error) {
        console.log('Error fetching location:', error);
      }

      console.log('Post published with location:', locationData);
      navigation.navigate('Posts');
      setPreview(null);
      setName('');
      setLocation(locationData);
      setPlace('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <CameraFrame preview={preview} setPreview={setPreview} />
        <Text style={styles.text}>
          {preview ? 'Редагувати фото' : 'Завантажте фото'}
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
        >
          <InputForCreatePost
            placeholder="Назва..."
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <InputForCreatePost
            placeholder="Місцевість..."
            icon="map-pin"
            value={place}
            onChangeText={(text) => setPlace(text)}
          />
          <ButtonCustom
            text="Опубліковати"
            onPress={handlePublish}
            style={isButtonActive ? styles.activeButton : styles.inactiveButton}
          />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
    gap: 32,
  },
  text: {
    marginTop: -24,
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },
  activeButton: {
    marginTop: 32,
    backgroundColor: '#FF6C00',
  },
  inactiveButton: {
    marginTop: 32,
    backgroundColor: '#E0E0E0',
  },
});
