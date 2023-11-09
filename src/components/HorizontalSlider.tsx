import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

import {MoviePoster} from './MoviePoster';
import { MoviePosterHorizontal } from './MoviePosterHorizontal';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View
      style={{
        height: title ? 320 : 220,
      }}>
      {title && (
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 20}}>
          {title}
        </Text>
      )}

      <FlatList
        ListHeaderComponent={<View style={{width: 10}} />}
        data={movies}
        renderItem={({item}: any) => (
            <MoviePosterHorizontal movie={item} width={140} height={200} />

            
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

    </View>
  );
};
