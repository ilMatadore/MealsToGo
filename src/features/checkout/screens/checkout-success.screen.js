import React from "react";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utilities/safeArea.component";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon="check-bold" />
      <Text variant="label">Success!</Text>
    </CartIconContainer>
  </SafeArea>
);
