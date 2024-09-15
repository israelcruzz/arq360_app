import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Badge } from '~/components/badge';
import { MyCarousel } from '~/components/carousel';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { HeadingText } from '~/components/heading-text';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Badge>
          <FontAwesome6 name="location-dot" size={12} color="#666666" />
          <Text>São Paulo, SP</Text>
        </Badge>

        <TouchableOpacity>
          <Image style={styles.avatar} source={{ uri: 'https://github.com/israelcruzz.png' }} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentTextArea}>
        <HeadingText title={`Hello, Israel ${'\n'}Dream Projects`} />

        <View style={styles.headingTextArea}>
          <Text style={styles.headingText}>Projects</Text>

          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <MyCarousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    backgroundColor: "#FFFFFF"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 9999,
    objectFit: 'cover',
  },
  contentTextArea: {
    paddingHorizontal: 24,
    marginTop: 24
  },
  headingTextArea: {
    marginTop: 24,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#000000',
  },
  headingText: {
    color: '#000000',
    fontWeight: 'medium',
    fontSize: 24
  },
  seeAllText: {
    fontSize: 14
  }
});