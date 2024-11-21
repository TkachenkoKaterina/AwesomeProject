import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const AvatarBlock = ({ name, email, img }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../assets/images/dogyAvatar.jpg')}
      ></Image>
      <View style={styles.containerAvatarText}>
        <Text style={styles.nameText}>Natali Romanova</Text>
        <Text style={styles.emailText}>email@example.com</Text>
      </View>
    </View>
  );
};

export default AvatarBlock;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  containerAvatarText: {
    justifyContent: 'center',
  },
  nameText: {
    color: '#212121',
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  emailText: {
    color: 'rgba(33, 33, 33, 0.8)',
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
});
