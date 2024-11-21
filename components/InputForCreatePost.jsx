import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const InputForCreatePost = ({ icon, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Feather name={icon} size={24} color="#BDBDBD" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputForCreatePost;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    paddingVertical: 16,
    gap: 4,
  },
  icon: {
    strokeWidth: 1,
  },
  input: {
    padding: 0,
    flex: 1,
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
  },
});
