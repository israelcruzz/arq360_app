import React from "react"
import { Text, View } from "react-native"
import { styles } from "@/components/badge/styles";

interface BadgeProps {
  children: React.ReactNode
}
export const Badge = ({ children }: BadgeProps) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}