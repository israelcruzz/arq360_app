import { Text, View } from "react-native";
import { styles } from "./styles";
import { BackButton } from "~/components/back-button";
import { HeadingText } from "~/components/heading-text";
import { DescriptionText } from "~/components/description-text";
import { Controller } from "react-hook-form";
import { Label } from "~/components/label";
import { Input } from "~/components/input";
import { Button } from "~/components/button";

export const ForgotPasswordStepOneView = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <BackButton />

          <View style={styles.textHeaderArea}>
            <HeadingText title="Forgot Password?" />
            <DescriptionText text="Don’t worry! it happens. Please enter phone number associated with your account." />
          </View>
        </View>

        <View style={styles.inputsArea}>
          <View>
            <Label title="Name" />
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
                  autoComplete="email" />
              )}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
          </View>
        </View>
      </View>

      <Button text="Próximo" onPress={handleSubmit(handleSubmitForm)} />
    </View>
  )
}