import { StyleSheet } from 'react-native';

import { h, m, w } from '../../lib/utils';
import { colors } from '../../lib/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: m(24),
    fontWeight: '700',
  },
  list: {
    paddingHorizontal: w(32),
    paddingTop: h(8),
    overflow: 'visible',
  },
  skeleton: {
    paddingHorizontal: w(32),
    paddingTop: h(8),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: w(32),
    paddingTop: h(30),
    paddingBottom: h(20),
    backgroundColor: colors.bg.primary,
    zIndex: 2,
  },
});
