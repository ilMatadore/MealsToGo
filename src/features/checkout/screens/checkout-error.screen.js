import React from "react";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utilities/safeArea.component";
import { colors } from "../../../infrastucture/theme/colors";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
