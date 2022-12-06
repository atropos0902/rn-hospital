import { StyleSheet } from 'react-native';

import { colors } from '../../lib/styles';
import { h, m, w } from '../../lib/utils';

export default StyleSheet.create({
  label: {
    color: colors.orange.primary,
    fontWeight: '500',
    marginBottom: h(4),
    fontSize: m(12),
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey.primary,
    paddingVertical: h(10),
    paddingHorizontal: w(12),
    marginBottom: h(12),
    borderRadius: m(10),
    fontSize: m(12),
  },
});
