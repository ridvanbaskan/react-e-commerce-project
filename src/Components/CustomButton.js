import React from 'react';
import { CustomButtonContainer } from './CustomButton.styles';

export default function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}
