import { Feather } from '@expo/vector-icons';
import {
  Image,
  Modal,
  ScrollView, Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Button } from '@/components/button';
import { CardProject } from '@/components/card-project';
import { ClientLine } from '@/components/client-line';
import { HeadingText } from '@/components/heading-text';
import { Input } from '@/components/input';
import { Controller } from 'react-hook-form';
import { Label } from '@/components/label';
import { styles } from '@/screens/private/explorer/styles';
import { useExplorer } from './model';
// import WebView from "react-native-webview";

export const ExplorerView = ({
  activeBadge,
  addClientModal,
  addedClientImage,
  control,
  errors,
  formatInputPhone,
  handleActiveAddClientModal,
  handleActiveRemoveClientModal,
  handleChangeActiveBadge,
  handleChangeTextQuery,
  handleDesactiveAddClientModal,
  handleDesactiveRemoveClientModal,
  handlePickerClientImage,
  handleRemoveAddedClientImage,
  handleSubmit,
  handleSubmitClientForm,
  handleClickViewProject,
  removeClientModal,
}: ReturnType<typeof useExplorer>) => {
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
        {activeBadge === 'projects' ? (
          <>
            <Input onChangeText={handleChangeTextQuery} placeholder="Pesquisar">
              <Feather name="search" size={24} color="#828282" />
            </Input>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.projectArea}>
              {Array.from({ length: 10 }).map((_, index) => {
                return (
                  <CardProject
                    key={`@arq360/card-project-${index}`}
                    imageUri="https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    locate="São Paulo, SP"
                    title="Apartamento DBZ"
                    onPress={handleClickViewProject}
                  />
                );
              })}
            </ScrollView>
          </>
        ) : (
          <>
            <View style={styles.searchClientArea}>
              <View style={{ flex: 1 }}>
                <Input onChangeText={handleChangeTextQuery} placeholder="Pesquisar">
                  <Feather name="search" size={24} color="#828282" />
                </Input>
              </View>

              <TouchableOpacity style={styles.addClientButton} onPress={handleActiveAddClientModal}>
                <Feather name="plus" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.projectArea}>
              {Array.from({ length: 10 }).map((_, index) => {
                return (
                  <ClientLine
                    onPress={handleActiveRemoveClientModal}
                    imageUri="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Vanessa Lopes C."
                    key={`@arq360/client-line-${index}-${new Date()}`}
                  />
                );
              })}
            </ScrollView>

            <Modal
              animationType="fade"
              transparent
              visible={addClientModal}
              onRequestClose={handleDesactiveAddClientModal}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>Criar Cliente</Text>

                  <View style={{ width: '100%', gap: 8 }}>
                    <View>
                      <Label title="Nome" />
                      <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                          <Input onChangeText={onChange} value={value} placeholder="Nome" />
                        )}
                      />
                      {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
                    </View>

                    <View>
                      <Label title="Número (Celular)" />
                      <Controller
                        control={control}
                        name="numberTel"
                        render={({ field: { onChange, value } }) => (
                          <Input
                            onChangeText={(value) => onChange(formatInputPhone(value))}
                            value={formatInputPhone(value)}
                            keyboardType="numeric"
                            placeholder="(11) 24242-1122"
                          />
                        )}
                      />
                      {errors.numberTel && (
                        <Text style={styles.errorText}>{errors.numberTel.message}</Text>
                      )}
                    </View>

                    <View>
                      <Label title="Imagem (Opcional)" />
                      {addedClientImage ? (
                        <View style={{ width: 64, height: 64, borderRadius: 999 }}>
                          <Image
                            source={{ uri: addedClientImage }}
                            style={{ width: 64, height: 64, borderRadius: 999 }}
                          />
                          <TouchableOpacity
                            style={{
                              position: 'absolute',
                              top: 0,
                              right: 0,
                              borderRadius: 999,
                              backgroundColor: '#000000',
                              padding: 4,
                            }}>
                            <Feather
                              name="x"
                              size={18}
                              color="#FFFFFF"
                              onPress={handleRemoveAddedClientImage}
                            />
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <TouchableOpacity
                          onPress={handlePickerClientImage}
                          style={{
                            width: 64,
                            height: 64,
                            borderRadius: 999,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#E8ECF4',
                          }}>
                          <Feather name="plus" size={24} color="#000000" />
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                  <View style={{ width: '100%', gap: 12 }}>
                    <Button onPress={handleSubmit(handleSubmitClientForm)} text="Criar" />
                    <Button
                      text="Voltar"
                      variant="secondary"
                      onPress={handleDesactiveAddClientModal}
                    />
                  </View>
                </View>
              </View>
            </Modal>

            <Modal
              animationType="fade"
              transparent
              visible={removeClientModal}
              onRequestClose={handleDesactiveRemoveClientModal}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>Você deseja excluir este cliente?</Text>
                  <View style={{ width: '100%', gap: 12 }}>
                    <Button text="Excluir" />
                    <Button
                      text="Voltar"
                      variant="secondary"
                      onPress={handleDesactiveRemoveClientModal}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </>
        )}
      </View>
    </View>
  );
};
