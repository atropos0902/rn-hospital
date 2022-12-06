import { StyleSheet } from 'react-native';

import { h, m, w } from '../../../../lib/utils';
import { colors } from '../../../../lib/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.bg.white,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    borderRadius: m(22),
    marginBottom: h(30),
    padding: m(12),
  },
  skeletonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skeletonImage: {
    backgroundColor: 'red',
    width: m(64),
    height: m(64),
    borderRadius: m(10),
    marginRight: w(20),
  },
  skeletonName: {
    width: 200,
    borderRadius: m(4),
    height: h(20),
    marginBottom: h(8),
  },
  skeletonLocation: {
    width: 120,
    borderRadius: m(4),
    height: h(20),
  },
});
