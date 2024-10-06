import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { BackButton } from '@/components/back-button';
import { HeadingText } from '@/components/heading-text';
import { DescriptionText } from '@/components/description-text';
import { Button } from '@/components/button';
import { Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { CLIENTS_MOCK } from '@/mocks/clients';
import { useCreateProjectStepTree } from './model';

export enum RoomType {
  LivingRoom = 'livingRoom',
  Bedroom = 'bedroom',
  Kitchen = 'kitchen',
  Bathroom = 'bathroom',
}

export const CreateProjectStepTreeView = ({
  handleActiveAddClientModal,
  addClientModal,
  addedClientImage,
  control,
  errors,
  formatInputPhone,
  handleChangeTextQuery,
  handleSubmitClientForm,
  removeClientModal,
  handleDesactiveAddClientModal,
  handleDesactiveRemoveClientModal,
  handlePickerClientImage,
  handleRemoveAddedClientImage,
  handleRemoveSelectedClient,
  handleSelectClient,
  handleSubmit,
  selectedClient,
  handleClickNextScreen
}: ReturnType<typeof useCreateProjectStepTree>) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <BackButton />
          <View style={styles.textHeaderArea}>
            <HeadingText title="Adicionar Clientes" />
            <DescriptionText text="Your new password must be unique from those previously used." />
          </View>
        </View>
      </View>

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

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.projectArea}>
          {CLIENTS_MOCK.length > 0 ? (
            CLIENTS_MOCK.map((client, index) => {
              return (
                <View style={styles.clientArea} key={`@arq360/client-line-${client.id}-${index}`}>
                  <View style={styles.clientAreaHeader}>
                    <Image
                      width={48}
                      height={48}
                      source={{ uri: client.imageUri }}
                      style={styles.avatar}
                    />

                    <Text style={styles.clientNameText}>{client.name}</Text>
                  </View>
                  {client.id !== selectedClient?.id ? (
                    <TouchableOpacity
                      style={styles.addClientButtonArea}
                      onPress={() => handleSelectClient(client)}>
                      <Text style={styles.addClientButtonText}>Adicionar</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.clientRemoveButton}
                      onPress={handleRemoveSelectedClient}>
                      <Text style={styles.clientRemoveTextButton}>Remover</Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })
          ) : (
            <Text>Nenhum cliente encontrado</Text>
          )}
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
                <Button text="Voltar" variant="secondary" onPress={handleDesactiveAddClientModal} />
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

      <View style={{ gap: 24 }}>
        <Button text="Pular" variant="secondary" onPress={handleClickNextScreen} />
        <Button text="Próximo" variant="primary" onPress={handleClickNextScreen} />
      </View>
    </View>
  );
};
