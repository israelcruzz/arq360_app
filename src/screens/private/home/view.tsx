import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Badge } from '~/components/badge';
import { MyCarousel } from '~/components/carousel';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Badge>
          <FontAwesome6 name="location-dot" size={12} color="#666666" />
          <Text>São Paulo, SP</Text>
        </Badge>
      </View>
      <MyCarousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});