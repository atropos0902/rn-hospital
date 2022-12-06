import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styles from './styles';

const SkeletonCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder>
        <View style={styles.skeletonContainer}>
          <View style={styles.skeletonImage} />
          <View>
            <View style={styles.skeletonName} />
            <View style={styles.skeletonLocation} />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default SkeletonCard;
