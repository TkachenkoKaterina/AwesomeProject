import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Card = ({ showLikes = false, commentsCount = 0, likesCount = 0 }) => {
  const navigation = useNavigation();

  const commentIconColor = commentsCount > 0 ? '#FF6C00' : '#BDBDBD';
  const likeIconColor = likesCount > 0 ? '#FF6C00' : '#BDBDBD';

  const handleCommentsPress = () => {
    navigation.navigate('CommentsScreen');
  };

  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.img}
        source={require('../assets/images/postsScreen/Rectangle23.png')}
      />

      <Text style={styles.titleImg}>Ліс</Text>

      <View style={styles.postContainer}>
        <View style={styles.containerUnion}>
          <TouchableOpacity
            style={styles.commentsContainer}
            onPress={handleCommentsPress}
          >
            <Feather name="message-circle" size={24} color={commentIconColor} />
            <Text
              style={[
                styles.commentText,
                commentsCount > 0 && styles.activeCommentText,
              ]}
            >
              {commentsCount}
            </Text>
          </TouchableOpacity>

          {showLikes && (
            <View style={styles.commentsContainer}>
              <Feather name="thumbs-up" size={24} color={likeIconColor} />
              <Text
                style={[
                  styles.commentText,
                  likesCount > 0 && styles.activeLikeText,
                ]}
              >
                {likesCount}
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.mapContainer}>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <Text style={styles.mapText}>Ukraine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    gap: 8,
  },
  img: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  postContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerUnion: {
    flexDirection: 'row',
    gap: 24,
  },
  commentsContainer: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  commentText: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  activeCommentText: {
    color: '#212121',
  },
  activeLikeText: {
    color: '#FF6C00',
  },
  mapContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  mapText: {
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    textDecorationLine: 'underline',
  },
  titleImg: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
  },
});
