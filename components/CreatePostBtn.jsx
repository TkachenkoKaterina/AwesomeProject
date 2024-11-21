import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const CreatePostBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('createPosts')}
    >
      <AntDesign name="plus" size={24} color="#FFFFFF" />
    </TouchableOpacity>
  );
};

export default CreatePostBtn;

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 40,
    borderRadius: 35,
    backgroundColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
