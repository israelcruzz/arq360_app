import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { BackButton } from '@/components/back-button';
import { HeadingText } from '@/components/heading-text';
import { DescriptionText } from '@/components/description-text';
import { Controller } from 'react-hook-form';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Feather } from '@expo/vector-icons';
import { Button } from '@/components/button';
import { ConvenientLine } from '@/components/convenient-line';
import { useCreateProjectStepTwo } from './model';
import RNPickerSelect from 'react-native-picker-select';

export const CreateProjectStepTwoView = ({
  addConvenientModal,
  control,
  convenientList,
  coverImageProject,
  handleActiveAddConvenientModal,
  handleDesactiveAddConvenientModal,
  handlePickImage,
  handleRemoveCoverImage,
  handleSubmit,
  handleSubmitForm,
  handleClickNextScreen,
  errors,
  pickerItems,
}: ReturnType<typeof useCreateProjectStepTwo>) => {
  return (
    <View style={styles.container}>
      <View>
        <BackButton />
        <View style={styles.textHeaderArea}>
          <HeadingText title="Criar Cômodo" />
          <DescriptionText text="Your new password must be unique from those previously used." />
        </View>

        <View>
          {convenientList.length > 0 &&
            convenientList.map((convenient, index) => (
              <ConvenientLine
                key={`@arq360/convenient-${index}-${new Date()}`}
                coverImage={convenient.coverImage}
                image360Uri={convenient.image360Uri}
                type={convenient.type}
              />
            ))}
        </View>
      </View>

      {convenientList.length === 0 && (
        <Image
          source={require('../../../../../assets/images/warning.png')}
          width={200}
          height={200}
        />
      )}

      <Modal
        animationType="fade"
        transparent
        visible={addConvenientModal}
        onRequestClose={handleDesactiveAddConvenientModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicione um cômodo</Text>
            <View style={styles.formArea}>
              <View>
                <Label title="Tipo do Cômodo" />
                <View
                  style={{ borderWidth: 1, borderColor: '#D1D1D1', borderRadius: 16, padding: 2 }}>
                  <Controller
                    control={control}
                    name="type"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <RNPickerSelect
                        onValueChange={(value) => onChange(value)}
                        items={pickerItems}
                        value={value}
                        placeholder={{
                          label: 'Selecione...',
                          value: value,
                          color: '#9EA0A4',
                        }}
                      />
                    )}
                  />
                </View>

                {errors.type && <Text style={styles.error}>{errors.type.message}</Text>}
              </View>

              <View>
                <Label title="Image 360 Uri" />
                <Controller
                  control={control}
                  name="image360Uri"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="https://image360.png"
                      placeholderTextColor="#D1D1D1"
                      keyboardType="default"
                      isErrorValidate={!!errors.image360Uri}
                    />
                  )}
                />
                {errors.image360Uri && (
                  <Text style={styles.error}>{errors.image360Uri.message}</Text>
                )}
              </View>

              <View>
                <Label title="Imagem do Cômodo" />
                {coverImageProject ? (
                  <View style={styles.coverImageArea}>
                    <Image
                      width={128 + 98}
                      height={128 + 16}
                      borderRadius={16}
                      source={{ uri: coverImageProject }}
                    />
                    <TouchableOpacity
                      style={styles.dropCoverImageButton}
                      onPress={handleRemoveCoverImage}>
                      <Feather name="x" size={16} color="white" />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.coverImageAreaDesactive}>
                    <TouchableOpacity style={styles.buttonUpload} onPress={handlePickImage}>
                      <Feather name="plus" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <View style={{ width: '100%', gap: 12 }}>
              <Button
                text="Voltar"
                variant="secondary"
                onPress={handleDesactiveAddConvenientModal}
              />
              <Button text="Criar" onPress={handleSubmit(handleSubmitForm)} />
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ gap: 24 }}>
        <Button text="Criar Cômodo" variant="secondary" onPress={handleActiveAddConvenientModal} />
        <Button text="Próximo" variant="primary" onPress={handleClickNextScreen} />
      </View>
    </View>
  );
};
