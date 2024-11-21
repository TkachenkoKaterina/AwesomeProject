import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const TrashBtn = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log('Trash pressed!')}
    >
      <Feather name="trash-2" size={24} color="rgba(189, 189, 189, 1)" />
    </TouchableOpacity>
  );
};

export default TrashBtn;

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 40,
    borderRadius: 35,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
