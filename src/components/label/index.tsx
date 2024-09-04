import { Text, View } from 'react-native';
import { styles } from './styles';
import React from 'react';

export interface LabelProps {
  title: string
}

export const Label = ({ title }: LabelProps) => {
  return (
    <View style={styles.labelArea}>
      <Text style={styles.labelText}>{title}</Text>
    </View>
  );
};
