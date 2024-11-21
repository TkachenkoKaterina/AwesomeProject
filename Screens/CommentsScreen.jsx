import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import SendMessageBtn from '../components/SendMessageBtn';

const comments = [
  {
    id: '1',
    text: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
    date: '09 червня, 2020 | 08:40',
    avatar: require('../assets/images/dogyAvatar.jpg'),
  },
  {
    id: '2',
    text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
    date: '09 червня, 2020 | 09:14',
    avatar: require('../assets/images/dogyAvatar.jpg'),
  },
  {
    id: '3',
    text: 'Thank you! That was very helpful!',
    date: '09 червня, 2020 | 09:20',
    avatar: require('../assets/images/dogyAvatar.jpg'),
  },
];

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/images/postsScreen/Rectangle23.png')}
      />

      <FlatList
        style={styles.commentsList}
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.commentContent}>
              <Text style={styles.commentText}>{item.text}</Text>
              <Text style={styles.commentDate}>{item.date}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.commentsList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Коментувати..."
          placeholderTextColor="#BDBDBD"
        />
        <SendMessageBtn />
      </View>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    gap: 32,
  },
  img: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  commentsList: {
    gap: 24,
  },
  commentContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 20,
  },
  commentContent: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 6,
    padding: 16,
    gap: 8,
  },
  commentText: {
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
  },
  commentDate: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    textAlign: 'right',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#212121',
  },
  sendIcon: {
    // marginLeft: 8,
  },
});
