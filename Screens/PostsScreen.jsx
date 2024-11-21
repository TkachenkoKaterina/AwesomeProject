import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AvatarBlock from '../components/AvatarBlock';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';

const PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AvatarBlock />
      <Card showLikes={false} commentsCount={0} />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
    gap: 32,
  },
});
