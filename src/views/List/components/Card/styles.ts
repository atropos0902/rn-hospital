import { StyleSheet } from 'react-native';

import { h, m, w } from '../../../../lib/utils';
import { colors } from '../../../../lib/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.bg.white,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    borderRadius: m(22),
    marginBottom: h(30),
    padding: m(12),
    alignItems: 'center',
  },
  image: {
    width: m(64),
    height: m(64),
    borderRadius: m(10),
    marginRight: w(20),
  },
  name: {
    fontSize: m(12),
    fontWeight: '700',
    marginBottom: h(4),
  },
  location: {
    fontSize: m(12),
  },
});
