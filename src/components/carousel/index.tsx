import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage, AdditionalParallaxProps } from 'react-native-snap-carousel';
import { View, Text, Dimensions, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CarouselItem {
  title: string;
  subtitle: string;
  illustration: string;
}

const ENTRIES1: CarouselItem[] = [
  {
    title: 'Alameda Avenue',
    subtitle: '2003 Berklay, CA 9432',
    illustration: 'https://i.pinimg.com/736x/af/bd/02/afbd02e8adf355aa66fb98bd490c2801.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

const { width: screenWidth } = Dimensions.get('window');

export const MyCarousel: React.FC = () => {
  const [entries, setEntries] = useState<CarouselItem[]>([]);
  const carouselRef = useRef<Carousel<CarouselItem>>(null);

  const goForward = () => {
    carouselRef.current?.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = (
    { item }: { item: CarouselItem },
    parallaxProps?: AdditionalParallaxProps
  ) => {
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <ParallaxImage
            source={{ uri: item.illustration }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
          <View style={styles.textArea}>
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.subtitle} numberOfLines={2}>
              {item.subtitle}
            </Text>
          </View>

          <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0, 0.6)']} style={styles.linearGradient} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: 500,
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'white',
    borderRadius: 16,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  textArea: {
    position: 'absolute',
    bottom: 0,
    padding: 24,
    zIndex: 99,
  },
  title: {
    paddingTop: 10,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: 'white',
    opacity: 0.7,
  },
  linearGradient: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    borderRadius: 16,
    backgroundColor: 'black',
    opacity: 0.1,
    zIndex: 1,
  },
});
