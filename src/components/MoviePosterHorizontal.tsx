import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePosterHorizontal = ({
  movie,
  height = 420,
  width = 300,
}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        marginTop:10,
        elevation: 9,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen', movie)}
        activeOpacity={0.8}
        style={{
          width,
          height,
          marginHorizontal: 2,
          paddingHorizontal: 7,
        }}>
        <View style={{...styles.imageContainer}}>
          <Image source={{uri}} style={styles.image} />
        </View>
      </TouchableOpacity>

      <View
        style={{
          marginHorizontal: 2,
          paddingHorizontal: 7,
          width,
          flexWrap: 'nowrap',
        }}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>

        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="#fcba03" size={18} />

          <Text> {movie.vote_average}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
  },
  posterImage: {
    flex: 1,
  },

  subTitle: {
    fontSize: 16,
    opacity: 0.8,
    maxHeight:40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  },
});
