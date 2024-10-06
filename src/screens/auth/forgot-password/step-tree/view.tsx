import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { BackButton } from "@/components/back-button";
import { HeadingText } from "@/components/heading-text";
import { DescriptionText } from "@/components/description-text";
import { Controller } from "react-hook-form";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useForgotPasswordStepTreeView } from "./model";

export const ForgotPasswordStepTreeView = ({
  control,
  errors,
  handleSubmit,
  handleSubmitForm,
  handleViewConfirmPassoword,
  handleViewPassword,
  iconsVerifyPassword,
  viewConfirmPassword,
  viewPassword
}: ReturnType<typeof useForgotPasswordStepTreeView>) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <BackButton />

          <View style={styles.textHeaderArea}>
            <HeadingText title="Create new password" />
            <DescriptionText text="Your new password must be unique from those previously used." />
          </View>
        </View>

        <View style={styles.inputsArea}>
          <View>
            <Label title="Senha" />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  secureTextEntry={viewPassword}
                  placeholder="********"
                  placeholderTextColor="#D1D1D1"
                  keyboardType="default"
                  autoCapitalize="none"
                  isErrorValidate={!!errors.password}
                  autoComplete="password">
                  <TouchableOpacity onPress={handleViewPassword}>
                    {iconsVerifyPassword[String(viewPassword)]}
                  </TouchableOpacity>
                </Input>
              )}
            />
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
          </View>

          <View>
            <Label title="Confirmar Senha" />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  secureTextEntry={viewConfirmPassword}
                  placeholder="********"
                  placeholderTextColor="#D1D1D1"
                  keyboardType="default"
                  autoCapitalize="none"
                  isErrorValidate={!!errors.confirmPassword}
                  autoComplete="password">
                  <TouchableOpacity onPress={handleViewConfirmPassoword}>
                    {iconsVerifyPassword[String(viewConfirmPassword)]}
                  </TouchableOpacity>
                </Input>
              )}
            />
            {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}
          </View>

        </View>
      </View>

      <Button text="Próximo" onPress={handleSubmit(handleSubmitForm)} />
    </View>
  )
}