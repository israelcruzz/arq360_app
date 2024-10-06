import { Text, View } from "react-native";
import { styles } from "./styles";
import { BackButton } from "@/components/back-button";
import { HeadingText } from "@/components/heading-text";
import { DescriptionText } from "@/components/description-text";
import { Controller } from "react-hook-form";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useEditInformation } from "./model";

export const EditInformationView = ({
  control,
  errors,
  handleSubmit,
  handleSubmitForm,
  iconsVerifyEmail,
  verifyEmail,
}: ReturnType<typeof useEditInformation>) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <BackButton />

          <View style={styles.textHeaderArea}>
            <HeadingText title="Editar Informações" />
            <DescriptionText text="Your new password must be unique from those previously used." />
          </View>
        </View>

        <View style={styles.inputsArea}>
          <View>
            <Label title="Name" />
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="John Doe"
                  placeholderTextColor="#D1D1D1"
                  keyboardType="default"
                  autoCapitalize="none"
                  isErrorValidate={!!errors.name}
                  autoComplete="name" />
              )}
            />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
          </View>

          <View>
            <Label title="E-mail" />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="example@gmail.com"
                  placeholderTextColor="#D1D1D1"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  isErrorValidate={!!errors.email}
                  autoComplete="email">
                  {iconsVerifyEmail[String(verifyEmail)]}
                </Input>
              )}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
          </View>

        </View>
      </View>

      <Button text="Editar" onPress={handleSubmit(handleSubmitForm)} />
    </View>
  )
}