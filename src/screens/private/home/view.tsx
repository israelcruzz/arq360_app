import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Badge } from '@/components/badge';
import { MyCarousel } from '@/components/carousel';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { HeadingText } from '@/components/heading-text';
import { styles } from "@/screens/private/home/styles";
import { useHome } from './model';

export const HomeView = ({
  handleClickAvatar
}: ReturnType<typeof useHome>) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Badge>
          <FontAwesome6 name="location-dot" size={12} color="#666666" />
          <Text>São Paulo, SP</Text>
        </Badge>

        <TouchableOpacity onPress={handleClickAvatar}>
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
