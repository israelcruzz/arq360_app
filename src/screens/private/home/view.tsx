import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Badge } from '@/components/badge';
import { MyCarousel } from '@/components/carousel';
import { HeadingText } from '@/components/heading-text';
import { styles } from "@/screens/private/home/styles";
import { useHome } from './model';
import { MapPin } from 'lucide-react-native';

export const HomeView = ({
  handleClickAvatar,
  address,
  handleClickSeeAll
}: ReturnType<typeof useHome>) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Badge>
          <MapPin size={16} color="#666666" />
          <Text>{address}</Text>
        </Badge>

        <TouchableOpacity onPress={handleClickAvatar}>
          <Image style={styles.avatar} source={{ uri: 'https://github.com/israelcruzz.png' }} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentTextArea}>
        <HeadingText title={`Olá, Israel ${'\n'}Dream Projetos`} />

        <View style={styles.headingTextArea}>
          <Text style={styles.headingText}>Projetos</Text>

          <TouchableOpacity>
            <Text style={styles.seeAllText} onPress={handleClickSeeAll}>Ver Todos</Text>
          </TouchableOpacity>
        </View>
      </View>
      <MyCarousel />
    </View>
  );
};
