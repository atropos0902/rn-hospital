import React from 'react';
import { TextInput, TextInputProps, Text } from 'react-native';

import { colors } from '../../lib/styles';
import styles from './styles';

interface InputProps extends TextInputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({
  label,
  style,
  placeholderTextColor = colors.grey.light,
  ...rest
}) => {
  return (
    <React.Fragment>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={placeholderTextColor}
        {...rest}
      />
    </React.Fragment>
  );
};

export default Input;
