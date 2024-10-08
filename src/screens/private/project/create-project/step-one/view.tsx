import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { BackButton } from "@/components/back-button"
import { HeadingText } from "@/components/heading-text"
import { DescriptionText } from "@/components/description-text"
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { useCallback, useEffect, useState } from "react"
import axios from "axios";
import { Feather } from "@expo/vector-icons"
import { Button } from "@/components/button"
import * as ImagePicker from 'expo-image-picker';
import { useCreateProjectStepOne } from "./model"

export const CreateProjectStepOneView = ({
  control,
  errors,
  handleSubmitForm,
  coverImageProject,
  formatInputCep,
  handlePickImage,
  handleRemoveCoverImage,
  handleSubmit
}: ReturnType<typeof useCreateProjectStepOne>) => {
  return (
    <View style={styles.container}>
      <View>
        <BackButton />
        <View style={styles.textHeaderArea}>
          <HeadingText title="Crie um Projeto" />
          <DescriptionText text="Your new password must be unique from those previously used." />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewArea} showsVerticalScrollIndicator={false}>
        <View style={styles.formArea}>
          <View>
            <Label title="Nome do Projeto" />
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Casa Exemplo"
                  placeholderTextColor="#D1D1D1"
                  keyboardType="default"
                  isErrorValidate={!!errors.name}
                />
              )}
            />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
          </View>

          <View>
            <Label title="Descrição" />
            <Controller
              control={control}
              name="description"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Casa feita para..."
                  multiline
                  numberOfLines={5}
                  placeholderTextColor="#D1D1D1"
                  keyboardType="default"
                  isErrorValidate={!!errors.description}
                  style={{ textAlignVertical: 'top' }}
                />
              )}
            />
            {errors.description && <Text style={styles.error}>{errors.description.message}</Text>}
          </View>

          <View>
            <Label title="CEP" />
            <Controller
              control={control}
              name="cep"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={(value) => onChange(formatInputCep(value))}
                  onBlur={onBlur}
                  value={formatInputCep(value)}
                  placeholder="01111-100"
                  placeholderTextColor="#D1D1D1"
                  keyboardType="numeric"
                  autoCapitalize="none"
                  isErrorValidate={!!errors.cep}
                  autoComplete="postal-address"
                />
              )}
            />
            {errors.cep && <Text style={styles.error}>{errors.cep.message}</Text>}
          </View>

          <View>
            <Label title="Endereço" />
            <Controller
              control={control}
              name="address"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Rua Exemplo"
                  placeholderTextColor="#D1D1D1"
                  keyboardType="default"
                  autoCapitalize="none"
                  isErrorValidate={!!errors.address}
                  autoComplete="address-line1"
                />
              )}
            />
            {errors.address && <Text style={styles.error}>{errors.address.message}</Text>}
          </View>

          <View>
            <Label title="Bairro" />
            <Controller
              control={control}
              name="neighborhood"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Bairro Exemplo"
                  placeholderTextColor="#D1D1D1"
                  keyboardType="default"
                  autoCapitalize="none"
                  isErrorValidate={!!errors.neighborhood}
                  autoComplete="address-line2"
                />
              )}
            />
            {errors.neighborhood && <Text style={styles.error}>{errors.neighborhood.message}</Text>}
          </View>

          <View style={{ flexDirection: "row", width: "100%", gap: 24 }}>

            <View style={{ flex: 1 }}>
              <Label title="Cidade" />
              <Controller
                control={control}
                name="city"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Bairro Exemplo"
                    placeholderTextColor="#D1D1D1"
                    keyboardType="default"
                    autoCapitalize="none"
                    isErrorValidate={!!errors.city}
                    autoComplete="street-address"
                  />
                )}
              />
              {errors.city && <Text style={styles.error}>{errors.city.message}</Text>}
            </View>

            <View style={{ flex: 0.5 }}>
              <Label title="Número" />
              <Controller
                control={control}
                name="number"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={String(value)}
                    placeholder="121"
                    placeholderTextColor="#D1D1D1"
                    keyboardType="numeric"
                    autoCapitalize="none"
                    isErrorValidate={!!errors.number}
                    autoComplete="cc-number"
                  />
                )}
              />
              {errors.number && <Text style={styles.error}>{errors.number?.message}</Text>}
            </View>
          </View>

          <View>
            <Label title="Tamanho" />
            <Controller
              control={control}
              name="size"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={String(value)}
                  placeholder="200m²"
                  placeholderTextColor="#D1D1D1"
                  keyboardType="default"
                  isErrorValidate={!!errors.size}
                />
              )}
            />
            {errors.size && <Text style={styles.error}>{errors.size.message}</Text>}
          </View>

          <View>
            <Label title="Imagem do projeto" />
            {
              coverImageProject ? (
                <View style={styles.coverImageArea}>
                  <Image
                    width={128 + 98}
                    height={128 + 16}
                    borderRadius={16}
                    source={{ uri: coverImageProject }}
                  />
                  <TouchableOpacity style={styles.dropCoverImageButton} onPress={handleRemoveCoverImage}>
                    <Feather name="x" size={16} color="white" />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.coverImageAreaDesactive}>
                  <TouchableOpacity style={styles.buttonUpload} onPress={handlePickImage}>
                    <Feather name="plus" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              )
            }
          </View>
        </View>
      </ScrollView>

      <Button text="Próximo" variant="primary" onPress={handleSubmit(handleSubmitForm)} />
    </View>
  )
}