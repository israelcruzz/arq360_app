import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { BackButton } from "@/components/back-button";
import { HeadingText } from "@/components/heading-text";
import { DescriptionText } from "@/components/description-text";
import { Button } from "@/components/button";
import { useSignUpStepFor } from "./model";
import { SUBSCRIPTIONS_MOCK } from "@/mocks/subscriptions";

export const SignUpStepForView = ({
  subscriptionSelected,
  handleSelectSubscription,
  handleNextScreenClick,
}: ReturnType<typeof useSignUpStepFor>) => {
  return (
    <View style={styles.container}>
      <View>
        <BackButton />

        <View style={styles.textHeaderArea}>
          <HeadingText title="Chose your plan" />
          <DescriptionText text="Your new password must be unique from those previously used." />
        </View>

        <View style={styles.subscriptionArea}>
          {SUBSCRIPTIONS_MOCK.map((subscription, index) => {
            return (
              <TouchableOpacity onPress={() => handleSelectSubscription(subscription.id)}>
                <View
                  key={`@subscription-card/${index}`}
                  style={[
                    styles.subscriptionCardArea,
                    subscriptionSelected === subscription.id && styles.subscriptionCardAreaActive,
                  ]}>
                  <TouchableOpacity
                    style={[
                      styles.subscriptionCheckbox,
                      subscriptionSelected === subscription.id && styles.subscriptionCheckboxActive,
                    ]}
                    onPress={() => handleSelectSubscription(subscription.id)}
                  />
                  <View>
                    <Text style={styles.subscriptionHeadingText}>{subscription.title}</Text>
                    <Text>{subscription.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>

      <Button text="Próximo" onPress={handleNextScreenClick} />
    </View>
  )
}