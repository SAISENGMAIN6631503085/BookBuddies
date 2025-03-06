import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

const RatingStars = ({ rating }) => {
  return (
    <View style={styles.container}>
      <Rating
        type="star"
        ratingCount={5}
        startingValue={rating}
        imageSize={20}
        readonly
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
});

export default RatingStars;