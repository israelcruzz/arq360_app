import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardProject } from "~/components/card-project";
import { ClientLine } from "~/components/client-line";
import { HeadingText } from "~/components/heading-text";
import { Input } from "~/components/input";
// import WebView from "react-native-webview";

type BadgeType = 'projects' | 'clients'

export const ExplorerView = () => {
  const [activeBadge, setActiveBadge] = useState<BadgeType>('projects');


  const handleChangeTextQuery = (query: string) => {
    if (!query.trim()) return;
    Alert.alert(query.trim())
  }

  const handleChangeActiveBadge = () => {
    setActiveBadge((prev) => {
      return prev === 'projects' ? 'clients' : 'projects'
    })
  }

  return (
    <View style={styles.container}>
      <HeadingText title="Explorer" />

      <View style={styles.badgesButtonsArea}>
        <TouchableOpacity
          onPress={handleChangeActiveBadge}
          style={[
            styles.badgeButtonArea,
            activeBadge === 'projects'
              ? styles.badgeButtonAreaActive
              : styles.badgeButtonAreaDesactive,
          ]}
          activeOpacity={0.9}>
          <Text
            style={[
              activeBadge === 'projects' ? styles.badgeTextActive : styles.badgeTextDesactive,
            ]}>
            Projetos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleChangeActiveBadge}
          style={[
            styles.badgeButtonArea,
            activeBadge === 'clients'
              ? styles.badgeButtonAreaActive
              : styles.badgeButtonAreaDesactive,
          ]}
          activeOpacity={0.8}>
          <Text
            style={[
              activeBadge === 'clients' ? styles.badgeTextActive : styles.badgeTextDesactive,
            ]}>
            Clientes
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Input onChangeText={handleChangeTextQuery} placeholder="Pesquisar">
          <Feather name="search" size={24} color="#828282" />
        </Input>
        {
          activeBadge === 'projects' ? (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.projectArea}>
              {
                Array.from({ length: 10 }).map((_, index) => {
                  return (
                    <CardProject
                      key={`@arq360/card-project-${index}`}
                      imageUri="https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      locate="São Paulo, SP"
                      title="Apartamento DBZ"
                    />
                  )
                })
              }

            </ScrollView>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.projectArea}>
              {
                Array.from({ length: 10 }).map((_, index) => {
                  return <ClientLine imageUri="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Vanessa Lopes C." key={`@arq360/client-line-${index}-${new Date()}`} />
                })
              }
            </ScrollView>
          )
        }
      </View>
    </View>
    // <WebView
    //   style={styles.container}
    //   source={{ uri: 'https://dgbmm.csb.app/' }}
    // />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24
  },
  badgesButtonsArea: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
    marginTop: 12,
  },
  badgeButtonArea: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },
  badgeTextActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  badgeTextDesactive: {
    color: '#000000',
    fontWeight: 'semibold'
  },
  badgeButtonAreaDesactive: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8ECF4',
  },
  badgeButtonAreaActive: {
    backgroundColor: '#000000',
  },
  projectArea: {
    paddingBottom: 200,
    paddingTop: 24,
    gap: 24
  },
});