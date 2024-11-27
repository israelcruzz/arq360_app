import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { BackButton } from "@/components/back-button";
import { HeadingText } from "@/components/heading-text";
import { DescriptionText } from "@/components/description-text";
import { Button } from "@/components/button";
import { useForgotPasswordStepTwo } from "./model";
import { Controller } from "react-hook-form";

type OTPFieldNames = 'otp0' | 'otp1' | 'otp2' | 'otp3' | 'otp4';
export const ForgotPasswordStepTwoView = ({
  control,
  errors,
  handleSubmit,
  handleSubmitForm,
  handleResendCode,
  isResendTimerActive,
  optRefs,
  timer,
  opts
}: ReturnType<typeof useForgotPasswordStepTwo>) => {
  return (
    <View style={styles.container}>
      <View>
        <BackButton />

        <View style={styles.textHeaderArea}>
          <HeadingText title="Digite o código" />
          <DescriptionText text="Um código de 4 digitos foi enviado para o seu e-mail" />
        </View>

        <View style={styles.otpArea}>
          {opts.map((_, index) => (
            <Controller
              key={index}
              control={control}
              name={`otp${index}` as OTPFieldNames}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.optButton}>
                  <TextInput
                    ref={(el) => (optRefs.current[index] = el)}
                    style={styles.optButton}
                    maxLength={1}
                    keyboardType="numeric"
                    value={value}
                    onChangeText={(text) => {
                      onChange(text);
                      if (text.length === 1 && index < 4) {
                        optRefs.current[index + 1].focus();
                      } else if (text.length === 0 && index > 0) {
                        optRefs.current[index - 1].focus();
                      }
                    }}
                    onBlur={onBlur}
                  />
                </View>
              )}
            />
          ))}
        </View>
        {errors.otp0 && <Text style={styles.error}>{errors.otp0.message}</Text>}
      </View>

      <View style={styles.buttonsArea}>
        <Button text="Próximo" onPress={handleSubmit(handleSubmitForm)} />
        <TouchableOpacity onPress={handleResendCode} disabled={isResendTimerActive}>
          <Text style={styles.resendText}>
            Reenviar Código {isResendTimerActive && <Text style={styles.timerText}>({timer})</Text>}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}