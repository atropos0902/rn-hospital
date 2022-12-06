import { StyleSheet } from 'react-native';

import { colors } from '../../lib/styles';
import { h, m } from '../../lib/utils';

export default StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.orange.primary,
    paddingVertical: h(8),
    borderRadius: m(20),
  },
  text: {
    color: colors.orange.primary,
    fontWeight: '700',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.4,
  },
});
