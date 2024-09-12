import React, { useRef } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, Animated, Image } from 'react-native';
import { MyCarousel } from '~/components/carousel';

const { width: screenWidth } = Dimensions.get('window');
const ITEM_WIDTH = screenWidth * 0.7; // Largura dos itens
const ITEM_SCALE = 1.3; // Fator de escala para o item central
const GAP = 20; // Gap entre os itens

const data = [
  { 
    image: 'https://via.placeholder.com/300', 
    title: 'Item 1', 
    description: 'Descrição do Item 1' 
  },
  { 
    image: 'https://via.placeholder.com/300', 
    title: 'Item 2', 
    description: 'Descrição do Item 2' 
  },
  { 
    image: 'https://via.placeholder.com/300', 
    title: 'Item 3', 
    description: 'Descrição do Item 3' 
  },
  { 
    image: 'https://via.placeholder.com/300', 
    title: 'Item 4', 
    description: 'Descrição do Item 4' 
  },
  { 
    image: 'https://via.placeholder.com/300', 
    title: 'Item 5', 
    description: 'Descrição do Item 5' 
  }
];

export const Home = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
     <MyCarousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});