import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Hospital } from '../../../../interfaces/Hospital';
import { imageMap } from '../../../../lib/constants';
import styles from './styles';

interface CardProps {
  hospital: Hospital;
}

const Card: React.FC<CardProps> = ({ hospital }) => {
  const navigation = useNavigation();
  const location = [hospital.street_address, hospital.city, hospital.state, hospital.zip_code]
    .filter(Boolean)
    .join(', ');

  const handlePress = () => {
    navigation.navigate('Details' as never, { hospital } as never);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={imageMap[hospital.image]} style={styles.image} />

      <View>
        <View style={{ width: 200 }}>
          <Text style={styles.name} numberOfLines={2}>
            {hospital.name}
          </Text>
        </View>

        <View style={{ width: 180 }}>
          <Text style={styles.location} numberOfLines={2}>
            {location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
