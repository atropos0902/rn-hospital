import { StyleSheet } from 'react-native';

import { colors } from '../../lib/styles';
import { h, m } from '../../lib/utils';

export default StyleSheet.create({
  image: {
    width: '100%',
    position: 'absolute',
    height: m(450),
  },
  detailsContainer: {
    top: '40%',
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.bg.white,
    height: '100%',
    borderTopLeftRadius: m(24),
    borderTopRightRadius: m(24),
    paddingHorizontal: m(32),
    paddingVertical: m(40),
  },
  actionButton: {
    marginTop: h(16),
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  trash: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
