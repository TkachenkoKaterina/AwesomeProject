import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoadImg from '../components/LoadImg';
import InputForCreatePost from '../components/InputForCreatePost';
import { ButtonCustom } from '../components/ButtonCustom';
import { useNavigation } from '@react-navigation/native';

const CreatePostsScreen = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const navigation = useNavigation();
  const isButtonActive = title && location && image;

  const handlePublish = () => {
    if (isButtonActive) {
      console.log('Post published!');
      navigation.navigate('Posts');
      setImage(null);
      setTitle('');
      setLocation('');
    }
  };

  return (
    <View style={styles.container}>
      <LoadImg image={image} onImageLoad={setImage} />
      <InputForCreatePost
        placeholder="Назва..."
        value={title}
        onChangeText={setTitle}
      />
      <InputForCreatePost
        placeholder="Місцевість..."
        icon="map-pin"
        value={location}
        onChangeText={setLocation}
      />
      <ButtonCustom
        text="Опубліковати"
        onPress={handlePublish}
        style={isButtonActive ? styles.activeButton : styles.inactiveButton}
      />
    </View>
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
  activeButton: {
    backgroundColor: '#FF6C00',
  },
  inactiveButton: {
    backgroundColor: '#E0E0E0',
  },
});
