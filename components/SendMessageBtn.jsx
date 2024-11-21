import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';

const SendMessageBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      // onPress={() => navigation.navigate('createPosts')}
    >
      <Feather name="arrow-up" size={24} color="#FFF" />
    </TouchableOpacity>
  );
};

export default SendMessageBtn;

const styles = StyleSheet.create({
  button: {
    width: 34,
    height: 34,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
