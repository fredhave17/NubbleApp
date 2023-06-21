import React from 'react';

import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {buttonVariants} from './ButtonVariants';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

export type ButtonVariant = 'primary' | 'outline' | 'secondary';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  variant?: ButtonVariant;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  variant = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonVariant =
    buttonVariants[variant][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonVariant.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonVariant.content} />
      ) : (
        <Text variant="paragraphMedium" bold color={buttonVariant.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
