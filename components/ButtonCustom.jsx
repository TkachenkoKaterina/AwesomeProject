import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export const ButtonCustom = ({ text, style, onPress }) => {
  const onPressFunction = () => {
    console.log('Pressed');
  };
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    gap: 12,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 'normal',
  },
});
